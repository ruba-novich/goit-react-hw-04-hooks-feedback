

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedBackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import Section from '../Section';
import Container from '../Container';



class FeedBack extends Component {
  
  static defaultProps = {
    initialValue: 0
  }

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  } 

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  };

 
  onLeaveFeedback = (e) => {
    const {name} = e.target
    
    this.setState((prevState) => ({
    [name]: prevState[name] + 1}))
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() === 0 ? 0 : ((this.state.good * 100) / this.countTotalFeedback()).toFixed();


  render() {
    const options = Object.keys(this.state);
    const {good, neutral, bad} = this.state;
    
    return (

      <Container>
        <Section title="Pleas leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ?
            <Notification message="No feedback given" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
          }
        </Section>
      </Container>
    )
  }
}

export default FeedBack;