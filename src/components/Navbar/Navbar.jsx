import React, { useState } from "react";
import {
  NavLogoImg,
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavBtnContent,
  NavButton,
  NavLink,
  NavLinksList,
} from "./NavbarElements";
import logo from "./Logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo>
          <NavLogoImg src={logo} />
        </NavbarLogo>
        <NavBtnContent>
          <NavLinksList>
            <NavLink>Кредиты</NavLink>
            <NavLink>Депозиты</NavLink>
            <NavLink>Денежные переводы</NavLink>
            <NavLink>Карты</NavLink>
          </NavLinksList>

          <NavButton>Вход</NavButton>
        </NavBtnContent>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
