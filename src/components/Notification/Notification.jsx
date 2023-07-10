import PropTypes from 'prop-types';
import { PiArrowBendRightUpBold, PiArrowBendLeftUpBold } from 'react-icons/pi';
import { Text } from './Notification.style';

export function Notification({ message }) {
  return (
    <>
      <Text>
        <PiArrowBendLeftUpBold />
        {message}
        <PiArrowBendRightUpBold />
      </Text>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
