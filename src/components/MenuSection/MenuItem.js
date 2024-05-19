import React from "react";

export default function MenuItem({ title, icon, url }) {
  return (
    <li style={{ listStyle: "none" }}>
      <a href={url}>
        <span>
          <img src={icon} alt={title} />
        </span>
        <span>{title}</span>
      </a>
    </li>
  );
}
