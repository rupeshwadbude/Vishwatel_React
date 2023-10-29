/* eslint-disable import/export */
import React from "react";
export * from "./Admin";
export const NotFound = React.lazy(() => import("./NotFound"));
