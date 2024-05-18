import React from "react";

export default function TopMenuItem({ url, title, active }) {
  return (
    <li>
      <a
        href={url}
        style={active ? { backgroundColor: "#f2f6fc", color: "#4468c8" } : {}}
      >
        {title}
      </a>
    </li>
  );
}
