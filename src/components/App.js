import { ModernNormalize } from 'emotion-modern-normalize';
import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyles';
import { AppWrapper } from './App.styled';

// import PixabayAPI from '../services/pixabay-api';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

export default class App extends Component {
  state = {
    query: '',
    imgs: null,
    loading: false,
  };

  onSubmitQuery = ({ query }) => {
    this.setState({ query });
  };

  /*
    componentDidMount() {
        // await PixabayAPI.getImages(searchQuery);


        this.setState({
            loading: true
        });
        setTimeout(() => {
            fetch('https://pixabay.com/api/?q=cat&key=33013185-bcf0c4849b088c5c00f112ab1&page=1&image_type=photo&orientation=horizontal&per_page=12')
            .then(res => res.json())
            .then(imgs => this.setState({imgs}))
            .finally(() => this.setState({
                    loading: false
                }));
        }, 2000);

    }
*/

  render() {
    return (
      <AppWrapper>
        {' '}
        {/* pass props */}
        <Searchbar onSubmitQuery={this.onSubmitQuery} />

        {/* working src */}
        {this.state.loading && <h1> Loading content... </h1>}

        {/* state machine after components made functional */}
        {this.state.imgs && (
          //   <div> rendered imgs after fetch + saved to state </div>
          <>
            <ImageGallery>
              <ImageGalleryItem>
                {/* is rendered inside disabled or passed as props?
                    <Modal /> 
                     */}
              </ImageGalleryItem>
            </ImageGallery>
            <Button />
          </>
        )}
        <ModernNormalize />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}
