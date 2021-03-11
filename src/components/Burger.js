import styled from 'styled-components';

const Burger = ({ openMenu, setOpenMenu }) => {
    return (
      <StyledBurger open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

const StyledBurger = styled.div`
  /* position: absolute; */
  /* top: 5%; */
  left: 2rem;
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