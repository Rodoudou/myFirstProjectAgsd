import React,{useState} from "react";
import { Select } from "antd";

const SelectOptions = () => {
  const[sex,setSex]=useState();
  
  const { Option } = Select;

  const onChange = (value) => {
    const sex = value
    console.log(`selected ${sex}`);
    setSex(sex)
  };

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };
  return (
    <Select
      showSearch
      style={{ width: 250}}
      placeholder="sex"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>{
        console.log("option", option)
        console.log("input",input)
        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }}
    >
      <Option value="Feminin">Feminin</Option>
      <Option value="Masculin">Masculin</Option>
    </Select>
  );
};

export default SelectOptions;
