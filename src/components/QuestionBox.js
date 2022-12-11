import React from "react";
import { useSelector } from "react-redux";
import { getQuestions } from "../features/QuestionSlice";
import ButtonGroup from "./ButtonGroup";

const QuestionBox = () => {
  const questions = useSelector(getQuestions);

  return (
    <div className="question-box">
      {questions.map((question, key) => (
        <>
          <div className="question">
            <p>
              {key + 1}. {question.question}
            </p>
          </div>
          <div></div>
          <div className="answer-options">
            <ButtonGroup question={question} />
          </div>
        </>
      ))}
    </div>
  );
};

export default QuestionBox;
