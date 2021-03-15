import React, { useState } from "react";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Import styles
import styled from "styled-components";
import "./styles/app.scss";
// Import data file
import data from "./util";
import Header from "./components/Header";

const App = () => {
	const [songs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [displayNav, setDisplayNav] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<MainWrapper
			style={{
				background: `linear-gradient(to top, ${currentSong.color[0]}, ${currentSong.color[1]})`,
			}}
		>
			<Overlay>
				<Header
					displayNav={displayNav}
					setDisplayNav={setDisplayNav}
					openMenu={openMenu}
					setOpenMenu={setOpenMenu}
				/>
				<Song currentSong={currentSong} isPlaying={isPlaying} />
				<Player
					songs={songs}
					currentSong={currentSong}
					setCurrentSong={setCurrentSong}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
				/>
				<Library
					songs={songs}
					currentSong={currentSong}
					setCurrentSong={setCurrentSong}
					displayNav={displayNav}
					setDisplayNav={setDisplayNav}
					openMenu={openMenu}
					setOpenMenu={setOpenMenu}
				/>
			</Overlay>			
		</MainWrapper>
	);
};

const MainWrapper = styled.div`	
	height: 100%;
	width: 100%;	
`;

const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;

	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
`

export default App;
