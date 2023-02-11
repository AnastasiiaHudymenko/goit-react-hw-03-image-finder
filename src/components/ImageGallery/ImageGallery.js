import React from 'react';
import { ImageGallaryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {
  render() {
    return (
      <ul>
        <ImageGallaryItem />
      </ul>
    );
  }
}
