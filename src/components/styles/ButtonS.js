import styled from "styled-components";

export const RecipeCardBtn = styled.button`
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  font-size: 1.1rem;
  background-color: rgb(247, 128, 85);
  &:hover {
    background-color: rgb(232, 75, 17);
    color: white;
    transition-duration: 0.5s;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  padding: 0.2rem 0.8rem;
  color: white;
  background-color: #ff6318;
  &:hover {
    color: whitesmoke;
    background-color: darkorange;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    margin-top: 1rem;
    border-radius: 15px;
  }
`;

export const SelectS = styled.select`
  border: none;
  padding: 0.2rem 0;
  margin-right: 0.2rem;
  color: black;
  background-color: #f2dfb3;
  text-align: center;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    border-radius: 15px;
    padding: 0;
  }
`;

export const GoBackBtn = styled.button`
  border: none;
  width: 120px;
  margin: auto;
  padding: 0.2rem 1rem;
  background-color: #f7c006;
  color: brown;
  font-size: 1.2rem;
  border-radius: 12px;
  font-weight: bolder;
  &:hover {
    color: #f7c006;
    background-color: brown;
    transition-duration: 0.5s;
  }
`;

export const LoginBtn = styled.button`
  width: 100px;
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0.8rem;
  margin: auto;
  background-color: #f7c006;
  &:hover {
    color: white;
    background-color: #967713;
    transition-duration: 0.5s;
  }
`;

export const NavbarLinkBtn = styled.button`
  color: ${({ isActive }) => (isActive ? "white" : "#6b675f")};
  text-decoration: none;
  background-color: inherit;
  font-weight: bolder;
  border: none;
  &:hover {
    color: white;
  }
`;
