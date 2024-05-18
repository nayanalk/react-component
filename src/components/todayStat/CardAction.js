import React from "react";

export default function CardAction({ btnLabel, btnClass }) {
  return (
    <div>
      <button className={btnClass}>{btnLabel}</button>
    </div>
  );
}
