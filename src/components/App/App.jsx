import { useState } from 'react';
import { Notification, FeedbackOptions, Statistics, Section } from 'components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  function onLeaveFeedback(event, option) {
    event.target.blur();

    switch (option) {
      case 'good':
        setGood(g => g + 1);
        break;
      case 'neutral':
        setNeutral(n => n + 1);
        break;
      case 'bad':
        setBad(b => b + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => bad + good + neutral;

  const countPositiveFeedbackPercentage = () =>
    Math.round((100 / countTotalFeedback()) * good || 0);

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
