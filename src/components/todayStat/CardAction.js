import React from "react";

export default function CardAction({ btnLabel, btnClass }) {
  return (
    <div style={{ padding: "1rem" }}>
      <button className={btnClass}>{btnLabel}</button>
    </div>
  );
}
