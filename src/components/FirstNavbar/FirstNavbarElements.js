import styled from "styled-components";

export const FirstNavbarContainer = styled.div`
  background: #f0f0f0;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const FirstNavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  max-width: 1250px;
`;

export const FirstNavbarLinks = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 20px;
`;

export const FirstNavbarLink = styled.li`
  text-decoration: none;
  list-style: none;
  color: #424140;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.5;

  :hover {
    color: #000;
  }
`;
