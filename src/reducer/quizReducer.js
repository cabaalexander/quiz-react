import {
  FETCH,
  INITIAL_QUIZZES,
  SET_ANSWERS,
  SET_CORRECT_ANSWER,
  SET_INCORRECT_ANSWER
} from './types';

function quizReducer(state, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
        hasLoaded: false
      };
    case INITIAL_QUIZZES:
      return {
        ...state,
        quizzes: action.payload,
        loading: false,
        hasLoaded: true
      };
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.payload
      };
    case SET_INCORRECT_ANSWER:
      return {
        ...state,
        inCorrectAnswerCount: state.inCorrectAnswerCount + 1,
        current: state.current + 1
      };
    case SET_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswerCount: state.correctAnswerCount + 1,
        current: state.current + 1
      };
    default:
      return state;
  }
}

export default quizReducer;
