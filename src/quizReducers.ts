export interface SubmittedAnswer {
    questionID: number,
    questionText: string,
    answer: string
}

export type AnswerAction = { type: "answer", payload: SubmittedAnswer} 
| { type: "reset"}|{type:"submitted"}

export const answersInitialState:SubmittedAnswer[] = [];


export function answerReducer(state: SubmittedAnswer[], action: AnswerAction) {
    switch(action.type) {
        case 'answer':
            return [...state, action.payload];
            case 'reset':
                return [];
                case 'submitted':
                    return state;
            default:
                throw new Error();
    }
}