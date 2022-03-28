import React from 'react';
import styled, { css } from 'styled-components'
import { Container } from 'components/Container';
import { NavBar } from 'components/NavBar';
import { useTheme } from 'contexts/ThemeContext';
import { Home } from 'screens/home';
import { createGlobalStyle } from 'styled-components'
import { StyleProps } from 'config/styles';
import { CountryDetailProvider } from 'contexts/CountryDetailContext';

const GlobalStyle = createGlobalStyle<StyleProps>`
  html {
    background-color: ${props => props.styleContext.background};
  }

  @-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
`;

function App() {
  const { style } = useTheme();
  
  return (
    <React.Fragment>
      <GlobalStyle styleContext={style}/>
      <Content backgroundColor={style.background}>
        <NavBar />
        <Container>
          <CountryDetailProvider>
            <Home />
          </CountryDetailProvider>
        </Container>
      </Content>
    </React.Fragment>
  );
}


const Content = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100%;
  ${props => css`background: ${props.backgroundColor}`};
`

export default App;
