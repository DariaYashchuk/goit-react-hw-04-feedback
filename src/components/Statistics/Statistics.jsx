import React from 'react';

import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
