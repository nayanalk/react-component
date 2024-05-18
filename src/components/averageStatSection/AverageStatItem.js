import React from "react";

export default function AverageStatItem({ icon, title, stat, statColor }) {
  return (
    <div
      style={{
        border: "1px solid #EFEFEF",
        borderRadius: "10px",
        margin: "5px",
        padding: "12px",
      }}
    >
      <span>
        <img src={icon} alt={title} />
      </span>
      <p>{title}</p>
      <h2 style={{ color: statColor, fontSize: "30px" }}>{stat}</h2>
    </div>
  );
}
