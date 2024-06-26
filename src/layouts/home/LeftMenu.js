import React from "react";
import Logo from "../../components/leftMenu/Logo";
import MenuSection from "../leftMenu/MenuSection";

// images import
import dashboard from "../../assets/images/dashboard.png";
import org from "../../assets/images/org.png";
import parking from "../../assets/images/parking.png";
import calender from "../../assets/images/calender.png";
import recruit from "../../assets/images/recruit.png";
import mesage from "../../assets/images/mesage.png";
import help from "../../assets/images/help.png";
import settings from "../../assets/images/settings.png";

const menuData = [
  {
    leftTop: [
      {
        menuTitle: "Dashboard",
        menuIcon: dashboard,
        menuUrl: "/",
      },
      {
        menuTitle: "Org",
        menuIcon: org,
        menuUrl: "/",
      },
      {
        menuTitle: "Calender",
        menuIcon: calender,
        menuUrl: "/",
      },
      {
        menuTitle: "Parking",
        menuIcon: parking,
        menuUrl: "/",
      },
      {
        menuTitle: "Recruit",
        menuIcon: recruit,
        menuUrl: "/",
      },
      {
        menuTitle: "Messages",
        menuIcon: mesage,
        menuUrl: "/",
      },
    ],
    leftBottom: [
      {
        menuTitle: "Help",
        menuIcon: help,
        menuUrl: "/",
      },
      {
        menuTitle: "Settings",
        menuIcon: settings,
        menuUrl: "/",
      },
    ],
  },
];

export default function LeftMenu() {
  return (
    <div
      className="left-menu"
      style={{
        backgroundColor: "rgb(255 252 255)",
        padding: "12px",
        borderRight: "1px solid #f1f1f1",
        textAlign: "center",
      }}
    >
      <Logo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "calc(100vh - 114px)",
        }}
      >
        {menuData.map((val, key) => {
          const { leftTop } = val;
          return <MenuSection key={key} itemList={leftTop} />;
        })}
        {menuData.map((val, key) => {
          const { leftBottom } = val;
          return <MenuSection key={key} itemList={leftBottom} />;
        })}
      </div>
    </div>
  );
}
