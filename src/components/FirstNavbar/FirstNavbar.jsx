import React, { useState } from "react";
import {
  FirstNavbarContainer,
  FirstNavbarContent,
  FirstNavbarLink,
  FirstNavbarLinks,
} from "./FirstNavbarElements";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const FirstNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FirstNavbarContainer>
      <FirstNavbarContent>
        <FirstNavbarLinks>
          <FirstNavbarLink>О нас</FirstNavbarLink>
          <FirstNavbarLink>Частным лицам</FirstNavbarLink>
          <FirstNavbarLink>Юридическим лицам</FirstNavbarLink>
          <FirstNavbarLink>+992 (446) 405544</FirstNavbarLink>
        </FirstNavbarLinks>
        <Menu mw="10px">
          <MenuButton
            as={Button}
            style={{ background: "none" }}
            rightIcon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            РУ
          </MenuButton>
          {isOpen ? (
            <MenuList
              style={{
                display: "flex",
                flexDirection: "column",
                width: "0px",
              }}
            >
              <MenuItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                Точики
              </MenuItem>
              <MenuItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                English
              </MenuItem>
            </MenuList>
          ) : null}
        </Menu>
      </FirstNavbarContent>
    </FirstNavbarContainer>
  );
};

export default FirstNavbar;
