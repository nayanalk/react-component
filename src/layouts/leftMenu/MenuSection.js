import React from "react";
import MenuItem from "../../components/MenuSection/MenuItem";

export default function MenuSection({ itemList }) {
  return (
    <ul>
      {itemList.map((val, key) => {
        const { menuTitle, menuIcon, menuUrl } = val;
        return (
          <MenuItem key={key} title={menuTitle} icon={menuIcon} url={menuUrl} />
        );
      })}
      {/* <MenuItem title={"Dashboard"} icon={dashboard} url={"/dashboard"} />
      <MenuItem title={"Org"} icon={"icon.png"} url={"/dashboard"} />
      <MenuItem title={"Calender"} icon={"icon.png"} url={"/dashboard"} /> */}
    </ul>
  );
}
