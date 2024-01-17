// Header.js

import React from "react";
import Search from "antd/es/input/Search";
import { Link } from "react-router-dom";
import useHeader from "../../hooks/useHeader";

const Header = () => {
  const { onChange, totalPrice } = useHeader();

  return (
    <div className="bg-blue-500 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center">
        <Link
         className="text-2xl font-bold mr-2" to="/">Eteration</Link>
        <Search
          allowClear
          placeholder="input search text"
          onSearch={(e) => onChange("name", e)}
          style={{
            width: 200,
            marginLeft: 10,
          }}
        />
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <span className="text-lg font-medium mr-4">₺ {totalPrice}</span>
        <img
          src="https://loremflickr.com/50/50/passportphoto"
          alt="Ali Rıza"
          className="rounded-full mr-4"
        />
        <span className="text-lg font-medium mr-4">Ali Rıza</span>
      </div>
    </div>
  );
};

export default Header;
