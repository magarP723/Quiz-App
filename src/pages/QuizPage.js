import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  getQuestions,
  fetchQuestions,
  getQueStatus,
  getQueError,
} from "../features/QuestionSlice";
import { storeScore } from "../features/ScoreSlice";
import QuestionBox from "../components/QuestionBox";
import { getAllAnswers } from "../features/CheckAnswer";

const QuizPage = () => {
  const shouldLog = useRef(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  // const error = useSelector(getQueError);
  const status = useSelector(getQueStatus);
  const questions = useSelector(getQuestions);
  const answers = useSelector(getAllAnswers);
  const calculate = (x, y) => {
    let score = 0;
    x.map((i, k) =>
      i.correct_answer === y[k].answer ? (score += 1) : (score += 0)
    );
    dispatch(storeScore(score));
  };

  useEffect(() => {
    if (status === "idle" && shouldLog.current) {
      shouldLog.current = false;
      dispatch(fetchQuestions({ categoryId: id }));
    }
  });
  return questions.length === 0 ? (
    <div className="loading-content">Loading...</div>
  ) : (
    <>
      <QuestionBox />
      <NavLink to="/check">
        <button
          onClick={() => {
            calculate(questions, answers);
          }}
        >
          Submit
        </button>
      </NavLink>
    </>
  );
};

export default QuizPage;
