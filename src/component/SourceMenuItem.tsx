import React from "react";
import { useDispatch } from "react-redux";
import { ConfigSource } from "../store";
import action from "../action";

const SourceMenuItem = (props: ConfigSource) => {
  const dispatch = useDispatch();
  const { title } = props;

  return (
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link" onClick={() => dispatch(action.setSource(props))}>
        {title}
      </a>
    </li>
  );
};

export default SourceMenuItem;
