import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

import Loader from '../Loader';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import api from 'services/pixabay-api';


export default class ImageGallery extends Component {
  state = {
    data: null,
    error: null,
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const query = this.props.query;
	const prevPage = prevState.page;
    const page = this.state.page;

    if (prevQuery !== query) {
		
      this.setState({ status: 'pending' });
	  const parsedData = await this.loadImages(query, page);
	  
	  if (parsedData) {
		this.setState({ data: parsedData, status: 'resolved' });
	  }
    }
	
	if (prevPage !== page) {
		
	  this.setState({ status: 'pending' });
	  const parsedData = await this.loadImages(query, page);
	  
	  if (parsedData) {
		this.setState(state => ({
			data: [...state.data, ...parsedData],
			status: 'resolved'
		}));
	  }
	}
	
  };
	
  async loadImages(query, page) {
	try {
	  const data = await api.getImages(query, page);
	  
	  return data.map(
			  ({ id, webformatURL, largeImageURL }) => {
				return { id, webformatURL, largeImageURL };
			  }
			);
	
	} catch (error) {
		this.setState({ error, status: 'rejected' });
	}  
  };
  
  onLoadMore() {
	  this.setState({ page: this.state.page + 1 });
  }

  

  render() {
    const { data, error, status } = this.state;

    if (status === 'idle') {
      return;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {data.map(({ id, webformatURL, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  previewUrl={webformatURL}
                  imageUrl={largeImageURL}
                />
              );
            })}
          </Gallery>
          <Button onClick={() => this.onLoadMore()}/>
        </>
      );
    }
  }
}
