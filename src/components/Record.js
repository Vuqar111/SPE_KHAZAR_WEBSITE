import React from "react";
import styled from "styled-components";


const RecordItem = ({ record }) => {
  return (
    <Container>
      <Image src={record.image}></Image>
      <InfoContainer>{record.title} </InfoContainer>
      <PlayContainer>
      
          PLay
      
      </PlayContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 400px;
  height: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 20px;
  position: relative;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 45px;
  }

`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PlayContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: white;
  padding-top: 25px;
  background: #256f98;
  border-radius: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  :hover{
    background: #0492c4;
  }
`;
const InfoContainer = styled.div`
  padding: 10px;
  width: 100%;
  background: #256f98;
  color: white;
  font-weight: 500;
`;

export default RecordItem;
