import styled from "styled-components";

const centerAlign = `
  text-align: center;
`;

const responsiveFontSize = `
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1.3rem;
  }
`;

const borderBottom = `
  border-bottom: 2px solid black;
`;

export const HeaderH1 = styled.h1`
  ${centerAlign}
  ${responsiveFontSize}
  color: black;
  padding: 2rem 0;
`;

export const AboutH1 = styled.h1`
  ${centerAlign}
  color: #a08441;
`;

export const AboutH3and4 = styled.h3`
  color: #6b675f;
  ${(props) => props.lastChild && "font-size: 1rem;"}
`;

export const FormH3 = styled.h3`
  ${centerAlign}
  ${responsiveFontSize}
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
`;

export const RecipeCardH4 = styled.h4`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${borderBottom}
`;

export const FooterCopyrightH4 = styled.h4`
  color: rgba(232, 51, 48, 1);
  border-bottom: 1px solid gray;
`;

export const NotFoundH1 = styled.h1`
  color: #1b2e35;
`;

export const MealTypeP = styled.p`
  font-size: 1.5rem;
`;

export const DetailsInfoTitleH3 = styled.h3`
  ${borderBottom}
`;

export const DetailsCardLabel = styled.h3`
  border: 2px solid grey;
  padding: 0.5rem;
  border-radius: 12px;
`;
