import { useEffect } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useGlobalState } from "../../store";

import "./Favorites.scss";
const Favorites = () => {
  const [fav, setFav] = useGlobalState("fav");
  function createFavFromLS() {
    let fav = JSON.parse(localStorage.getItem("fav")!);

    if (!fav) {
      fav = {
        products: [],
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    return fav;
  }

  const getFav = () => {
    let fav = createFavFromLS();
    setFav(fav);
  };

  useEffect(() => {
    getFav();
  }, []);
  return (
    <div className="favorites">
      FAVORITES
      {fav?.products.length > 0 ? (
        fav.products.map((elem: any) => (
          <Card
            key={elem.item.id}
            sx={{ marginTop: "4px", borderRadius: "30px" }}
          >
            <div
              style={{
                width: 280,
                display: "flex",
              }}
            >
              <img
                src={`https://testbackend.nc-one.com${elem.item.src}`}
                alt={elem.item.name}
                width="30%"
                height="100%"
              />
              <CardContent className="cardContent">
                <span>{elem.item.name}</span>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="favPrice">${elem.item.price}</span>
                  <IconButton size="small">
                    <FavoriteOutlinedIcon
                      style={{
                        background: "#FFCC26",
                        color: "#414141",
                        padding: "1px",
                      }}
                    />
                  </IconButton>
                </div>
              </CardContent>
            </div>
          </Card>
        ))
      ) : (
        <>
          <Grid item xs={12} sm={12} md={12}>
            <h5>You don't have any favorite product yet!</h5>
            <br />
            <img
              width="60%"
              src="https://media0.giphy.com/media/3ohhwsjzpejaSWoTkI/200.gif"
              alt=""
            />
            <br />
          </Grid>
        </>
      )}
    </div>
  );
};

export default Favorites;
