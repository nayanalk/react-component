import React from "react";
import timer from "../../assets/images/timer.png";

export default function CurrentTime() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        border: "1px solid #efefef",
        padding: "12px",
        borderRadius: "10px",
      }}
    >
      <div>
        <small>Current time</small>
        <h6>{new Date().toLocaleString() + ""}</h6>
      </div>
      <span>
        <img src={timer} alt="" />
      </span>
    </div>
  );
}
