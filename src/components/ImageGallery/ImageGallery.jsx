import PropTypes from 'prop-types';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL }, index) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          index={index}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};