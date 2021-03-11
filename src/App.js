import React, { useState } from 'react';
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
// Import styles
import styled from 'styled-components';
import './styles/app.scss';
// Import data file
import data from './util';
import Header from './components/Header';

const App = () => {
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MainWrapper       
      style={{ background: `linear-gradient(to top, ${currentSong.color[0]}, ${currentSong.color[1]})` }}      
    >
      <Header 
        displayNav={displayNav} 
        setDisplayNav={setDisplayNav} 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Song 
        currentSong={currentSong} 
        isPlaying={isPlaying}        
      />
      <Player 
        songs={songs}
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library 
        songs={songs}
        currentSong={currentSong}  
        setCurrentSong={setCurrentSong}
        displayNav={displayNav} 
        setDisplayNav={setDisplayNav}
      />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`     
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 3% 5%;
`

export default App;
