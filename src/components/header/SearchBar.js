import React from "react";
import searchIcon from "../../assets/images/search.png";

export default function SearchBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span>
        <img src={searchIcon} alt="" />
      </span>
      <input type="text" placeholder="Search anything.." />
    </div>
  );
}
