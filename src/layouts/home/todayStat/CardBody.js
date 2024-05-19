import React from "react";
import TodayStatContent from "../../../components/todayStat/TodayStatContent";
import TodayStatGraph from "../../../components/todayStat/TodayStatGraph";
import TimeCounter from "../../../components/todayStat/TimeCounter";

export default function CardBody() {
  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <div>
          <TodayStatContent />
          <TimeCounter />
        </div>
        <TodayStatGraph />
      </div>
    </>
  );
}
