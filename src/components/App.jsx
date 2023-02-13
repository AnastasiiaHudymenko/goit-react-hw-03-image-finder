import React from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

const API_KEY = '31544306-98c50720df0af9d375614fc16';
const BASE_URL = 'https://pixabay.com/api/';

async function getImage(images, page) {
  try {
    return await axios.get(
      `${BASE_URL}?q=${images}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  } catch (error) {
    console.error(error);
  }
}

export class App extends React.Component {
  state = {
    search: '',
    page: 1,
    images: [],
    loader: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.state.search);
    if (
      prevState.search === this.state.search &&
      prevState.page !== this.state.page
    ) {
      this.setState({ loader: true });
      const respons = await getImage(this.state.search, this.state.page);
      const imagesList = respons.data.hits;
      this.setState(({ images }) => ({
        images: [...images, ...imagesList],
      }));
      this.setState({ loader: false });
    } else if (prevState.search !== this.state.search) {
      this.setState({ loader: true });
      const respons = await getImage(this.state.search, this.state.page);
      const imagesList = respons.data.hits;
      if (!imagesList.length) {
        this.setState({ loader: false });
        return toast.error('Enter a valid search');
      }

      this.setState({ images: imagesList, loader: false });
    }
  }

  handlSearch = search => {
    this.setState(search);
    this.setState({ page: 1 });
  };

  handlClickLoadMore = page => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    console.log(this.state.search);
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handlSearch} />
        <ImageGallery
          children
          // search={this.state.search}
          // page={this.state.page}
          images={this.state.images}
        />
        {this.state.loader && <div>Loader...</div>}
        {this.state.search &&
          this.state.images.length !== 0 &&
          !this.state.loader && <Button onClick={this.handlClickLoadMore} />}
        <ToastContainer autoClose={3000} position="top-center" theme="dark" />
      </div>
    );
  }
}
