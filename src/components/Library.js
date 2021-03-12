import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, currentSong, setCurrentSong, displayNav, setDisplayNav, openMenu, setOpenMenu }) => {
    return (
        <div className={displayNav ? 'library' : 'hidden'}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(song => (
                        <LibrarySong 
                            song={song}                            
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                            displayNav={displayNav}
                            setDisplayNav={setDisplayNav}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                            key={song.id}                            
                        />
                    ))
                }
            </div> 
        </div>
    )
}

export default Library;