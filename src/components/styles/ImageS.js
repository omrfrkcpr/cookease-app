import styled from "styled-components";

const ImageS = styled.img`
  /* width: 300px;
  height: 300px;
  border: 2px solid red;
  margin: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    width: 80%;
    height: 80%;
  } */
`;

export const LogoS = styled.img`
  box-shadow: 2px 10px 10px black;
  width: 150px;
  height: 110px;
  border-radius: 50%;
  background-color: #ff6318;
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

export default ImageS;
