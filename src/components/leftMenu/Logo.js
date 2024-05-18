import React from "react";
import LogoIcon from "../../assets/images/logo.jpg";

export default function Logo() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <img
        style={{ width: "60px", height: "60px" }}
        src={LogoIcon}
        alt="logo"
      />
    </div>
  );
}
