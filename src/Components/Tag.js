import React from "react";
import { StyledSpan } from "./Styles/TagStyles";

const Tag = (props) => (
  <StyledSpan>{props.text}</StyledSpan>
);

export default Tag;