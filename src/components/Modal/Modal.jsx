import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({toggleModal, largeImage}) => {
  
  useEffect (() => {
    const handleKeyDown = evt => {
    evt.code === 'Escape' && toggleModal();
  };
    window.addEventListener('keydown', handleKeyDown); 
    return () => {window.removeEventListener('keydown', handleKeyDown)}
  }, 
  [toggleModal])
 
  const handleBackdropClick = evt => {
    evt.target === evt.currentTarget && toggleModal();
  };

      return (
      <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>
    );
 }

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};