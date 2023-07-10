import styled from 'styled-components';

const getColor = ({ theme, option }) => {
  switch (option) {
    case 'good':
      return theme.colors.green;
    case 'neutral':
      return theme.colors.yellow;
    case 'bad':
      return theme.colors.red;

    default:
      return '#ededed';
  }
};

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 15px 5px #838383;
  background-color: ${({ theme }) => theme.colors.backgroundColorBtn};

  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    text-shadow 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    font-size 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
    text-shadow: 2px 0px 3px #838383, -2px 0px 3px #838383, 0px 2px 3px #838383,
      0px -2px 3px #838383;

    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${getColor};
    box-shadow: 0px 0px 15px 5px ${getColor};
    background: radial-gradient(
      circle at 50% 50%,
      #ffffff 0,

      ${getColor} 100%
    );
  }
`;
