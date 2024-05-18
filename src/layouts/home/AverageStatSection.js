import React from "react";
import AverageStatItem from "../../components/averageStatSection/AverageStatItem";

export default function AverageStatSection({ userStatList }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
      {userStatList.map((val, key) => {
        const { icon, title, stat, statColor } = val;
        return (
          <AverageStatItem
            icon={icon}
            title={title}
            stat={stat}
            statColor={statColor}
          />
        );
      })}
    </div>
  );
}
