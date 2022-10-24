import styled from "styled-components";

export const NewsSectionContainer = styled.div`
  /* border: 2px solid black; */
  border-radius: 20px;
  background: #f0f0f0;
  padding-top: 50px;
  margin-top: 100px;
  margin-bottom: 80px;
`;

export const NewsSectionHeadline = styled.h1`
  font-size: 37px;
  font-weight: 600;
  text-align: center;
`;

export const NewsSectionContent = styled.div`
  /* border: 2px solid red; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsSectionBlocks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const NewsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  cursor: pointer;
`;

export const NewsBlockH2 = styled.h2`
  line-height: 1.3;
  padding-top: 15px;
  font-size: 22px;
  font-weight: 600;
`;
export const NewsBlockDate = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const NewsBlockImage = styled.img`
  width: 100%;
  max-width: fit-content;
  border: 0.1px solid #ff8000;
`;

export const NewsButtonBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

export const NewsBlockButton = styled.button`
  border-radius: 50px;
  padding: 7px 20px;
  border: 4px solid #ff7c09;
  background: none;
  color: #ff7c09;
  font-size: 27px;
  font-weight: 600;
  outline: none;
`;
