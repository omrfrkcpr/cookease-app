import styled from "styled-components";

export const FooterUl = styled.ul`
  display: flex;
  gap: 2rem;
  height: 1rem;
  justify-content: right;
  align-items: center;
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    gap: 1rem;
    margin: auto;
    text-align: center;
    justify-content: center;
    padding-right: 1.5rem;
  }
`;

export const FooterLi = styled.li`
  list-style-type: none;
  font-size: 2.5rem;
  width: 40px;
  &:hover {
    font-size: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1.5rem;
    &:hover {
      font-size: 1rem;
    }
  }
`;

export const NavbarUl = styled.ul`
  display: flex;
  gap: 2rem;
  height: 2rem;
  margin-top: 2rem;
  justify-content: center;
  list-style-type: none;
  text-align: center;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    gap: 1rem;
    margin-top: 0rem;
  }
`;

export const NavbarLi = styled.li`
  font-size: 1.5rem;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1.3rem;
  }
`;

export const NutritionsUl = styled.ul`
  list-style-type: none;
  text-align: left;
`;
