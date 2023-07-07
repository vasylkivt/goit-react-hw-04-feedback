import styled from 'styled-components';

export const Text = styled.p`
  position: relative;

  text-align: center;
  width: 500px;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;

  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;

  & > svg {
    width: 175px;
    height: 175px;
    fill: ${({ theme }) => theme.colors.backgroundColorBtn};
  }
  & svg:first-child {
    position: absolute;
    bottom: 25px;
    left: -75px;
    transform: rotate(30deg);
  }

  & svg:last-child {
    position: absolute;
    bottom: 25px;
    right: -75px;
    transform: rotate(-30deg);
  }
`;
