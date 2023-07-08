import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import { SectionBtn, SectionStatistics } from './App.style';

const App = () => {
  const options = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(event, option) {
    event.target.blur();
    if (option === 'good') {
      setGood(good + 1);
      return;
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
      return;
    }
    if (option === 'bad') {
      setBad(bad + 1);
      return;
    }
  }

  function countTotalFeedback() {
    return bad + good + neutral;
  }

  //

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return Math.round((100 / total) * good || 0);
  }

  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage() + '%';

  return (
    <>
      <SectionBtn title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />{' '}
      </SectionBtn>
      <SectionStatistics title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionStatistics>
    </>
  );
};

export default App;
