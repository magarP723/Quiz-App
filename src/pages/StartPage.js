import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategories } from "../features/CategorySlice";

const StartPage = () => {
  const [catVal, setCatVal] = useState("9");
  const categories = useSelector(getCategories);
  const navigate = useNavigate();

  const takeCategoryInput = (e) => {
    setCatVal(e.target.value);
  };
  const handleClick = () => {
    navigate(`quiz/${catVal}`);
  };
  return (
    <>
      <h1>Quizzical</h1>
      <h3>A Quizz App</h3>
      <select onChange={takeCategoryInput}>
        {categories.map((category, key) => (
          <option value={category.id} key={key}>
            {category.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Start quiz</button>
    </>
  );
};

export default StartPage;
