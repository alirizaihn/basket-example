import { Checkbox, Radio } from "antd";
import Search from "antd/es/input/Search";
import React, { useMemo, useState } from "react";

const FilterCard = (props) => {
  const {
    title,
    name,
    type,
    options,
    hasSearch = false,
    key,
    onChange,
    value,
  } = props;

  const [searchText, setSearchText] = useState("");
  const onChangeValue = (key, value) => {
    onChange(key, value);
  };
  const filterdOptions = useMemo(
    () =>
      searchText
        ? options.filter((option) =>
            option.value.toLowerCase().includes(searchText.toLocaleLowerCase())
          )
        : options,
    [searchText]
  );
  return (
    <>
      <div className="shadow-md rounded-md text-left mb-4" key={key}>
        <span className="text-sm text-gray-400">{title}</span>
        {hasSearch ? (
          <Search
            allowClear
            placeholder="input search text"
            onSearch={(value) => {
              setSearchText(value);
            }}
          />
        ) : null}
        {type === "radio" ? (
          <Radio.Group
            onChange={(e) => onChangeValue(name, e.target.value)}
            value={value}
            className="overflow-y-auto flex flex-col flex-wrap-none max-h-52 flex-nowrap"
          >
            {filterdOptions?.map((option, key) => (
              <Radio key={key} value={option.value}>
                {option?.label}
              </Radio>
            ))}
          </Radio.Group>
        ) : (
          <Checkbox.Group
            value={value}
            options={filterdOptions}
            onChange={(e) => onChangeValue(name, e)}
            className="overflow-y-auto flex flex-col flex-wrap-none max-h-52 flex-nowrap"
          />
        )}
      </div>
    </>
  );
};

export default React.memo(FilterCard);
