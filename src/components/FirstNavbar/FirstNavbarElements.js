import styled from "styled-components";

export const FirstNavbarContainer = styled.div`
  background: #ececec;
  box-sizing: border-box;
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
  color: #030303;
  cursor: pointer;
`;
