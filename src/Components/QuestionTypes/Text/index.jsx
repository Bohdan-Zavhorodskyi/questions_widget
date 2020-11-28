import React from 'react';

import useStyles from './styles';

const Text = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Text
    </div>
  )
};

export default Text;
