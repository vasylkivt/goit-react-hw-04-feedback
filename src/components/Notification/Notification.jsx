import PropTypes from 'prop-types';
import { PiArrowBendRightUpBold, PiArrowBendLeftUpBold } from 'react-icons/pi';
import { Text } from './Notification.style';

export default function Notification({ message, className }) {
  return (
    <>
      <Text className={className}>
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
