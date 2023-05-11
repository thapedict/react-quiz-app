import React, { useContext, useState } from "react";
import { AllQuestions, IQuestion, getNextQuestion } from "./questions";
import { useNavigate, useParams } from "react-router-dom";
import QuizDispatch from "./quizContext";

function Question() {
  const { questionID } = useParams();

  const question: IQuestion | undefined = AllQuestions.find(
    (item) => item.id === parseInt(questionID ?? "-1")
  );

  const dispatch = useContext(QuizDispatch);

  if (!dispatch) {
    throw new Error("quizContext must be used within a provider");
  }

  const [selected, setSelected] = useState("");

  const navigate = useNavigate();

  if (!question) {
    return <h1>Nothing foud {questionID}</h1>;
  }

  const optionSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const btnSubmitClick = () => {
    if (!selected) {
      return;
    }

    dispatch({
      type: "answer",
      payload: {
        questionID: question.id,
        questionText: question.question,
        answer: selected,
      },
    });

    setSelected("");

    const q = getNextQuestion(AllQuestions, question.id);

    if (!q) {
      navigate("/results");
    } else {
      navigate(`/quiz/${q.id}`);
    }
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <ul className="options-loop">
        {question.options.map((o, i) => {
          return (
            <li key={i}>
              <label>
                <input
                  value={o}
                  type="radio"
                  name="option"
                  checked={o === selected}
                  onChange={optionSelect}
                />
                {o}
              </label>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => btnSubmitClick()}>Submit</button>
      </div>
    </div>
  );
}

export default Question;
