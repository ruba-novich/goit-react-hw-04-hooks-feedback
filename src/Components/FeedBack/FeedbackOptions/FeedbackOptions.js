import React from 'react';
import styles from './FeedBackOptions.module.css';


const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map((option, index) => (
            <button
                key={index}
                type="button"
                name={option}
                onClick={onLeaveFeedback}
                
            >
                {option}
            </button>
         )
        )
        }
    </div>
);

export default FeedbackOptions;