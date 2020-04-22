import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../UI/ProfileCard";

function Team() {
  const user = useSelector((state) => state.User.user);
  return (
    <div className="content">
      <div className="row justify-content-md-center">
        <div className="card col-12 ">
          <div className="card-header card-header-tabs card-header-warning">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-start">
                <span className="btn btn-warning disable"> Team </span>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">

                </div>
              </div>
            </div>
            <ProfileCard Image={user.imageUrl} Name={user.name} />
            </div>

            <div className="row">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
