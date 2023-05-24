import React, { Component } from "react";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics"; 
import { Section } from "./Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good) {
    return `${Math.round((good * 100) / this.countTotalFeedback(this.state))}%`
  }

  onLeaveFeedback =(option)=> {
    this.setState(prevState => ({[option] : prevState[option] + 1}));
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
          title={'Statistics'} 
          children={this.countTotalFeedback(this.state) === 0
             ?
             <Notification message="There is no feedback"></Notification> 
             : 
             <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback(this.state)} 
            positivePercentage={this.countPositiveFeedbackPercentage(this.state.good)}>
            </Statistics>}
        >
        </Section>
      </div>
    )
  }
}

export default App;