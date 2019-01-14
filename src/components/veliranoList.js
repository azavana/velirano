import React from "react";
import VeliranoItem from "./VeliranoItem";
import { List } from "antd";
import { withList, withTitle } from "./Enhancers/VeliranoListEnhancer";
import { compose } from "recompose";

const VeliranoList = props => (
  <List
    dataSource={props.list}
    renderItem={item => (
      <List.Item>
        <VeliranoItem item={item} />
      </List.Item>
    )}
  />
);

const withData = compose(
  withList,
  withTitle,
)

export default withData(VeliranoList);
