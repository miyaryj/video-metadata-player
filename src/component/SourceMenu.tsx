import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../store";
import SourceMenuItem from "./SourceMenuItem";

const SourceMenu = () => {
  const sources = useSelector((state: Store) => state.config.sources);

  return (
    <button className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
      <a href="#" className="pure-menu-link">
        Source
      </a>
      <ul className="pure-menu-children" id="cv-menu-source">
        {sources.map((source) => (
          <SourceMenuItem key={source.title} {...source} />
        ))}
      </ul>
    </button>
  );
};

export default SourceMenu;
