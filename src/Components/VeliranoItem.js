import React from "react";
import { Checkbox } from "rimble-ui";
import { Circle } from "rc-progress";

const VeliranoItem = ({ item }) => (
  <div
    style={{
      minHeight: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "solid 1px #E8E8E8"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Checkbox checked={item.percent === 100} onChange={() => {}} />
      <div>
        <div>{item.promise}</div>
      </div>
    </div>
    <div style={{ width: 44, height: 44, minWidth: 44 }}>
      <Circle
        percent={item.percent}
        strokeWidth="14"
        strokeColor="#F8670D"
        trailWidth="14"
        trailColor="#EEEEEE"
      />
    </div>
  </div>
);

export default VeliranoItem;
