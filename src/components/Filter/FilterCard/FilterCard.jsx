import { Checkbox, Radio } from "antd";
import Search from "antd/es/input/Search";
import React, { useMemo, useState } from "react";
import PropTypes from 'prop-types';
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
  const filteredOptions = useMemo(
    () =>
      searchText
        ? options.filter((option) =>
            option.value.toLowerCase().includes(searchText.toLocaleLowerCase())
          )
        : options,
    [searchText,options]
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
            {filteredOptions?.map((option, key) => (
              <Radio key={key} value={option.value}>
                {option?.label}
              </Radio>
            ))}
          </Radio.Group>
        ) : (
          <div className="overflow-y-auto flex flex-col flex-wrap-none max-h-52 flex-nowrap">
            {filteredOptions?.map((option, key) => (
              <Checkbox
              key={key}
              options={filteredOptions}
              onChange={() => onChangeValue(name, option.value)}
              checked={value.includes(option.value)}
            >
              {option.label}
            </Checkbox>
            
            ))}
          </div>
        )}
      </div>
    </>
  );
};
FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["radio", "checkbox"]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  hasSearch: PropTypes.bool,
  key: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]).isRequired,
};

export default React.memo(FilterCard);
