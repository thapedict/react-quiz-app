import { createContext, Dispatch } from 'react';
import { AnswerAction } from './quizReducers';

export type MyContextType = Dispatch<AnswerAction>;

const QuizDispatch = createContext<MyContextType | undefined>(undefined);

export default QuizDispatch;