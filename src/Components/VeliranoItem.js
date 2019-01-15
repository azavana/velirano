import React from "react";
import { Checkbox } from "rimble-ui";
import { Circle } from "rc-progress";
import Tag from "./Tag";
import { withStatus } from "./Enhancers/VeliranoItemEnhancer";

const VeliranoItem = ({ item, status }) => (
  <div
    style={{
      minHeight: 120,
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
      <Checkbox checked={item.percent === 100} onChange={() => {}} style={{ marginTop: 12 }}/>
      <div>
        <div style={{ marginTop: -20, marginBottom: 10 }}>
          <Tag text={status.text} />
        </div>
        <div>{item.promise}</div>
      </div>
    </div>
    <div style={{ marginLeft: 10, width: 44, height: 44, minWidth: 44 }}>
      <Circle
        percent={item.percent}
        strokeWidth="14"
        strokeColor="#00E676"
        trailWidth="14"
        trailColor="#EEEEEE"
      />
    </div>
  </div>
);

export default withStatus(VeliranoItem);
