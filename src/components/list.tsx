import { ReactNode, useEffect } from "react";
import { FixedSizeList as ListList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductsList from "./ProductsList/ProductsList";
import { useGlobalState } from "../store";

const List = () => {
  const [products, setProducts] = useGlobalState("products");
  const API = "https://testbackend.nc-one.com/image";
  const getProducts = async () => {
    try {
      await fetch(API)
        .then((result) => result.json())
        .then((datas) => {
          setProducts(datas);
        });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      style={{
        height: "100wh",
        overflow: "hidden",
      }}
    >
      <AutoSizer>
        {({ width, height }): JSX.Element => (
          <ListList
            className="List"
            height={height}
            width={width}
            itemCount={products.length}
            itemSize={12}
          >
            {ProductsList}
          </ListList>
        )}
      </AutoSizer>
    </div>
  );
};

export default List;
