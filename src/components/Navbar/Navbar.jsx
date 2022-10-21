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
import logo from "./nav-logo.png";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo>
          <NavLogoImg src={logo} />
        </NavbarLogo>
        <NavLinksList>
          <NavLink>Частным лицам</NavLink>
          <NavLink>Юридическим лицам</NavLink>
          <NavLink>О нас</NavLink>
        </NavLinksList>
        <NavBtnContent>
          <NavButton>Интернет банк</NavButton>
          <Menu isLazy>
            <MenuButton
              as={Button}
              rightIcon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
              onClick={() => setIsOpen(true)}
            >
              РУ
            </MenuButton>
            {isOpen ? (
              <>
                <MenuList>
                  <MenuItem>Точики</MenuItem>
                  <MenuItem>English</MenuItem>
                </MenuList>
              </>
            ) : null}
          </Menu>
        </NavBtnContent>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;