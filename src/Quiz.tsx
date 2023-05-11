import { StartButton } from "./StartButton";
import { AllQuestions, IQuestion } from "./questions";

function Quiz() {
  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>
      <div className="wrapper">
        {AllQuestions.map((q: IQuestion, i: number) => (
          <p key={i}>{q.question}</p>
        ))}
      </div>
      <div>
        <StartButton>Start Quiz</StartButton>
      </div>
    </div>
  );
}

export default Quiz;
