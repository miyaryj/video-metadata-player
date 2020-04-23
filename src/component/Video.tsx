import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../store";
import action from "../action";

const Video = () => {
  const src = useSelector((state: Store) => state.source.videoPath);
  const dispatch = useDispatch();

  console.log("video", src);

  const videoRef = useRef<HTMLVideoElement>(null);
  let frame: number;
  const update = () => {
    if (videoRef.current) {
      dispatch(action.setVideoTime(videoRef.current.currentTime));
    }
    frame = window.requestAnimationFrame(update);
  };
  const cancel = () => {
    if (frame) window.cancelAnimationFrame(frame);
  };

  return <video ref={videoRef} id="mv" src={src} controls={true} width={720} onPlay={update} onPause={cancel}></video>;
};

export default Video;
