import React from "react";
import "./App.css";
import Video from "./Video";
import MetadataView from "./MetadataView";
import SourceMenu from "./SourceMenu";
import DataLoader from "./DataLoader";

const App = () => {
  return (
    <div>
      <div className="l-top-left">
        <SourceMenu />
      </div>
      <DataLoader />
      <Video />
      <div id="chart-container" style={{ width: 720 }}>
        <MetadataView />
      </div>
    </div>
  );
};

export default App;
