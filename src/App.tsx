import { useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Results from "./Results";
import Nav from "./Nav";
import Question from "./Question";
import { answerReducer, answersInitialState } from "./quizReducers";
import QuizDispatch from "./quizContext";
import AnswerContext from "./answerContext";

function App() {
  const [answers, dispatch] = useReducer(answerReducer, answersInitialState);

  useEffect(() => {
    document.title = "Quiz App";
  }, []);

  return (
    <QuizDispatch.Provider value={dispatch}>
      <AnswerContext.Provider value={answers}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/quiz/:questionID" element={<Question />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </AnswerContext.Provider>
    </QuizDispatch.Provider>
  );
}

export default App;
