import "./App.css";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import StartPage from "./pages/StartPage";
import AnswerPage from "./pages/AnswerPage";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/quiz/:id" element={<QuizPage />}></Route>//dynamic routing
        using react router..
        <Route path="/check" element={<AnswerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
