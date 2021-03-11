import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = ({ displayNav, setDisplayNav }) => {

    // This method will toggle the library to show or hide
    const toggleNavHandler = () => {
        let prevState = !displayNav;
        setDisplayNav(prevState);
    }   

    return (
        <nav>            
            <button                 
                onClick={toggleNavHandler}
                style={{ display: displayNav ? 'none' : 'inherit' }}
                // style={{ color: displayNav ? '#000' : '#fff' }}                
            >                
                <FontAwesomeIcon icon={faMusic} size="3x" />
            </button>
        </nav>
    )
}

export default Header;
