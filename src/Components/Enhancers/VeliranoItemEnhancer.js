import { withPropsOnChange } from "recompose";

const status = new Map();

status.set("NOT_STARTED", { color: "#40C4FF", text: "Mbola tsy natomboka" });
status.set("IN_PROGRESS", { color: "#FF6F00",  text: "Efa manomboka" });
status.set("ACHIEVED", { color: "#00E676", text: "Efa vita" });
status.set("BROKEN", { color: "#FF4081", text: "Tsy tanteraka" });

export const withStatus = withPropsOnChange(
  ["item"],
  props => ({ status: status.get(props.item.status) })
);
