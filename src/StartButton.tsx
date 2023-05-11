import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizDispatch from "./quizContext";

export function StartButton({ children }: PropTypes) {
  const dispatch = useContext(QuizDispatch);

  const navigate = useNavigate();

  const btnClick = () => {
    if (dispatch) dispatch({ type: "reset" });
    navigate("/quiz/1");
  };

  return <button onClick={btnClick}>{children}</button>;
}

type PropTypes = {
  children: string;
};
