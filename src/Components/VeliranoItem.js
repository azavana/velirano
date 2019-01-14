import React from "react";
import { Checkbox } from 'rimble-ui';

const VeliranoItem = props => (
  <div style={{ minHeight: 100, display: 'flex', alignItems: 'center', borderBottom: 'solid 1px #E8E8E8' }}>
    <Checkbox checked={props.item.done} onChange={() => {}} />
    <div>
      <div>{props.item.promise}</div>
    </div>
  </div>
);

export default VeliranoItem;
