import React from "react";
import VeliranoItem from "./veliranoItem";
import { List } from "antd";

const VeliranoList = props => (
  <List
    header={<div>{props.title}</div>}
    dataSource={props.list}
    renderItem={item => (
      <List.Item>
        <VeliranoItem item={item} />
      </List.Item>
    )}
  />
);

export default VeliranoList;
