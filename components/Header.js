import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const [isClose, setIsClose] = useState(false)
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>

      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Accounts</a>
        <CustomMenu onClick={() => setIsClose(true)} />
      </RightMenu>

      <BurgerNav show={isClose}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsClose(false)} />
        </CloseWrapper>
        <ul>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inverntory</a></li>
          <li><a href="">Trade-In</a></li>
          <li><a href="">Cybertruck</a></li>
          <li><a href="">Roadster</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Existing Inventory</a></li>
        </ul>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 999;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  width: 300px;
  z-index: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  ul {
    list-style: none;
    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0,.2);
      font-weight: 500;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
