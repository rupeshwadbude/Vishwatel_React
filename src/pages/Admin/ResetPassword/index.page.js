import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { MetaTags, ResetPasswordForm } from "../../../components";
import { logger } from "../../../utils";

function ResetPassword() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  let user = "";

  if (location.pathname.search("admin") >= 0) {
    user = "admin";
  } else {
    user = "staff";
  }

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      console.log(value);
    } catch (error) {
      logger(error);
    }
    setLoading(false);
  };

  return (
    <>
      <MetaTags title={t("text.adminResetPassword.title")} />
      <div className="nk-block nk-block-middle nk-auth-body">
        <div className="nk-block-head mb-3">
          <div className="nk-block-head-content">
            <h5 className="nk-block-title">
              {t("text.adminResetPassword.title")}
            </h5>
          </div>
        </div>
        <ResetPasswordForm onSubmit={onSubmit} loading={loading} />
      </div>
    </>
  );
}

export default ResetPassword;
