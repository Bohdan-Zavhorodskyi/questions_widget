import React, { useState } from 'react';

import Checkbox from '../QuestionTypes/Checkbox';
import Radio from '../QuestionTypes/Radio';
import Text from '../QuestionTypes/Text';
import { questions } from '../../utils/questions';

import useStyles from './styles';

const Questions = () => {
  const classes = useStyles();

  const [questionList, setQuestionList] = useState(questions);
  console.log(questions);

  return (
    <div className={classes.root}>
      <div className={classes.emptySide} />
      <div className={classes.questions}>
        {questionList.map((item, i) => (
          
        ))}
        <Checkbox />
        <Radio />
        <Text />
      </div>
    </div>
  )
};

export default Questions;
