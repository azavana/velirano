import { withProps } from "recompose";
import { velirano } from "../../Constants/Velirano";

const notStarted = velirano.filter(item => item.status === "NOT_STARTED");
const inProgress = velirano.filter(item => item.status === "IN_PROGRESS");
const achieved = velirano.filter(item => item.status === "ACHIEVED");
const broken = velirano.filter(item => item.status === "BROKEN");

export const withVelirano = withProps(props => ({ velirano }));
export const withNotStarted = withProps(props => ({ notStarted }));
export const withInProgress = withProps(props => ({ inProgress }));
export const withAchieved = withProps(props => ({ achieved }));
export const withBroken = withProps(props => ({ broken }));
