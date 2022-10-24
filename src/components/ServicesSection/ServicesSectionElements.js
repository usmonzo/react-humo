import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* background-color: lightgrey; */
  margin: 50px auto;
  padding: 50px;
  background: #f0f0f0;
  border-radius: 20px;
`;
export const ServicesContent = styled.div`
  padding: 0 20px;
  height: auto;
`;
export const ServicesHeadline = styled.h1`
  font-size: 45px;
  font-weight: 650;
  text-align: center;
  margin-bottom: 40px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto;
  grid-template-rows: 3;
`;

export const ServicesObjectOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;
  background-image: linear-gradient(135deg, #28c76f 100%, #81fbb8 15%);
  /* padding: 10px 20px; */
  border-radius: 25px;
  grid-column: 1;
  grid-row: 1;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  > img {
    width: 250px;
  }

  > h1 {
    color: #ffffff;
    text-align: left;
    width: 300px;
    font-size: 18px;
    font-weight: 400;
    margin-left: 10px;
  }
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
export const ServicesObjectTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(135deg, #0396ff 70%, #abdcff 100%);
  padding: 0 10px;
  border-radius: 25px;
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  > h1 {
    color: #ffffff;
    text-align: left;
    padding-left: 25px;
    width: 350px;
    font-size: 20px;
    font-weight: 400;
  }
  > img {
    padding-right: 30px;
    width: 350px;
  }
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
export const ServicesObjectThree = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  background-image: linear-gradient(135deg, #fdeb71 10%, #f8d800 100%);
  padding: 0 30px;
  border-radius: 25px;
  grid-column: 3/ 4;
  grid-row: 3;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  > h1 {
    text-align: left;
    width: 300px;
    font-size: 20px;
    font-weight: 400;
  }
  > img {
    width: 450px;
  }
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
export const ServicesObjectFour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);

  padding: 20px;
  border-radius: 25px;
  grid-column: 1 / 3;
  grid-row: 3;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  > h1 {
    color: #ffffff;
    text-align: left;
    width: 300px;
    font-size: 19px;
    font-weight: 400;
  }
  > img {
    width: 450px;
  }
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
export const ServicesObjectFive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(135deg, #ea5455 10%, #feb692 100%);
  padding: 20px 30px;
  border-radius: 25px;
  grid-column: 1 / 4;
  grid-row: 2;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  > h1 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    width: 500px;
  }

  > img {
    width: 450px;
  }

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

export const ServicesBigImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const ServicesImg = styled.img`
  width: 100px;
  height: 100px;
`;
