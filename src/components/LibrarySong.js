import React from 'react';

const LibrarySong = ({ song, currentSong, setCurrentSong, displayNav, setDisplayNav }) => {

    const songSelectHandler = () => {        
        setCurrentSong(song);
        let prevState = !displayNav;
        setDisplayNav(prevState);
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