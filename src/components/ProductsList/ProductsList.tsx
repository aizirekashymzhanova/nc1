import { FC } from "react";
import "./ProductList.scss";
import { IProduct } from "../../types/IntProduct";
import { useGlobalState } from "../../store";
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
