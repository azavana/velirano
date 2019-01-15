import React from "react";
import { StyledSpan } from "./Styles/TagStyles";

const Tag = (props) => (
  <StyledSpan color={props.color}>{props.text}</StyledSpan>
);

export default Tag;