import PropTypes from 'prop-types';
import css from './Button.module.css';


export function Button({ nextPage }) {
  return (
    <button type="button" className={css.button} onClick={nextPage}>
      Load more
    </button>
  );
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};