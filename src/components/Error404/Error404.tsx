import "./Error404.css";

import React from "react";
import SvgError from "../../assets/communs/error404.svg";

const Error404 = () => {
  return (
    <div className="sky">
      <div className="stars" />
      <img style={{ width: "600px" }} src={SvgError} alt="404" />
    </div>
  );
};

export default Error404;
