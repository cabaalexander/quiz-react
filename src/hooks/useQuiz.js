import { useEffect, useReducer } from 'react';
import quizReducer from '../reducer/quizReducer';
import { generateInitialQuizzesData, parseResults } from '../helpers/misc';
import { API_URL } from '../config/constants';
import { FETCH, INITIAL_QUIZZES, SET_ANSWERS } from '../reducer/types';

function useQuiz() {
  const [state, dispatch] = useReducer(quizReducer, {
    correctAnswerCount: 0,
    inCorrectAnswerCount: 0,
    quizzes: [],
    answers: [],
    current: 0,
    loading: false,
    hasLoaded: false
  });

  useEffect(() => {
    dispatch({ type: FETCH });
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const parsedResults = results.length && results.map(parseResults);
        const quizzes = generateInitialQuizzesData(parsedResults);
        dispatch({
          type: INITIAL_QUIZZES,
          payload: quizzes
        });

        const answers = parsedResults.map((result) => result.name);

        dispatch({
          type: SET_ANSWERS,
          payload: answers
        });
      });
  }, []);

  return {
    state,
    dispatch
  };
}

export default useQuiz;
