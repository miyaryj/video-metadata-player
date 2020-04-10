import React from "react";
import SourceMenuItem from "./SourceMenuItem";
import { Source } from "./App.types";

interface SourceMenuProps {
  sources: Source[];
  setSource: (source: Source) => void;
}

export default class SourceMenu extends React.Component<SourceMenuProps, any> {
  render() {
    const { sources, setSource } = this.props;

    return (
      <button className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
        <a href="#" className="pure-menu-link">
          Source
        </a>
        <ul className="pure-menu-children" id="cv-menu-source">
          {sources.map((source) => (
            <SourceMenuItem key={source.title} setSource={setSource} {...source} />
          ))}
        </ul>
      </button>
    );
  }
}
