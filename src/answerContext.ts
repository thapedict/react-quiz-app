import { createContext } from "react";
import { SubmittedAnswer } from "./quizReducers";

const AnswerContext = createContext<SubmittedAnswer[]>([]);

export default AnswerContext;