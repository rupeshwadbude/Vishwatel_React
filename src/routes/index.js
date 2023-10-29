/* eslint-disable no-unused-vars */
// import { useTranslation } from "react-i18next";
import { AdminLayout } from "../layouts";
import { NotFound } from "../pages";
import { adminRoutes } from "./Admin";

export const routes = () => {
  // const { t } = useTranslation();
  return [
    {
      element: <AdminLayout />,
      children: [...adminRoutes()]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ];
};

export const routesList = () => {
  let adminRouteArr = [
    ...adminRoutes()[0].children,
    ...adminRoutes()[1].children
    // ...promotionalRoutes()[0].children,
    // ...promotionalRoutes()[1].children
  ];
  return [...adminRouteArr];
};

export const moduleRoutesList = () => {
  let adminRouteArr = {
    admin: [...adminRoutes()[0].children, ...adminRoutes()[1].children]
    // promotional: [
    //   ...promotionalRoutes()[0].children,
    //   ...promotionalRoutes()[1].children
    // ]
  };
  return adminRouteArr;
};

export const getCompletePathList = () => {
  return routesList().reduce((prev, curr) => {
    prev.push(curr);
    if (curr.children) {
      prev.push(...curr.children);
    }
    return prev;
  }, []);
};
