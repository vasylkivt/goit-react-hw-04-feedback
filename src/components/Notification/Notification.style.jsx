import styled from 'styled-components';

export const Text = styled.p`
  position: relative;

  text-align: center;
  width: 500px;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;

  font-size: ${({ theme }) => theme.spacing(9)};
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;

  & > svg {
    width: 115px;
    height: 115px;
    fill: ${({ theme }) => theme.colors.backgroundColorBtn};
  }
  & svg:first-child {
    position: absolute;
    bottom: 25px;
    left: -55px;
    transform: rotate(45deg);
  }

  & svg:last-child {
    position: absolute;
    bottom: 25px;
    right: -55px;
    transform: rotate(-45deg);
  }
`;
