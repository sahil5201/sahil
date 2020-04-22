import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../UI/ProfileCard";

function Team() {
  const user = useSelector((state) => state.User.user);
  return (
    <div className="content">
      <div className="row"></div>
      <div className="row justify-content-md-center">
        <ProfileCard Image={user.imageUrl} Name={user.name} />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default Team;
