import React from "react";
import "./App.css";
import Video from "./Video";
import MetadataView from "./MetadataView";
import SourceMenu from "./SourceMenu";
import DataLoader from "./data-loader";
import config from "./config";
import { Source } from "./App.types";

interface State {
  source: {
    videoPath: string;
    dataPath: string;
  };
  data: DataLoader;
  videoTime: number;
}

export class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      source: {
        videoPath: `media/${config.sources[0].video}`,
        dataPath: `data/${config.sources[0].data}`,
      },
      data: new DataLoader(),
      videoTime: 0,
    };
  }

  render() {
    const { source, data } = this.state;
    data.load(source.dataPath);

    return (
      <div>
        <div className="l-top-left">
          <SourceMenu sources={config.sources} setSource={this.setSource} />
        </div>
        <Video src={source.videoPath} />
        <div id="chart-container" style={{ width: 720 }}>
          <MetadataView data={data} config={config} />
        </div>
      </div>
    );
  }

  private setSource = (source: Source) => {
    this.setState({
      source: {
        videoPath: `media/${source.video}`,
        dataPath: `data/${source.data}`,
      },
    });
  };
}
