import React from "react";

interface VideoProps {
  src: string;
}

export default class Video extends React.Component<VideoProps, {}> {
  render() {
    const { src } = this.props;
    console.log("render video", src);

    const video = <video id="mv" src={src} controls={true} width={720}></video>;
    return video;
  }
}
