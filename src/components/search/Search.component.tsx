import React, { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Input, Avatar } from "antd";
import "./Search.component.css";
import { ISearchProps } from "./interfaces";

const Search: React.FC<ISearchProps> = props => {
  let [visible, setVisible] = useState(false);
  let wrapperRef: any = useRef(null);
  const openSearchModal = () => {
    setVisible(true);
  };
  const search = () => {
    console.log("search something");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [visible]);

  const handleClickOutside = (event: any) => {
    let targetClassName = event.target.nodeName;
    if (targetClassName !== "INPUT" && targetClassName !== "svg") {
      setVisible(false);
    }
  };

  return (
    <>
      <span>
        <Avatar
          size="small"
          icon={<SearchOutlined onClick={openSearchModal} />}
        />
        <Modal
          visible={visible}
          footer={null}
          closable={false}
          mask={false}
          className="search-modal"
        >
          <Input
            placeholder="Search"
            className="search-box"
            suffix={<SearchOutlined onClick={search} />}
            ref={wrapperRef}
          />
        </Modal>
      </span>
    </>
  );
};

export default Search;
