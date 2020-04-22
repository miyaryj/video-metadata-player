import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import action from "../action";

interface VideoProps {
  src: string;
}

const Video = (props: VideoProps) => {
  const dispatch = useDispatch();

  const { src } = props;
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
