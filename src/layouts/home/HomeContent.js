import React from "react";
import PageHeaderSection from "./pageHeader/PageHeaderSection";
import TodayStat from "./TodayStat";
import AverageStatSection from "./AverageStatSection";
import timer from "../../assets/images/icons_03.jpg";
import arrowGreen from "../../assets/images/icons_05.jpg";
import timerGreen from "../../assets/images/icons_09.jpg";
import arrowRed from "../../assets/images/icons_10.jpg";
import MyAttendance from "./MyAttendance";

const statData = [
  {
    userStatList: [
      {
        icon: timer,
        title: "Average hours",
        stat: "7h 17mins",
      },
      {
        icon: arrowGreen,
        title: "Average check-in",
        stat: "10:33am",
      },
      {
        icon: timerGreen,
        title: "On-time arrival",
        stat: "98.56%",
        statColor: "green",
      },
      {
        icon: arrowRed,
        title: "Average check-out",
        stat: "19.12pm",
      },
    ],
  },
];

export default function HomeContent() {
  return (
    <div style={{ backgroundColor: "#fefefe" }}>
      <PageHeaderSection />

      <div className="dashboard-row">
        <TodayStat />
        {statData.map((val, key) => {
          const { userStatList } = val;
          return <AverageStatSection userStatList={userStatList} />;
        })}
        <MyAttendance />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          height: "300px",
          gap: "20px",
          padding: "0 30px",
        }}
      >
        <div className="thin-border">
          <h2>My team</h2>
        </div>
        <div className="thin-border">
          <h2>Working hostory</h2>
        </div>
      </div>
    </div>
  );
}
