import { ModernNormalize } from 'emotion-modern-normalize';
import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyles';
import { AppWrapper } from './App.styled';

// import PixabayAPI from '../services/pixabay-api';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
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

		
		    <ImageGallery query={this.state.query} />
		
		
        <ModernNormalize />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}
