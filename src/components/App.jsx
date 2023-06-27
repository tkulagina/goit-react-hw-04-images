import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import fetchImagesWithQuery from 'services/api';
import {Modal} from './Modal/Modal';
import {Loader} from './Loader/Loader';
import {Button} from './Button/Button';
import css from './App.module.css';


export const App = () => {
  const [searchData, setSearchData] = useState ('');
  const [images, setImages] = useState ([]);
  const [page, setPage] = useState (0);
  const [largeImage, setLargeImage] = useState ('');
  const [showModal, setShowModal] = useState (false);
  const [isLoading, setIsLoading] = useState (false);
  const [error, setError] = useState ('');
  
useEffect (() => {
  if (!searchData) return

  const getPhotos = async () => {
    setIsLoading ( true );
    try {
    const response = await fetchImagesWithQuery(searchData, page);
    response.then(data => {
      data.data.hits.length === 0
        ? toast.error('Nothing found')
        : data.data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
          console.log (images);
            !images.some(image => image.id === id) &&
              setImages (({ images }) => ({
                images: [...images, { id, webformatURL, largeImageURL }],
              }));
          });
      setIsLoading (false);
    });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    };
  }
  getPhotos();

}, [searchData, page, images]);


  const onSubmit = searchData => {
    setSearchData (searchData);
    setPage (1);
    setImages ([]); 
    setError (error);   
  };

  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = ({index, images}) => {
    setShowModal (true);
    setLargeImage (images[index].largeImageURL);    
  };

  const toggleModal = () => {
    setShowModal (!showModal);
  };

 
    return (
      <div className={css.app}>
        <Searchbar onSubmit={onSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {showModal && (
          <Modal toggleModal={toggleModal} largeImage={largeImage} />
        )}
         {isLoading && <Loader />}

        {!isLoading && images.length > 0 && <Button nextPage={nextPage} />}
        <ToastContainer autoClose={2500} />
                
      </div>
    );  
}