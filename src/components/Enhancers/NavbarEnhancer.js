import { withProps } from "recompose";
import { title } from "../../Constants/Velirano";

export const withTitle = withProps(props => ({ title }));
