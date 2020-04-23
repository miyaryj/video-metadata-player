import { Store } from '../store';
import { createReducer } from '@reduxjs/toolkit';
import config from "../config";

const reducer = createReducer<Store>(
  {
    config: config,
    source: {
      videoPath: `media/${config.sources[0].video}`,
      dataPath: `data/${config.sources[0].data}`
    },
    videoTime: 0,
    currentData: {}
  },
  {
    setSource: (state: Store, action) => {
      const { source } = action.payload;
      state.source = {
        videoPath: `media/${source.video}`,
        dataPath: `data/${source.data}`
      };
    },
    setVideoTime: (state: Store, action) => {
      const { time } = action.payload;
      state.videoTime = time;
    },
    setCurrentData: (state: Store, action) => {
      const { data } = action.payload;
      state.currentData = data;
    }
  }
);

export default reducer;