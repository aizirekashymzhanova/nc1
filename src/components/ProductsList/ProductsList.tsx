import { FC, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import AuttoSizer from "react-virtualized-auto-sizer";
import "./ProductList.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../types/IntProduct";
import { useGlobalState } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import OneProduct from "../OneProduct/OneProduct";

const ProductsList: FC = (props: any) => {
  const [products] = useGlobalState("products");

  return (
    <div className="p">
      {products && products.length > 0 ? (
        products.map((item: IProduct) => (
          <OneProduct item={item} key={item.id} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductsList;
