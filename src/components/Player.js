import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, songs }) => {
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    // Using useRef hook to grab the audio file
    const audioRef = useRef(null);

    // Event handlers    
    const playSongHandler = () => {        
        if (isPlaying) {
            let pause = !isPlaying;
            setIsPlaying(pause);
            // This is a built in function specific for the audio element
            audioRef.current.pause();
        } else {
            let play = !isPlaying;
            setIsPlaying(play);
            // This is a built in function specific for the audio element
            audioRef.current.play();
        }            
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration || 0;
        setSongInfo({ 
            ...songInfo, 
            currentTime: current,
            duration
        })
    }

    // This will set any selected song to play if the previous song was playing already
    const autoPlayHandler = () => {
        if(isPlaying){
            audioRef.current.play();
        }
    }

    // Skip to previous song
    const skipTrackHandler = (direction) => {
        // Find the index of the current song
        const songIndex = songs.findIndex(song => song.id === currentSong.id);
        // Set the index of our next song if we skip forward
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(songIndex + 1) % songs.length]);            
        } 
        // Set the index of our previous song if we skip back
        if(direction === 'skip-back') {
            if((songIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(songIndex - 1) % songs.length]);
        }
        
    }

    // This format will format the time in minutes and seconds
    const getTime = (time) => Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

    // This funtion is used to be able to drag the input
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({
            ...songInfo,
            currentTime: e.target.value
        })
    }

    const songEndHandler = async () => {
        const trackIndex = songs.findIndex(song => song.id === currentSong.id);           
        await setCurrentSong(songs[(trackIndex + 1) % songs.length]);            
        if(isPlaying) audioRef.current.play();
    }     

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    type="range"
                    min={0} 
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div> 
            <div className="play-control">
                <FontAwesomeIcon 
                    className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft} 
                    onClick={() => skipTrackHandler('skip-back')}
                />                
                <FontAwesomeIcon 
                    className="pause" 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay} 
                    onClick={playSongHandler}
                />               
                <FontAwesomeIcon 
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight} 
                    onClick={() => skipTrackHandler('skip-forward')}
                />
            </div> 
            {/* Using ref attribute to target this specific file so we can use it in line 12 */}
            <audio 
                // The onTimeUpdate event occurs when the playing position of an audio/video has changed
                onTimeUpdate={timeUpdateHandler} 
                onLoadedData={autoPlayHandler}
                // The onLoadedMetadata event occurs when meta data for the specified audio/video has been loaded.
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
                onEnded={songEndHandler}
            >
            </audio>         
        </div>
    )
}

export default Player;
