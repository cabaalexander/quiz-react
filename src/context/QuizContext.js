import { createContext } from 'react';

const QuizContext = createContext();

export const QuizProvider = QuizContext.Provider;
export const QuizConsumer = QuizContext.Consumer;

export default QuizContext;
