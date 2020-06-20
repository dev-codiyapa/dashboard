import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Input } from "antd";
import "./Search.component.css";
import { ISearchProps } from "./interfaces";

const Search: React.FC<ISearchProps> = props => {
  let [visible, setVisible] = useState(false);

  const openSearchModal = () => {
    setVisible(true);
  };
  const search = () => {
    console.log("search something");
  };
  return (
    <>
      <SearchOutlined onClick={openSearchModal} />
      <Modal
        visible={visible}
        footer={null}
        closable={false}
        mask={true}
        maskClosable={false}
        className="search-modal"
      >
        <Input
          placeholder="Search"
          className="search-box"
          suffix={<SearchOutlined onClick={search} />}
        />
      </Modal>
    </>
  );
};

export default Search;
