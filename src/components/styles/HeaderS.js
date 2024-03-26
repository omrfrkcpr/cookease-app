import styled from "styled-components";

export const HeaderH1 = styled.h1`
  color: black;
  text-align: center;
  padding: 2rem 0;
  /* background-color: rgb(255, 255, 255, 0.5); */
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1.3rem;
    padding-bottom: 1rem;
  }
`;

export const AboutH1 = styled.h1`
  text-align: center;
  color: #a08441;
`;

export const AboutH3and4 = styled.h3`
  color: #6b675f;
`;
