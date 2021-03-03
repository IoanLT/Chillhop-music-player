import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    // Using useRef to grab the audio file
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
        const duration = e.target.duration;
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
                src={currentSong.audio}>
            </audio>         
        </div>
    )
}

export default Player;
