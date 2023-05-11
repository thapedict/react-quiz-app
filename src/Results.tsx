import { useContext } from "react";
import AnswerContext from "./answerContext";
import { AllQuestions, getResults } from "./questions";
import { useNavigate } from "react-router-dom";
import QuizDispatch from "./quizContext";

function Results() {
  const answers = useContext(AnswerContext);
  const dispatch = useContext(QuizDispatch);

  const navigate = useNavigate();

  const btnClick = () => {
    if (dispatch) dispatch({ type: "reset" });
    navigate("/quiz/1");
  };

  const results = getResults(AllQuestions, answers);

  return (
    <div className="results">
      <h1>Results</h1>
      <h2 className="hero">{`You got: ${results.finalScore}%`}</h2>
      <h4>Correct Answers: {results.correct.length}</h4>
      <ul className="correct-loop">
        {results.correct.map((a, i) => {
          return (
            <li key={i}>
              <p>{a.questionText}</p>
              <span>{a.answer}</span>
            </li>
          );
        })}
      </ul>
      <h4>Incorrect Answers: {results.incorrect.length}</h4>
      <ul className="incorrect-loop">
        {results.incorrect.map((a, i) => {
          return (
            <li key={i}>
              <p>{a.questionText}</p>
              <div className="answers">
                <span className="incorrect">
                  Your answer: <b>{a.answer}</b>
                </span>
                <br />
                <span>Correct Answer: {a.correct}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={btnClick}>Start Another Quiz</button>
      </div>
    </div>
  );
}

export default Results;
