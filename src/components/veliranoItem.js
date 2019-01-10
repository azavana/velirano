import React from "react";
import { Checkbox } from "antd";

const VeliranoItem = props => (
  <div>
    <Checkbox defaultChecked={props.item.done}>{props.item.promise}</Checkbox>
  </div>
);

export default VeliranoItem;
