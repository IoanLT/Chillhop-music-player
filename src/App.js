import React, { useState } from 'react';
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
// Import styles
import './styles/app.scss';
// Import data file
import data from './util';
import Navigation from './components/Navigation';

const App = () => {
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <div 
      className="App"
      style={{ background: `linear-gradient(to top, ${currentSong.color[0]}, ${currentSong.color[1]})` }}      
    >
      <Navigation 
        displayNav={displayNav} 
        setDisplayNav={setDisplayNav} 
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
    </div>
  );
}

export default App;
