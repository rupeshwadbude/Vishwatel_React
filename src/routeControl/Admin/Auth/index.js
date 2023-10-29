const accessRoute = {
  LOGIN: {
    path: "/"
  },
  FORGOT_PASSWORD: {
    path: "/forget-password"
  },
  RESET_PASSWORD: {
    path: "/reset-password/:token"
  },
  CHANGE_PASSWORD: {
    path: "/admin/change-password"
  },
  PROFILE: {
    path: "/admin/profile"
  }
};

export default accessRoute;
