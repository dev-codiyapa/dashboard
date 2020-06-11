import React from "react";
import { Avatar } from "antd";
import {IProfile} from "./interfaces";

const Profile: React.FC<IProfile> = () => {
  return (
    <>
      <a>
        <Avatar
          shape="square"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          style={{ background: "#ddd" }}
        />
        <span style={{ color: "#696c82", fontWeight: 800, fontSize: "12px" }}>
          Virat Kohli
        </span>
      </a>
    </>
  );
};

export default Profile;
