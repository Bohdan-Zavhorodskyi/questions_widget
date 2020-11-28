import React from "react";
import { Select } from "antd";

import useStyles from "./styles";

const { Option } = Select;

const QuestionSelect = ({ question }) => {
  const classes = useStyles();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  console.log(question);

  return (
    <div className={classes.options}>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Text</Option>
        <Option value="lucy">Checkbox</Option>
        <Option value="Yiminghe">Radio</Option>
      </Select>
    </div>
  );
};

export default QuestionSelect;
