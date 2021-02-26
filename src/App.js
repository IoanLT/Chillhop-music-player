import React, { useState } from 'react';
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
// Import styles
import './styles/app.scss';
// Import data file
import data from './util';

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const[isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
