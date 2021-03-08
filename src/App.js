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
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Song 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}         
      />
      <Player 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library 
        songs={songs}
        currentSong={currentSong}  
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
