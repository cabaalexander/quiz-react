import React, { Fragment } from 'react';

function TooManyIncorrectAnswers() {
  return (
    <Fragment>
      <h1> Too many incorrect responses recorded.</h1>
      <p>Please try again tomorrow!</p>
      <p>
        Feel free to use the{' '}
        <a
          className="link"
          href="https://webpagefx.mangoapps.com/sites/peoples/people_directory?limit=20"
        >
          Mango Directory{' '}
        </a>
        as a study resource.
      </p>
    </Fragment>
  );
}

export default TooManyIncorrectAnswers;
