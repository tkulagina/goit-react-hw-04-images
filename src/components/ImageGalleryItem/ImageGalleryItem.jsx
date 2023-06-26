import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webformatURL, index, openModal }) {
  return (
    <li className={css.item}>
      <img
        className={css.img}
        src={webformatURL}
        onClick={() => openModal(index)}
        alt=""
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  index: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};