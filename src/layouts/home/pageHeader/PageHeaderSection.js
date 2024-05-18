import React from "react";
import CurrentTime from "../../../components/pageHeader/CurrentTime";

export default function PageHeaderSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "24px",
      }}
    >
      <div>
        <h2>Good afternoon, Sourav!</h2>
        <p>You have a leave request pending.</p>
      </div>

      <CurrentTime />
    </div>
  );
}
