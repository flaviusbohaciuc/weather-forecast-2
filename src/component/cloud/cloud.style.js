import styled from "styled-components";
export const CloudStyled = styled.div`
  animation: animateCloud
    ${({ windSpeed123, scale }) => (150 - windSpeed123) * scale}s linear
    infinite;
  transform: scale(${({ scale }) => scale});
`;
