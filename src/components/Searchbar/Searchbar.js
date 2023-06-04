import { Header, SearchForm, SearchButton, ButtonLabel, Input } from "./Searchbar.styled";


const Searchbar = () => {
  return (
    <Header>
    <SearchForm>
      <SearchButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </SearchButton>
  
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </Header>
  );
};

export default Searchbar;
