import styled from 'styled-components';

const Burger = ({ openMenu, setOpenMenu, displayNav, setDisplayNav }) => {

    // This method will toggle the library to show or hide
    const toggleNavHandler = () => {
        let prevStateNav = !displayNav;
        let prevStateMenu = !openMenu;
        setDisplayNav(prevStateNav);
        setOpenMenu(prevStateMenu);                
    } 

    return (
      <StyledBurger openMenu={openMenu} onClick={toggleNavHandler}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

const StyledBurger = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ openMenu }) => openMenu ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openMenu }) => openMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ openMenu }) => openMenu ? '0' : '1'};
      transform: ${({ openMenu }) => openMenu ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ openMenu }) => openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export default Burger;