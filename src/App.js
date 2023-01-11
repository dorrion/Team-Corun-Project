import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from "./data/theme";
import { Routes, Route } from 'react-router-dom';



import Intro from './components/intro/Intro';
import AboutTeam from './components/about-team/AboutTeam';
import Description from './components/about-team/Description';
import AboutMembers from './components/about-members/AboutMembers';

import OurProject from './components/our-project/OurProject';
// import Ending from './components/ending/Ending';



function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Intro/>

      <Routes>
        <Route path="/" element={<AboutTeam />}/>
        <Route path="/description" element={<Description />}/>
        <Route path="/ourproject" element={<OurProject />}/>
      </Routes>
      <AboutMembers/>
      {/* <Ending/> */}
    </ThemeProvider>
  );
}

export default App;
