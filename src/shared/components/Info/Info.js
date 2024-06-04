import React from "react";

import Avatar from '../UIElements/Avatar';
import profileImg from '../../../static/images/wechat.jpg';

import "./Info.css";

const Info = (props) => {
  return (
    <div className="info-container">
      <div className="info__title">
        <h3>Riverhouse (DC, NoVA Area)</h3>
        <h4>Pentagon City, Arlington, 22202</h4>
        <h3>出二手家具物品 2nd-Hand Sale</h3>
        <hr/>
        <h3>请联系 How to reach me:</h3>
        <h5>邮箱 Email: cloooud9.1997@gmail.com</h5>
        <h5>微信 WeChat:</h5>
      </div>
      <div className="info__avatar">
        <Avatar image={profileImg} alt="My QR Code" />
      </div>
      <hr/>
      <div className="info__address">
        <h4>地址 Address:</h4>
        <h5>1600 S Joyce St, Arlington, VA, 22202</h5>
        <h5>
          <a href="https://www.google.com/maps/place/38%C2%B051'35.8%22N+77%C2%B003'51.4%22W/">
            Location @ Google Maps
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Info;