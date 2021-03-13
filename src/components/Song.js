import React from 'react';
import styled from 'styled-components';

const Song = ({ currentSong, isPlaying }) => {
    
    return (
        <SongContainer>
            <img 
                className={isPlaying ? 'spinning' : ''}                               
                src={currentSong.cover} 
                alt="cover album" 
            />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </SongContainer>
    )
}

const SongContainer = styled.div`
    max-height: 60vh;   
    // height: 60vh;         
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;    

    img {
        width: 100%;
        max-width: 400px;        
        border-radius: 50%;
        margin-bottom: 30px; 
        box-shadow: 0 4px 6px rgba(0,0,0,0.7), 0 4px 6px rgba(0,0,0,0.7);  
        animation: rotation linear 60s infinite forwards;
        animation-play-state: paused;

        &.spinning {
            animation-play-state: running;
        }
        
        @media (max-width: 500px) {
            max-width: 250px;
        }
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    h2 {
        padding: 1rem; 
        color: #000;      
    }

    h3 {        
        font-size: 1rem;
        margin-bottom: 20px;
        color: #000;
    }
`

export default Song;
