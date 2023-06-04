import { ModernNormalize } from 'emotion-modern-normalize';
import { GlobalStyle } from 'GlobalStyles';

import styled from '@emotion/styled';

import Searchbar from './Searchbar';


const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const App = () => {
  return (
    <AppWrapper>

      {/* pass props */}
      <Searchbar />

      <ModernNormalize />
      <GlobalStyle />
    </AppWrapper>
  );
};
