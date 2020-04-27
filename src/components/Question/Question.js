import React, { useContext, Fragment } from 'react';
import { Paper, CircularProgress, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import ProgressBar from '../ProgressBar';
import ThankYouScreen from '../ThankYouScreen';
import TooManyIncorrectAnswers from '../TooManyIncorrectAnswers';
import QuizContext from '../../context/QuizContext';
import { SET_CORRECT_ANSWER, SET_INCORRECT_ANSWER } from '../../reducer/types';
import { notificationModal } from '../../helpers/misc';

function Question() {
  const { state, dispatch } = useContext(QuizContext);
  const {
    quizzes,
    answers,
    current,
    hasLoaded,
    correctAnswerCount,
    inCorrectAnswerCount
  } = state;
  const quiz = quizzes[current];
  const goal = quizzes.length * 0.8; // 80%
  const incorrectLimit = quizzes.length * 0.2; // 20%;
  const showThankYouComponent = correctAnswerCount >= goal;
  const showTooManyIncorrectAnswers = inCorrectAnswerCount > incorrectLimit;

  const handleOnChange = (_, value) => {
    if (value === quiz.name) {
      notificationModal(
        {
          icon: 'success',
          title: 'Correct',
          text: 'You know your co-worker',
          imageAlt: quiz.name
        },
        () => {
          dispatch({
            type: SET_CORRECT_ANSWER
          });
        }
      );
    } else {
      notificationModal(
        {
          icon: 'error',
          title: 'You got it wrong',
          html: `<p>Your co-worker's name is: <b>${quiz.name}</b></p>`,
          imageAlt: quiz.name
        },
        () => {
          dispatch({
            type: SET_INCORRECT_ANSWER
          });
        }
      );
    }
  };

  return (
    <Fragment>
      {!hasLoaded ? (
        <CircularProgress />
      ) : (
        <Paper m={1} classes={{ root: 'bg-dark' }} elevation={10}>
          {showTooManyIncorrectAnswers ? (
            <TooManyIncorrectAnswers />
          ) : (
            <Fragment>
              <ProgressBar toggleColor={showThankYouComponent} />
              {showThankYouComponent && <ThankYouScreen />}
              <img
                className="user-avatar"
                alt={quiz && quiz.name}
                src={quiz && quiz.imageUrl}
              />
              <h3>What’s your co-worker’s name?</h3>
              <Autocomplete
                classes={{ root: 'auto-complete' }}
                key={quiz && quiz.name}
                autoComplete
                autoHighlight
                options={answers}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
                onChange={handleOnChange}
              />
            </Fragment>
          )}
        </Paper>
      )}
    </Fragment>
  );
}

export default Question;
