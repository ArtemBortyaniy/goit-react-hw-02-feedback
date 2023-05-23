import React, { Component } from "react";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics"; 
import { Section } from "./Section/Section";

class App extends Component {
  state = {
    good: 10,
    neutral: 20,
    bad: 15
  }

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good) {
    return `${Math.round((good * 100) / this.countTotalFeedback(this.state))}%`
  }

  onLeaveFeedback(e) {
    console.log(e);
    this.setState({e : this.state[e] + 1});
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section 
          title={'Please leave feedback'} 
          children={<FeedbackOptions 
            options={options} 
            onLeaveFeedback={this.onLeaveFeedback}>
            </FeedbackOptions>}
        ></Section>
        <Section 
          title={Statistics}
          children={<Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback(this.state)} 
            positivePercentage={this.countPositiveFeedbackPercentage(this.state.good)}>
            </Statistics>}
        >
        </Section>
        
        <Notification message="There is no feedback"></Notification>
      </div>
    )
  }
}

export default App;