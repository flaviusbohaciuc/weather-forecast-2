import styled from "styled-components";
export const FlapsStyled = styled.div`
  animation: rotateWindmill ${({windSpeed}) => 100 - windSpeed}s linear infinite;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 40px;
  left: 50px;

  & .flap:nth-child(1) {
    top: -20px;
    left: 97px;
  }
  
  & .flap:nth-child(2) {
    top: 70px;
    left: 150px;
    transform: rotate(120deg);
  }
  
  & .flap:nth-child(3) {
    top: 70px;
    left: 45px;
    transform: rotate(240deg);
  }
`
