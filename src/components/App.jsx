import React, { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification';
import Section from 'components/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    const percentage = Math.round((good * 100) / (good + neutral + bad));
    return good && percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className="container">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            countFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
