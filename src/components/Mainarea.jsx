import React from "react";

import Table from "./UI/Table";
import { useSelector } from "react-redux";
import { insert } from '../redux/action/TaskAction'

function Mainarea() {

    const no = useSelector(state => state.count);
    const name = useSelector(state => state.name);
    const task = useSelector(state => state.task);

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <Table lg="10" Data={task}/>
        </div>
      </div>
    </div>
  );
}

export default Mainarea;
