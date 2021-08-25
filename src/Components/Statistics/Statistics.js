import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
        <ul className={styles.list}>
          <li  className={styles.item}>Good: {good}</li>
          <li  className={styles.item}>Neutral: {neutral}</li>
          <li  className={styles.item}>Bad: {bad}</li>
          <li  className={styles.item}>Total: {total}</li>
          <li  className={styles.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
  );

Statistics.propTypes = {
  
  prop: PropTypes.arrayOf(PropTypes.number.isRequired),
}

export default Statistics;