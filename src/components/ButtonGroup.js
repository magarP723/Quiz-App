import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../features/CheckAnswer";

const ButtonGroup = ({ question }) => {
  const [clickedId, setClickedId] = useState(-1);
  const dispatch = useDispatch();
  const handleClick = (k, x, y) => {
    setClickedId(k);
    dispatch(addAnswer({ questionID: x, answer: y }));
  };
  return (
    <>
      {question.options.map((i, k) => (
        <div
          onClick={() => handleClick(k, question.id, i)}
          className={k === clickedId ? "active" : "options"}
        >
          {i}
        </div>
      ))}
    </>
  );
};

export default ButtonGroup;
