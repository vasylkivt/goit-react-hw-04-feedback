import styled from 'styled-components';

export const SectionWrap = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;

  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const SectionTitle = styled.h1`
  margin-bottom: 45px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;

  font-size: ${({ theme }) => theme.spacing(9)};
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
`;
