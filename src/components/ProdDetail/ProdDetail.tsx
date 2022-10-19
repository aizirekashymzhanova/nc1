import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { IProduct } from "../../types/IntProduct";
// import { useGlobalState } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../store";

const ProdDetail = () => {
  const { id } = useParams();
  const [oneProd, setOneProd] = useGlobalState("oneProd");
  const API = `https://testbackend.nc-one.com/image?id=${id}`;
  const getOneProd = async () => {
    try {
      await fetch(API)
        .then((result) => result.json())
        .then((data) => {
          setOneProd(data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOneProd();
  }, [id]);
  return (
    <div style={{ width: 460, marginLeft: "400px" }} className="oneCardFav">
      <CardMedia
        className="cardImg"
        component="img"
        alt={oneProd.name}
        image={`https://testbackend.nc-one.com${oneProd.src}`}
      />
      <CardContent>
        <Typography gutterBottom component="div" variant="h3">
          {oneProd.name}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Button size="large">${oneProd.price}</Button>
      </CardActions>
    </div>
  );
};

export default ProdDetail;
