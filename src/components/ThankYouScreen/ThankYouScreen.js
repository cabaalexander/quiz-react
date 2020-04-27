import React, { Fragment } from 'react';

function ThankYouScreen() {
  return (
    <Fragment>
      <h2 className="thankyou-heading">Great job!</h2>
      <p className="thankyou-p">
        You've tested your FXFamily name knowledge and earned 1 FXLearns point.
        Please take a screenshot of this results screen and include when you
        "Rate + Return" this resource
        <a className="link" href=" https://operationsfx.com/myfx/fxlearns">
          {' '}
          here
        </a>
      </p>
    </Fragment>
  );
}

export default ThankYouScreen;
