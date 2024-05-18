import React from "react";
import LeftMenu from "./home/LeftMenu";
import HomeContent from "./home/HomeContent";
import Header from "./header/Header";

export default function Home() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <LeftMenu />
      <div style={{ width: "100%" }}>
        <Header />
        <HomeContent />
      </div>
    </div>
  );
}
