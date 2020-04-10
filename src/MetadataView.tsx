import React from "react";
import { Chart } from "react-google-charts";
import DataLoader from "./data-loader";
import { Config } from "./App.types";

interface MetadataViewState {
  currentData: any;
}

interface MetadataViewProps {
  data: DataLoader;
  config: Config;
}

export default class MetadataView extends React.Component<MetadataViewProps, MetadataViewState> {
  private frame: number = 0;

  constructor(props: MetadataViewProps) {
    super(props);
    this.state = {
      currentData: null,
    };
    this.start();
  }

  render() {
    const { config } = this.props;
    const { currentData } = this.state;
    return (
      <Chart
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Name", "Value"],
          ...config.selection.map((column) => [column, currentData ? Number(currentData[column]) : 0]),
        ]}
        options={{
          hAxis: {
            minValue: config.min,
            maxValue: config.max,
          },
          vAxis: {},
        }}
        legendToggle
      />
    );
  }

  start() {
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  stop() {
    window.cancelAnimationFrame(this.frame);
  }

  private update() {
    // TODO video.currentTimeの取り方がいけてない
    const video = document.querySelector("#mv");
    const videoTime = Math.floor((video as any).currentTime * 10) / 10;

    const time = Math.floor(videoTime * 10) / 10;
    const currentData = this.props.data.get(time);
    if (currentData) {
      this.setState({ currentData });
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }
}
