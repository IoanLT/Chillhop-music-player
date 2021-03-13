import React, { useRef, useState } from 'react';
import styled from 'styled-components';
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
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        // activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) audioRef.current.play();        
        return;
      };

    return (
        <PlayerWrapper>
            <TimeControl>
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    type="range"
                    min={0} 
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
            </TimeControl> 

            <PlayControl className="play-control">
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
            </PlayControl> 
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
        </PlayerWrapper>
    )
}

const PlayerWrapper = styled.div`
    // min-height: 20vh;
    width: 400px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        max-width: 250px;
    }
`

const TimeControl = styled.div`
    width: 100%;    
    display: flex;    

    input {
        width: 100%;       
        padding: 1rem 0; 
        -webkit-appearance: none;                   
        background: transparent;             
    }

    p {
        padding: 1rem;
    }
`

const PlayControl = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    svg {
        cursor: pointer;                 
        color: #000;
    }
`

export default Player;
