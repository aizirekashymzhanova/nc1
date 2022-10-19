import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IFavs, IProduct } from "../../types/IntProduct";
import { useGlobalState } from "../../store";
import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";
interface IProps {
  item: IProduct;
}
const OneProduct: FC<IProps> = ({ item }) => {
  const navigate = useNavigate();
  const isProdInFav = (id: number) => {
    let fav = createFavFromLS();
    let exist = fav.products.some(({ item }: IProps) => {
      return item.id === id;
    });
    return exist;
  };

  const [, setFav] = useGlobalState("fav");
  const [inFav, setInFav] = useState(isProdInFav(item.id));

  function createFavFromLS() {
    let fav: IFavs = JSON.parse(localStorage.getItem("fav")!);

    if (!fav) {
      fav = {
        products: [],
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    return fav;
  }

  const addDelToFav = (prod: IProduct) => {
    let fav = createFavFromLS();
    let newProd = {
      item: prod,
    };

    let checkProdInFav = fav.products.some((obj: IProps) => {
      return obj.item.id === prod.id;
    });
    if (checkProdInFav) {
      fav.products = fav.products.filter((obj: IProps) => {
        return obj.item.id !== prod.id;
      });
    } else {
      fav.products.push(newProd);
    }
    localStorage.setItem("fav", JSON.stringify(fav));
    setFav(fav);
  };

  return (
    <div style={{ width: 200 }} className="oneCard">
      <CardMedia
        onClick={() => navigate("" + item.id)}
        className="cardImg"
        component="img"
        alt={item.name}
        image={`https://testbackend.nc-one.com${item.src}`}
      />
      <div className="parent">
        <CardContent>
          <Typography component="div" className="itemName">
            {item.name}
          </Typography>
        </CardContent>
        <CardActions className="cardActions">
          <Button size="small">${item.price}</Button>
          <IconButton
            size="small"
            onClick={() => {
              addDelToFav(item);
              setInFav(isProdInFav(item.id));
            }}
          >
            <FavoriteOutlinedIcon
              style={{
                background: "#FFCC26",
                color: inFav ? "#414141" : "#fff",
                padding: "1px",
              }}
            />
          </IconButton>
        </CardActions>
      </div>
    </div>
  );
};

export default OneProduct;
