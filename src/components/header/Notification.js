import React from "react";

export default function Notification({ title, icon, url }) {
  return (
    <div>
      <a href={url}>
        <img style={{ width: "20px" }} src={icon} alt={title} />
      </a>
    </div>
  );
}
