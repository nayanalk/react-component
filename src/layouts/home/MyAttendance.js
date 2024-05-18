import React from "react";
import attendance from "../../assets/images/attendance.jpg";

export default function MyAttendance() {
  return (
    <div className="thin-border">
      <div>
        <h3>My Attendance</h3>
        <label>Absent</label>
      </div>
      <div>
        <img src={attendance} alt="" />
      </div>
    </div>
  );
}
