import React from "react";
import styled from "styled-components";

const Song = ({ currentSong, isPlaying }) => {
	return (
		<SongContainer>
			<ImgWrapper>
				<img
					className={isPlaying ? "spinning" : ""}
					src={currentSong.vinyl}
					alt="vinyl"
				/>
				<img
					className={isPlaying ? "spinning" : ""}
					src={currentSong.cover}
					alt="cover album"
				/>
			</ImgWrapper>

			<SongInfo>
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.artist}</h3>
			</SongInfo>			
		</SongContainer>
	);
};

const SongContainer = styled.div`
	/* max-height: 60vh; */
	height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	
`;

const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 40vh;	
	overflow: hidden;

	img:first-child {
		position: absolute;	
		align-self: center;	
		width: 100%;
		max-width: 400px;
		border-radius: 50%;		
		/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 4px 6px rgba(0, 0, 0, 0.7); */
		animation: rotation linear 90s infinite forwards;
		animation-play-state: paused;

		&.spinning {
			animation-play-state: running;
		}

		@media (max-width: 500px) {
			max-width: 250px;
		}

		@media (max-width: 350px) {
			max-width: 200px;
		}
	}

	img:nth-child(2) {
		position: absolute;	
		align-self: center;
		width: 100%;
		max-width: 180px;
		border-radius: 50%;		
		/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 4px 6px rgba(0, 0, 0, 0.7); */
		animation: rotation linear 90s infinite forwards;
		animation-play-state: paused;

		&.spinning {
			animation-play-state: running;
		}

		@media (max-width: 500px) {
			max-width: 110px;
		}

		@media (max-width: 350px) {
			max-width: 100px;
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
`

const SongInfo = styled.div`
	height: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;

	h2 {		
		padding: 1rem;
		color: #000;
	}

	h3 {		
		font-size: 1rem;		
		color: #000;
	}
`

export default Song;
