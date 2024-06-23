import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { LightTheme } from './components/Theme';
import { ThemeProvider } from 'styled-components';

//Components
import MainPage from './components/Main';
import AboutPage from './components/About';
import BlogPage from './components/Blog';
import SkillsPage from './components/Skills';
import WorkXpPage from './components/WorkXP';

function App() {
  return <>
    <GlobalStyle>
      <ThemeProvider theme={LightTheme}>
        <Router>
          <Routes>
            <Route exact path='/' Component={MainPage} />
            <Route exact path='/about' Component={AboutPage} />
            <Route exact path='/blog' Component={BlogPage} />
            <Route exact path='/skills' Component={SkillsPage} />
            <Route exact path='/work-xp' Component={WorkXpPage} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GlobalStyle>


  </>

}

export default App

