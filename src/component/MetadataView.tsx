import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../store";
import { Chart } from "react-google-charts";
import DataLoader from "../data-loader";

interface MetadataViewProps {
  data: DataLoader;
}

const MetadataView = (props: MetadataViewProps) => {
  const config = useSelector((state: Store) => state.config);
  const videoTime = useSelector((state: Store) => state.videoTime);
  const time = Math.floor(videoTime * 10) / 10;
  const currentData = props.data.get(time) as any;

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
};

export default MetadataView;
