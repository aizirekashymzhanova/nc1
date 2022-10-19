import React from "react";
import { Route, Routes } from "react-router-dom";
import ProdDetail from "./components/ProdDetail/ProdDetail";
import ProductList from "./components/ProductsList/ProductsList";
import MainLayout from "./layouts/MainLayout";
import { useGlobalState } from "./store";

const MyRoutes = () => {
  const [item, setItem] = useGlobalState("products");
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/:id" element={<ProdDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
