import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: #f2f3f4;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  transition: 0.8s all ease;
  z-index: 10;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  padding: 2px 24px;
  max-width: 1100px;
  @media screen and (max-width: 950px) {
    justify-content: space-around;
  }
`;

export const NavbarLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const NavLogoImg = styled.img`
  width: 150px;
`;

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
export const NavLink = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: #030303;
  text-decoration: none;
  color: #030303;
  list-style: none;
  border: 2px solid transparent;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #ff8000;
  }
`;

export const NavBtnContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NavButton = styled.button`
  border-radius: 10px;
  background: #ff8000;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fbfaf5;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
