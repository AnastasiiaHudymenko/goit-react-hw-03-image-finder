import React from 'react';
import { ImageGallaryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGallaryItem images={images} onClick={onClick} />
    </ul>
  );
};
