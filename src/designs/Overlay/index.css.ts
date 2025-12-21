import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(226, 188, 0, 1)",
});
