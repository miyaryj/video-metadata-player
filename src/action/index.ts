import { ConfigSource } from "../store";
import { createAction } from "@reduxjs/toolkit";

const action = {
  setSource: createAction("setSource", (source: ConfigSource) => ({ payload: { source } })),
  setVideoTime: createAction("setVideoTime", ((time: number) => ({ payload: { time } })))
}

export default action;