import React from "react";
import TopMenuItem from "../../components/header/TopMenuItem";

export default function TopMenuSection({ menuItemList }) {
  return (
    <div className="top-menu">
      <ul>
        {menuItemList.map((val, key) => {
          const { url, title, isActive } = val;
          return (
            <TopMenuItem key={key} url={url} title={title} active={isActive} />
          );
        })}
      </ul>
    </div>
  );
}
