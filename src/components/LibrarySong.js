import React from "react";

const LibrarySong = ({
	song,
	currentSong,
	setCurrentSong,
	displayNav,
	setDisplayNav,
	openMenu,
	setOpenMenu,
}) => {
	// This method will set the current song to the song we click on and hide the library menu
	const songSelectHandler = () => {
		setCurrentSong(song);
		let prevState = !displayNav;
		setDisplayNav(prevState);
		let toggleMenu = !openMenu;
		setOpenMenu(toggleMenu);
	};

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
		>
			<img src={song.cover} alt="cover album" />
			<div className="song-details">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
