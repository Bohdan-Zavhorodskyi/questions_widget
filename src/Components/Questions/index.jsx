import React, { useState } from "react";

import CheckboxType from "../QuestionTypes/CheckboxType";
import RadioType from "../QuestionTypes/RadioType";
import TextType from "../QuestionTypes/TextType";
import { questions } from "../../utils/questions";
import QuestionSelect from "../QuestionSelect";

import useStyles from "./styles";

const Questions = () => {
  const classes = useStyles();
  const [questionList, setQuestionList] = useState(questions);
  const [pickedQuestion, setPickedQuestion] = useState(null);

  const handleClickQuestion = (i) => {
    setPickedQuestion(i);
  };

  return (
    <div className={classes.root}>
      <div className={classes.emptySide} />
      <div className={classes.questions}>
        {questionList.map((question, i) => (
          <div
            key={i}
            className={classes.questionWrapper}
            onClick={() => handleClickQuestion(i)}
          >
            <QuestionSelect question={question} />
            {question.type === "text" ? (
              <TextType />
            ) : question.type === "checkbox" ? (
              <CheckboxType
                question={question}
                pickedQuestion={pickedQuestion}
              />
            ) : question.type === "radio" ? (
              <RadioType question={question} pickedQuestion={pickedQuestion} />
            ) : (
              <div>Unexpected type</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
