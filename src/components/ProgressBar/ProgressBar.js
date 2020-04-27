import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { MAX_ITEMS_PER_QUIZ } from '../../config/constants';
import QuizContext from '../../context/QuizContext';

function ProgressBar({ toggleColor = false }) {
  const { state } = useContext(QuizContext);
  const { current, correctAnswerCount } = state;
  const progress = current + 1;

  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: toggleColor ? '#b2dfdb' : lighten('#ff6c5c', 0.5)
    },
    bar: {
      borderRadius: 20,
      backgroundColor: toggleColor ? '#00695c' : '#ff6c5c'
    }
  })(LinearProgress);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    margin: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  const correctPercentage = (
    (correctAnswerCount / MAX_ITEMS_PER_QUIZ) *
    100
  ).toFixed();

  return (
    <Fragment>
      <h1>
        {progress} of 50 - <span>{correctPercentage}% of correct answers</span>
      </h1>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={(progress / MAX_ITEMS_PER_QUIZ) * 100}
      />
    </Fragment>
  );
}

ProgressBar.propTypes = {
  toggleColor: PropTypes.bool
};

export default ProgressBar;
