import DashboardRoutes from "./Dashboard/index.route";
import Banner from "./Banner/index.route";

import AccountRoutes from "./Account/index.route";
export default function route() {
  return [...DashboardRoutes(), ...Banner(), ...AccountRoutes()];
}
