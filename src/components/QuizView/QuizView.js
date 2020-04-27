import React from 'react';

import useQuiz from '../../hooks/useQuiz';
import { QuizProvider } from '../../context/QuizContext';
import Question from '../Question';

function QuizView() {
  const { state, dispatch } = useQuiz();
  return (
    <QuizProvider value={{ state, dispatch }}>
      <Question />
    </QuizProvider>
  );
}

export default QuizView;
