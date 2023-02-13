import React from 'react';
// import axios from 'axios';
import { ImageGallaryItem } from '../ImageGalleryItem/ImageGalleryItem';
// const API_KEY = '31544306-98c50720df0af9d375614fc16';
// const BASE_URL = 'https://pixabay.com/api/';

// async function getImage(images, page) {
//   try {
//     return await axios.get(
//       `${BASE_URL}?q=${images}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//   } catch (error) {
//     console.error(error);
//   }
// }

export const ImageGallery = ({ images }) => {
  // state = {
  //   images: [],
  // };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.search === this.props.search &&
  //     prevProps.page !== this.props.page
  //   ) {
  //     const respons = await getImage(this.props.search, this.props.page);
  //     const imagesList = respons.data.hits;
  //     this.setState(({ images }) => ({
  //       images: [...images, ...imagesList],
  //     }));
  //   } else if (prevProps.search !== this.props.search) {
  //     const respons = await getImage(this.props.search, this.props.page);
  //     const imagesList = respons.data.hits;
  //     if (!imagesList.length) {
  //       console.log('Empty');
  //       return;
  //     }

  //     this.setState({ images: imagesList });
  //   }
  // }

  return (
    <ul>
      <ImageGallaryItem images={images} />
    </ul>
  );
};
