import React from "react";
import Meter from "./Meter";
import { compose } from "recompose";
import {
  withVelirano,
  withNotStarted,
  withInProgress,
  withAchieved,
  withBroken,
} from "./Enhancers/MeterSummaryEnhancer";

const MeterSummary = (props) => (
  <div>
    <Meter title="Mbola tsy natomboka" count={props.notStarted.length} total={props.velirano.length} color="#40C4FF" />
    <Meter title="Efa manomboka" count={props.inProgress.length} total={props.velirano.length} color="#FF6F00" />
    <Meter title="Efa vita" count={props.achieved.length} total={props.velirano.length} color="#00E676" />
    <Meter title="Tsy tanteraka" count={props.broken.length} total={props.velirano.length} color="#FF4081" />
  </div>
);

const withData = compose(
  withVelirano,
  withNotStarted,
  withInProgress,
  withAchieved,
  withBroken,
);

export default withData(MeterSummary);

