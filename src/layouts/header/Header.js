import React from "react";
import TopMenuSection from "./TopMenuSection";
import SearchBar from "../../components/header/SearchBar";
import Notification from "../../components/header/Notification";
import ProfileMenu from "../../components/header/ProfileMenu";

import bell from "../../assets/images/bell.png";
import inbox from "../../assets/images/inbox.png";
import avatar from "../../assets/images/avatar.png";

const topMenuData = [
  {
    menuItemList: [
      {
        title: "Dashboard",
        url: "/",
      },
      {
        title: "Leave",
        url: "/",
      },
      {
        title: "Attendance",
        url: "/",
        isActive: true,
      },
      {
        title: "Performance",
        url: "/",
      },
    ],
  },
];

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        borderBottom: "1px solid #efefef",
        padding: "16px",
      }}
    >
      {topMenuData.map((val, key) => {
        const { menuItemList } = val;
        return <TopMenuSection key={key} menuItemList={menuItemList} />;
      })}
      <div style={{ display: "flex", gap: "1rem", marginLeft: "auto" }}>
        <SearchBar />
        <Notification title={"bell"} url={"/"} icon={bell} />
        <Notification title={"inbox"} url={"/"} icon={inbox} />
        <ProfileMenu title={"user name"} avatar={avatar} />
      </div>
    </div>
  );
}
