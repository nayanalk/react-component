import React from "react";
import CardTitle from "../../components/todayStat/CardTitle";
import CardBody from "./todayStat/CardBody";
import CardAction from "../../components/todayStat/CardAction";

export default function TodayStat() {
  return (
    <div style={{ border: "1px solid #f1f1f1" }}>
      <CardTitle />
      <CardBody />
      <CardAction
        btnLabel={"Mark Present"}
        btnClass={"btn-primary btn-block"}
      />
    </div>
  );
}
