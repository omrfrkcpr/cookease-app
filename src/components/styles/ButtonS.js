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
  padding: 0.1rem 0.8rem;
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
