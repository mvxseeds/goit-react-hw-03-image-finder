import { Formik } from 'formik';
import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import {
    Component
}
from 'react';

const Searchbar = ({onSubmitQuery}) => {
  
  const initialValues = {
	query: "",
  };

  const handleSubmit = (values, actions) => {
	// notify user if query is empty
	if(values.query.trim() === '') {
		alert('Enter a valid search query.');
		return;
	}  
	
    onSubmitQuery(values);
    actions.resetForm();
  };  
  
 // check Form state on change of input - if changes while inputting - no need to add+update state 
 
  
return (
	     <Header>
      <Formik 
	  initialValues={initialValues}
	  onSubmit={handleSubmit}
	  >
        <SearchForm>
          <SearchButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <Input
            type="text"
			name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

export default Searchbar;
