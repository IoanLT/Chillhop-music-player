import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ displayNav, setDisplayNav }) => {

    const toggleNavHandler = () => {
        let prevState = !displayNav;
        setDisplayNav(prevState);
    }

    return (
        <nav>
            {/* <h1>Waves</h1> */}
            <button onClick={toggleNavHandler}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Navigation;
