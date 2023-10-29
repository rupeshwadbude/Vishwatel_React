import React from "react";
import Spinner from "react-bootstrap/Spinner";

function GlobalLoader() {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
export default GlobalLoader;
