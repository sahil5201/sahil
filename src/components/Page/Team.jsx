import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard, { TeamCard, CreateTeamCard } from "../UI/ProfileCard";
import { useEffect } from "react";
import { fetchTeamData } from "../../redux";

function Team() {
  const user = useSelector((state) => state.User.user);
  const TeamList = useSelector((state) => state.Team.team);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamData());
    
  }, [])

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
            <div className="row justify-content-between">
              {TeamList ? TeamList.length > 0 ? <TeamCard data={TeamList}/> :  <CreateTeamCard /> : ""}
              <ProfileCard Image={user.imageUrl} Name={user.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
