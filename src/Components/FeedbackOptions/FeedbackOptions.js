import React from 'react';
// import PropTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option, index) => (
      <button
        className={styles.btn}
        key={index.toString()}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
