import React, { useState } from 'react';
import { Container, Paper, Button, Typography } from '@material-ui/core';

import './index.css';
import QuizView from './components/QuizView';

function App() {
  const [toggleView, setToggleView] = useState(false);

  return (
    <div className="container">
      <Container>
        {toggleView ? (
          <QuizView />
        ) : (
          <Paper m={1} classes={{ root: 'bg-dark' }} elevation={10}>
            <Typography variant="h1" className="header" align="center">
              FXFamily Member Quiz
            </Typography>
            <Typography variant="body1" paragraph>
              Test your knowledge of our #BestCoworkers' names using this
              picture quiz! You'll be shown 50 different randomized profile
              images and asked to correctly identify at least 40. We trust that
              you will not use any references during the quiz!
            </Typography>
            <Typography variant="body2" paragraph>
              Looking for ways to practice? Follow these ProTips!
              <br />
              - Study using the LiveBoard by selecting someone's name to see
              their profile image. See that person on FXCampus? Greet them using
              their first name!
              <br />- Link to{' '}
              <a className="link" href="https://operationsfx.com/liveboard">
                Liveboard
              </a>
            </Typography>
            <Button variant="contained" onClick={() => setToggleView(true)}>
              Start!
            </Button>
          </Paper>
        )}
      </Container>
    </div>
  );
}

export default App;
