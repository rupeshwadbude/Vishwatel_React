import dashboard from "./Dashboard";
import auth from "./Auth";
import user from "./User";
import manageOrders from "./ManageOrders";
import contactedUs from "./ContactedUs";
import master from "./Master";
import manageInventory from "./ManageInventory";
import customNotification from "./CustomNotification/index";
import manageCms from "./ManageCms/index";
import generalSettings from "./GeneralSettings";
import ManageEarning from "./ManageEarning/index";
import promotional from "./Promotional/index";
import banner from "./Banner/index";
import winstonLog from "./WinstonLog/index";
import promoCode from "./PromoCode/index";

const AccessControl = {
  ...dashboard,
  ...auth,
  ...banner
};

export default AccessControl;
