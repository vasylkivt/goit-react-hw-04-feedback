import PropTypes from 'prop-types';

import { SectionWrap, SectionTitle, Container } from './Section.style';

export default function Section({ title, className, children }) {
  return (
    <SectionWrap className={className}>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </Container>
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
