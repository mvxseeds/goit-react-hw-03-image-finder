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
    const nextQuery = this.props.query;
    const page = this.state.page;

    if (prevQuery !== nextQuery) {
      //console.log('Query changed:', prevQuery, ">", nextQuery);

      this.setState({ status: 'pending' });
  // AXIOS API
      try {
        const data = await api.getImages(nextQuery, page);
        const parsedData = data.map(
          ({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          }
        );

        this.setState({ data: parsedData, status: 'resolved' });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
	
	

  /* // FETCH API
			// temp timeout to display loading interface
			setTimeout(() => {
				fetch(`https://pixabay.com/api/?q=${nextQuery}&key=33013185-bcf0c4849b088c5c00f112ab1&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
				.then(res => res.json())
				.then(data => {
					// processing of empty result: {"total":0,"totalHits":0,"hits":[]}
					if (data.total === 0) {
						return Promise.reject(
							new Error(`No result found for request: ${nextQuery}`),
						);
						// this also works:
						// //throw "ErrorNoResult";
					}
					
					const parsedData = data.hits.map(({id, webformatURL, largeImageURL}) => { return { id, webformatURL, largeImageURL } });
					this.setState({ data: parsedData, status: 'resolved' })
				})
				.catch(error => this.setState({ error, status: 'rejected' }));
			}, 1000)
		}
  */
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
          <Button />
        </>
      );
    }
  }
}