import React from "react";

export default function CardTitle() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Today</h3>
        <label
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",
            padding: "4px 8px",
          }}
        >
          Absent
        </label>
      </div>
    </div>
  );
}
