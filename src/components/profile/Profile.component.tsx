import React from "react";
import { Avatar, Divider, Badge } from "antd";
import { IProfile } from "./interfaces";
import "./Profile.component.css";

const Profile: React.FC<IProfile> = () => {
  const openProfile = () => {
    console.log("open profile");
  };
  return (
    <>
      <a onClick={openProfile} className="header-profile">
        <Divider type="vertical"  />
        <span style={{ color: "#ccc", fontWeight: 700, fontSize: "12px" }}>
          Virat Kohli
        </span>
        <Avatar
          shape="circle"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          style={{ background: "#ddd", marginLeft: "10px" }}
        />
      </a>
    </>
  );
};

export default Profile;
