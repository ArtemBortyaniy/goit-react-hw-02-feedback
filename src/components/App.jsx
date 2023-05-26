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

  countTotalFeedback() {
    return Object.values(this.state).reduce((accumulator, value) => accumulator + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return `${Math.round((this.state.good * 100) / this.countTotalFeedback())}%`
  }

  onLeaveFeedback =(option)=> {
    this.setState(prevState => ({[option] : prevState[option] + 1}));
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const countPositiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section 
          title={'Please leave feedback'} >
            <FeedbackOptions 
            options={options} 
            onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
        <Section title={'Statistics'} >
          {totalFeedback === 0
             ?
             <Notification message="There is no feedback"/>
             : 
             <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={totalFeedback}
            positivePercentage={countPositiveFeedback}/>}
        </Section>
      </div>
    )
  }
}

export default App;