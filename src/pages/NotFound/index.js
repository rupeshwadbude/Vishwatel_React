import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routesMap from "../../routeControl/adminRoutes";
import { modalNotification } from "../../utils";

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    let path = "";
    if (pathname.search("admin") >= 0) {
      path = routesMap.LOGIN.path;
    } else if (pathname.search("staff") >= 0) {
      path = "";
    } else {
      path = "";
    }
    modalNotification({
      type: "error",
      message: "Page Not Found"
    });
    navigate(path);
  }, []);
  return <></>;
}

export default NotFound;
