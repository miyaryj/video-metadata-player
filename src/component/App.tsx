import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../store";
import "./App.css";
import Video from "./Video";
import MetadataView from "./MetadataView";
import SourceMenu from "./SourceMenu";
import DataLoader from "../data-loader";

const App = () => {
  const source = useSelector((state: Store) => state.source);
  const data = new DataLoader();
  data.load(source.dataPath);

  return (
    <div>
      <div className="l-top-left">
        <SourceMenu />
      </div>
      <Video src={source.videoPath} />
      <div id="chart-container" style={{ width: 720 }}>
        <MetadataView data={data} />
      </div>
    </div>
  );
};

export default App;
