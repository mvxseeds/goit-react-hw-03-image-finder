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
  };

  onSubmitQuery = ({ query }) => {
    this.setState({ query });
  };


  render() {
    return (
      <AppWrapper>
        {' '}
        {/* pass props */}
        <Searchbar onSubmitQuery={this.onSubmitQuery} />

        {/* working src */}
        {this.state.loading && <h1> Loading content... </h1>}

		
		<ImageGallery query={this.state.query} />


        {/* state machine after components made functional */}
        {this.state.imgs && (
          //   <div> rendered imgs after fetch + saved to state </div>
          <>
            <ImageGallery >
			{/* pass {children} at component --goit-react-hw-02-feedback */}
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
