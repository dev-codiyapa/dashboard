import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Input } from "antd";
import "./Search.component.css";

const Search: React.FC<any> = props => {
  let [visible, setVisible] = useState(false);

  const openSearchModal = () => {
    console.log("open serahc modal");
    setVisible(true);
  };

  return (
    <>
      <SearchOutlined onClick={openSearchModal} />
      <Modal
        visible={visible}
        footer={null}
        closable={false}
        mask={true}
        maskClosable={true}
        className="search-modal"
      >
        <Input placeholder="Search" className="search-box" suffix={<SearchOutlined />} />
      </Modal>
    </>
  );
};

export default Search;
