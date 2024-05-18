import React from "react";

export default function MenuItem({ title, icon, url }) {
  return (
    <li>
      <a href={url}>
        <span>
          <img src={icon} alt={title} />
        </span>
        <span>{title}</span>
      </a>
    </li>
  );
}
