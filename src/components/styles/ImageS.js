import styled from "styled-components";

export const LogoS = styled.img`
  box-shadow: 2px 10px 10px black;
  width: 150px;
  height: 110px;
  border-radius: 50%;
  background-color: #ff6318;

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    width: 100px;
    height: 80px;
  }
`;

export const RecipeCardImg = styled.img`
  width: 250px;
  height: 250px;
  object-position: center;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
    transition-duration: 1s;
  }
`;

export const DetailsCardImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  object-fit: cover;
  object-position: center;
`;

export const ComingSoonImg = styled.img`
  width: 45%;
  object-fit: cover;
  object-position: center;
`;
