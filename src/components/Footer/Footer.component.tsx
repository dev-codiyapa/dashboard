import React from "react";
import { Layout } from "antd";
import "./Footer.component.css";

const { Footer } = Layout;

const PageFooter: React.FC<any> = () => {
  return (
    <>
      <Footer style={{ background: "#fff", margin: "0px 16px 10px 16px" }} className="footer-section">
        <p>@2020 Dev-codiyapa | All right reserved</p>
      </Footer>
    </>
  );
};

export default PageFooter;
