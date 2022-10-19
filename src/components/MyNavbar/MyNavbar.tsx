import { useLocation } from "react-router-dom";
import "./MyNavbar.scss";

const MyNavbar = () => {
  const location = useLocation();
  let str = location.pathname.split("/")[1];

  return (
    <div className="navbar">
      {!isNaN(+str) && str ? (
        <span>PRODUCT PAGE</span>
      ) : (
        <span>PRODUCTS LIST PAGE</span>
      )}
    </div>
  );
};

export default MyNavbar;
