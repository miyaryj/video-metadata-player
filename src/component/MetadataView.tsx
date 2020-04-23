import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../store";
import { Chart } from "react-google-charts";

const MetadataView = () => {
  const config = useSelector((state: Store) => state.config);
  const currentData = useSelector((state: Store) => state.currentData);

  return (
    <Chart
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Name", "Value"],
        ...config.selection.map((column) => [column, Number(currentData[column])]),
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
