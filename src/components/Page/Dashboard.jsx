import React from "react";
import Statuscard from "../UI/Statuscard";

function Dashboard() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <Statuscard
            icon = "home"
            color = "danger"
            footer ={{ link: { loction: "/", text: "Home" }, icon: "home" }}
            category ="Total Task"
            title = "50"
          />
          <Statuscard
            icon = "today"
            color = "primary"
            footer ={{ link: { loction: "/today", text: "Today's Task" }, icon: "today" }}
            category ="Today's Task"
            title = "5"
          />
          <Statuscard
            icon = "stars"
            color = "info"
            footer ={{ link: { loction: "/important", text: "Priority" }, icon: "stars" }}
            category ="Priority Task"
            title = "2"
          />
          <Statuscard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
