import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, countFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.feedback_button}
          key={option}
          type="button"
          onClick={() => countFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  countFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
