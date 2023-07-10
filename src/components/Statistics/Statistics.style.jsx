import styled from 'styled-components';

const getBgColor = ({ theme, $positivePercentage }) => {
  const num = Number.parseInt($positivePercentage);
  if (num > 66) {
    return theme.colors.green;
  } else if (num > 33) {
    return theme.colors.yellow;
  } else {
    return theme.colors.red;
  }
};

export const StatisticsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;
`;

export const FeedbackValueWrap = styled.div`
  display: flex;

  margin: 0 auto;
  gap: 33px;
`;

export const Info = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;
  background: ${({ theme }) => theme.colors.linearGradient};

  min-width: 100px;
  border-radius: 50%;

  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PositiveFeedbackWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  margin: 0 auto;
  gap: 10px;
  & p:first-child {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.11;
    letter-spacing: 0.72px;
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 500;
  }

  & p:last-child {
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    background-color: ${getBgColor};

    max-width: 500px;

    width: ${({ $positivePercentage }) => $positivePercentage};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
