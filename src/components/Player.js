import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {

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

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div> 
            <div className="play-control">
                <FontAwesomeIcon 
                    className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft} 
                />
                {
                    isPlaying ?
                        (<FontAwesomeIcon 
                            className="pause" 
                            size="2x" 
                            icon={faPause} 
                            onClick={playSongHandler}
                        />) : 
                        (<FontAwesomeIcon 
                            className="play" 
                            size="2x" 
                            icon={faPlay} 
                            onClick={playSongHandler}
                        />)
                }
                
                <FontAwesomeIcon 
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight} 
                />
            </div> 
            {/* Using ref attribute to target this specific file */}
            <audio ref={audioRef} src={currentSong.audio}></audio>         
        </div>
    )
}

export default Player;
