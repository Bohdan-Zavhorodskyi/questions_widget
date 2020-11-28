import React from "react";
import { Checkbox } from "antd";

import useStyles from "./styles";

const CheckboxType = ({ question, pickedQuestion }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  return (
    <div className={classes.root}>
      <div>{question.title}</div>
      <div>
        {pickedQuestion === question.key && (
          <Checkbox.Group
            options={options}
            defaultValue={["A"]}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default CheckboxType;
