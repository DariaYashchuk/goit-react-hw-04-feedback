import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={css.container}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
