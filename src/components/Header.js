import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Burger from './Burger';

const Header = ({ displayNav, setDisplayNav, openMenu, setOpenMenu }) => {      

    return (
        <HeaderNavigation> 
            <Burger 
                openMenu={openMenu} 
                setOpenMenu={setOpenMenu}  
                displayNav={displayNav} 
                setDisplayNav={setDisplayNav}                 
            />
            <button>                
                <FontAwesomeIcon 
                    style={{ display: displayNav ? 'none' : 'inherit' }}
                    icon={faMusic} 
                    size="2x" 
                />
            </button>
        </HeaderNavigation>
    )
}

const HeaderNavigation = styled.div`
    position: absolute;
    top: 0; 
    width: 100%;
    padding: 0 40px;   
    height: 100px;    
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    align-items: center;     

    button {          
        color: #fff;        
        background: transparent;        
        cursor: pointer; 
        border: none;                        
        padding: 0.5rem;
        transition: all 0.3s ease;
        z-index: 9;

        &:hover {            
            transform: rotate(360deg);
        }
    }    
`

export default Header;
