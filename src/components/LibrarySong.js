import React from 'react';

const LibrarySong = ({ song, currentSong, setCurrentSong }) => {

    const songSelectHandler = () => {
        // const selectedSong = song;
        setCurrentSong(song);
    }

    return (
        <div 
            onClick={songSelectHandler}             
            className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`}
        >            
            <img src={song.cover} alt="cover album" />            
            <div className="song-details">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>             
        </div>
    )
};

export default LibrarySong;