  

import React, { Component } from 'react';

import FeedBackOptions from './FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import Section from '../Section';
import Container from '../Container';

import styles from  './FeedBack.module.css';

class FeedBack extends Component { 

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      onLeaveFeedback = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }))
      };
      
      countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
      
      countPositiveFeedbackPercentage = () => 
        this.countTotalFeedback() === 0 ? 0 : ((this.state.good * 100) / this.countTotalFeedback()).toFixed();
      
   
    render () {
                
          return  (
            <Container>
            <Section title="Pleas leave feedback">
              
                <FeedBackOptions 
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {this.countTotalFeedback() === 0 ?
                  <Notification message="No feedback given" /> :
                  <Statistics 
                      good={this.state.good} 
                      neutral={this.state.neutral} 
                      bad={this.state.bad} 
                      total={this.countTotalFeedback()} 
                      positivePercentage={this.countPositiveFeedbackPercentage()}
                  />
                }
              
            </Section>
            </Container>  
          )
      }
}

export default FeedBack;