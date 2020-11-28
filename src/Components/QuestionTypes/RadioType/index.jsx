import React from "react";
import { Radio } from "antd";

import useStyles from "./styles";

const RadioType = ({ question }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div>{question.title}</div>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default RadioType;
