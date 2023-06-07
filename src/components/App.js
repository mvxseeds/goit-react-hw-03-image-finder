import styled from '@emotion/styled';

import {
    ModernNormalize
}
from 'emotion-modern-normalize';
import {
    Component
}
from 'react';
import {
    GlobalStyle
}
from 'GlobalStyles';

// import PixabayAPI from '../services/pixabay-api';

import Searchbar from './Searchbar';

const AppWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {
    state = {
		query: "",
        imgs: null,
        loading: false,
    }
	
	onSubmitQuery = ({query}) => {
		this.setState({ query })
	}

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
             < AppWrapper > { /* pass props */
        }
             < Searchbar onSubmitQuery={this.onSubmitQuery} />
            { /* working src */
        }{
            this.state.loading && ( < h1 > Loading content... <  / h1 > )
        }{
            this.state.imgs && ( < div > rendered imgs after fetch + saved to state <  / div > )
        }

             < ModernNormalize /  >
             < GlobalStyle /  >
             <  / AppWrapper > );
    }
};
