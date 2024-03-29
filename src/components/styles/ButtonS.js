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
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 0.8rem;
    padding: 0rem 0.6rem;
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
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 0.8rem;
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
  margin: 0 auto;
  background-color: ${({ login }) => (login ? "#f7c006" : "lightgreen")};
  &:hover {
    color: white;
    background-color: ${({ login }) => (login ? "#967713" : "darkgreen")};
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

export const FavoriteBtn = styled.button`
  border: none;
  background-color: inherit;
  margin: 1rem 0 0 2rem;
  &:hover svg {
    fill: white;
    transition-duration: 0.8s;
  }
  &:hover {
    color: white;
    transition-duration: 0.5s;
    font-weight: bolder;
  }
`;

export const PasswordVisibleBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  top: 30px;
  right: 10px;
  margin-top: 0.1rem;
`;

export const HelpBtns = styled.button`
  border: none;
  background-color: inherit;
  color: #107fd3;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
