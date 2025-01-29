import React from "react";
import PrivateNavbar from "../shared/PrivateNavbar/PrivateNavbar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <PrivateNavbar>
      <Outlet />{" "}
    </PrivateNavbar>
  );
};

export default PrivateLayout;
