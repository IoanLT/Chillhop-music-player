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
            <button 
                onClick={toggleNavHandler}
                style={{ color: displayNav ? '#000' : '#fff' }}
            >
                {/* Library */}
                <FontAwesomeIcon icon={faMusic} size="3x" />
            </button>
        </nav>
    )
}

export default Navigation;
