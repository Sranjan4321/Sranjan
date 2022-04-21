import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbars, Links } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Navbars>
      <Link to="/home">
        <img
          src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
          alt="compony-logo"
          width={"100px"}
          height={"25Px"}
        />
      </Link>
      <Link to="/tenner">tenner Goods</Link>
      <Link to="/mazama">Mazama wares</Link>
      <Link to="/apparel">Apparel</Link>
      <Link to="/feature">Featured</Link>
      <Link to="/endofsale">End of Season Sales</Link>
      <Link to="/login">Login</Link>
    </Navbars>
  );
};

export default Navbar;
