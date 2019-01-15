import React from "react";
import { Line } from "rc-progress";

const Meter = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 90 }}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <span style={{ fontWeight: 600 }}>{props.title}</span>
      </div>
      <div>
        <span style={{ fontWeight: 600  }}>{props.count}</span>
        <span style={{ marginLeft: 5, marginRight: 5, color: '#657786', fontWeight: 600 }}>/</span>
        <span style={{ color: '#657786', fontWeight: 600  }}>{props.total}</span>
      </div>
    </div>
    <div>
      <Line percent={props.count / props.total * 100} trailColor="#eeeeee" strokeColor={props.color} />
    </div>
  </div>
);

export default Meter;