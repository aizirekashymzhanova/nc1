import { Outlet } from "react-router-dom";
import Favorites from "../components/Favorites/Favorites";
import MyNavbar from "../components/MyNavbar/MyNavbar";

const MainLayout = () => {
  return (
    <>
      <MyNavbar />
      <div className="mainLayout">
        <Favorites />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
