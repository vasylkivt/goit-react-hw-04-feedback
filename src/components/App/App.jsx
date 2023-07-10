import { useState } from 'react';
import { Notification, FeedbackOptions, Statistics, Section } from 'components';

export const App = () => {
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

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return Math.round((100 / total) * good || 0);
  }

  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage() + '%';

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>

      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPercentage}
          />
        </Section>
      ) : (
        <Notification message={' There is no feedback'} />
      )}
    </>
  );
};
