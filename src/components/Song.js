import React from "react";
import styled from "styled-components";

const Song = ({ currentSong, isPlaying }) => {
	return (
		<SongContainer>
			<ImgWrapper>
				<img
					className={isPlaying ? "spinning" : ""}
					src={currentSong.vinyl}
					alt="cover album"
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
	/* margin-top: 100px; */

	img:first-child {
		position: absolute;	
		align-self: center;	
		width: 100%;
		max-width: 400px;
		border-radius: 50%;
		/* margin-bottom: 30px; */
		/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 4px 6px rgba(0, 0, 0, 0.7); */
		animation: rotation linear 90s infinite forwards;
		animation-play-state: paused;

		&.spinning {
			animation-play-state: running;
		}

		@media (max-width: 500px) {
			max-width: 300px;
		}
	}

	img:nth-child(2) {
		position: absolute;	
		align-self: center;
		width: 100%;
		max-width: 180px;
		border-radius: 50%;
		margin-bottom: 30px;		
		/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 4px 6px rgba(0, 0, 0, 0.7); */
		animation: rotation linear 90s infinite forwards;
		animation-play-state: paused;

		&.spinning {
			animation-play-state: running;
		}

		@media (max-width: 500px) {
			max-width: 135px;
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
		/* display: block; */
		padding: 1rem;
		color: #000;
	}

	h3 {
		/* display: block; */
		font-size: 1rem;
		/* margin-bottom: 20px; */
		color: #000;
	}
`

export default Song;
