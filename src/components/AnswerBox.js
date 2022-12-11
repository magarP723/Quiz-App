import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getScore } from "../features/ScoreSlice";
import { getQuestions } from "../features/QuestionSlice";

const AnswerBox = () => {
  const questions = useSelector(getQuestions);
  const score = useSelector(getScore);
  const navigate = useNavigate();
  return questions.length !== 0 ? (
    <div className="question-box">
      <h1>Score: {score}/5</h1>
      {questions.map((question, key) => (
        <>
          <div className="question">
            <p>
              {key + 1}. {question.question}
            </p>
          </div>
          <div></div>
          <div className="answer-options">
            {question.options.map((i) =>
              i === question.correct_answer ? (
                <div className="correct-option">{i}</div>
              ) : (
                <div className="wrong-option">{i}</div>
              )
            )}
          </div>
        </>
      ))}
      <button onClick={() => navigate(0)}>Proceed</button>
    </div>
  ) : (
    <>
      <h1>Thanks for playing</h1>
      <NavLink to="/">Start Again</NavLink>
    </>
  );
};

export default AnswerBox;
