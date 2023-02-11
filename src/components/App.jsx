import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const API_KEY = '31544306-98c50720df0af9d375614fc16';
const BASE_URL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export class App extends React.Component {
  state = {
    query: '',
  };

  handlSearch = serach => {
    this.setState({ query: serach });
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar onSubmit={this.handlSearch} />
        <ImageGallery children />
      </div>
    );
  }
}
