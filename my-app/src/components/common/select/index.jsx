import React from "react";
import { Label, Select } from "./selectStyle.js";

const SelectOptions = (props) => {
  const { title, data, name } = props;
  return (
    <>
      {title && <Label>{title}</Label>}
      <Select name={name} id={name} reqired>
        <option value="" selected></option>
        {data.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SelectOptions;
