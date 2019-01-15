import { withProps } from "recompose";
import { velirano, title } from "../../Constants/Velirano";

export const withList = withProps(props => ({ list: velirano }));
export const withTitle = withProps(props => ({ title }));
