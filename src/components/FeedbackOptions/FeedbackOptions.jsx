import PropTypes from 'prop-types';
import { Button, ButtonsWrap } from './FeedbackOptions.style';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonsWrap>
      {options.map(option => (
        <Button
          key={option}
          option={option}
          onClick={event => onLeaveFeedback(event, option)}
          type="button"
        >
          {option}
        </Button>
      ))}
    </ButtonsWrap>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
