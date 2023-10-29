import React from "react";

export const AdminDashboard = React.lazy(() =>
  import("./Dashboard/index.page")
);

export const AdminLogin = React.lazy(() => import("./Login/index.page"));
export const AdminForgotPassword = React.lazy(() =>
  import("./ForgotPassword/index.page")
);
export const AdminResetPassword = React.lazy(() =>
  import("./ResetPassword/index.page")
);
export const BannerListing = React.lazy(() =>
  import("./Banner/BannerListing/index.page")
);
export const AdminProfile = React.lazy(() =>
  import("./Account/AdminProfile/index.page")
);
export const ChangePassword = React.lazy(() =>
  import("./Account/ChangePassword/index.page")
);
