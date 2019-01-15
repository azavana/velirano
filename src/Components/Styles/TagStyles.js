import styled, { css } from 'styled-components';

export const StyledSpan = styled.div`
  background-color: #2db7f5;
  color: #ffffff;
  border-radius: 4px;
  font-size: 15px;
  padding-left: 7px;
  padding-right: 7px;
  height: 22px;
  line-height: 22px;
  display: inline-block;

  ${props => props.color && css`
    background-color: ${props.color};
  `}
`