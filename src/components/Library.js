import React from 'react';
import LibrarySong from './LibrarySong';


const Library = ({ songs, currentSong, setCurrentSong, displayNav }) => {
    return (
        <div className={displayNav ? 'library' : 'hidden'}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(song => (
                        <LibrarySong 
                            song={song} 
                            songs={songs}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                            key={song.id}                            
                        />
                    ))
                }
            </div> 
        </div>
    )
}

export default Library;