import { SubmittedAnswer } from "./quizReducers";

export const AllQuestions:IQuestion[] = [{
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    answer: 'Mount Everest',
  },
  {
    id: 3,
    question: 'What is both a fruit and a color?',
    options: ['Pink', 'Lemon', 'Apple', 'Orange'],
    answer: 'Orange',
  },
  {
    id: 4,
    question: 'What is the square root of nine?',
    options: ['Six', 'Three', 'Two', 'Four', 'One'],
    answer: 'Three',
  },
  {
    id: 5,
    question: 'What is the capital city of South Africa?',
    options: ['Free State', 'Johannesburg', 'Sun City', 'Pretoria'],
    answer: 'Pretoria',
  }];

export interface IQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export function getQuestion(questions: IQuestion[], questionID: number): IQuestion|undefined{
  return questions.find((q) => q.id === questionID);
}

export function getNextQuestion(questions:IQuestion[],currentID: number):IQuestion|undefined {
  let index = questions.findIndex((a) => a.id === currentID);

  return AllQuestions[++index];
}

export function checkAnswer(question: IQuestion,answer: string):boolean {
    return question.answer === answer
}

export type CorrectedAnswer = {
  questionID: number,
  questionText: string,
  correct: string,
  answer: string
}

export type ResultsType = { 
  correct: SubmittedAnswer[], incorrect: CorrectedAnswer[], finalScore: number 
};

export function getResults(questions: IQuestion[], answers: SubmittedAnswer[]): ResultsType {
  const results:ResultsType = {correct: [],incorrect: [], finalScore: 0};

  for(let x = 0; x < answers.length; x++) {
    const a = answers[x],
          q = getQuestion(questions, a.questionID);

    if(!q) throw new Error('One of the answers contains an invalid questionID')

    if(checkAnswer(q,a.answer)) {
      results.correct.push(a);
    } else {
      results.incorrect.push({...a,correct: q.answer});
    }
  }

  results.finalScore = Math.floor(results.correct.length * 100 / questions.length)

  return results;
}