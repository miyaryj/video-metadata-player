import React from "react";
import { Source } from "./App.types";

interface SourceMenuItemProps extends Source {
  setSource: (source: Source) => void;
}

export default class SourceMenuItem extends React.Component<SourceMenuItemProps, any> {
  render() {
    const { title, setSource } = this.props;

    return (
      <li className="pure-menu-item">
        <a href="#" className="pure-menu-link" onClick={() => setSource(this.props)}>
          {title}
        </a>
      </li>
    );
  }
}
