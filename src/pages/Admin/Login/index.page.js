import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AdminLoginForm, MetaTags, textFormatter } from "../../../components";
import config from "../../../config";
import {
  getAdminAuthData,
  getStaffAuthData
} from "../../../redux/AuthSlice/index.slice";
import moduleRoutesMap from "../../../routeControl";
import { logger } from "../../../utils";

function AdminLogin() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  let adminAuthData = useSelector(getAdminAuthData);
  let staffAuthData = useSelector(getStaffAuthData);
  useEffect(() => {
    document.querySelector("body").classList.add("dark-mode");
  }, []);

  let user = "";

  if (location.pathname.search("admin") >= 0) {
    user = "admin";
  } else {
    user = "staff";
  }

  let authData;
  if (user === "admin") {
    authData = adminAuthData;
  } else {
    authData = staffAuthData;
  }

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      const bodyData = { ...value };
      console.log(bodyData);
      navigate("/admin/dashboard");
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };
  return (
    <>
      <MetaTags title={t("text.adminLogin.loginTitle")} />
      <div className="nk-block nk-block-middle nk-auth-body">
        <div className="brand-logo pb-4 text-center">
          <Link to="/" className="logo-link">
            <img
              className="logo-light logo-img-xl"
              src={`${config.ADMIN_IMAGE_URL}/logo_white.svg`}
              alt="logo"
            />
          </Link>
        </div>
        <div className="nk-block-head text-center mb-4">
          <div className="nk-block-head-content">
            <h5 className="nk-block-title">
              {t("text.adminLogin.adminWelcome")}
              {` ${textFormatter(user)}`}
            </h5>
            <div className="nk-block-des">
              <p>{t("text.adminLogin.adminLoginDescription")}</p>
            </div>
          </div>
        </div>
        <AdminLoginForm
          user={user}
          loading={loading}
          onSubmit={onSubmit}
          authData={authData}
        />
      </div>
    </>
  );
}

export default AdminLogin;
