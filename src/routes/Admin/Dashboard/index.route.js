import { AdminDashboard, Notification } from "../../../pages";
import routesMap from "../../../routeControl/adminRoutes";

export default function route() {
  return [
    {
      path: routesMap.DASHBOARD.path,
      private: false,
      name: "Dashboard",
      key: routesMap.DASHBOARD.path,
      belongsToSidebar: true,
      icon: routesMap.DASHBOARD.icon,
      element: <AdminDashboard />
    }
  ];
}
