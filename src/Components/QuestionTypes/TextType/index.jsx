import React from "react";

import useStyles from "./styles";

const TextType = ({ props }) => {
  const classes = useStyles();

  return <div className={classes.root}>Text</div>;
};

export default TextType;
