import styled from "styled-components";

const ButtonS = styled.button`
  /* background-color: ${({ omer }) => (omer ? "#a62440" : "white")};
  border: ${({ kadir }) => (kadir ? `1px solid ${kadir}` : "none")};
  padding: 0.5rem 0.8rem;
  color: ${({ kadir }) => kadir || "white"};
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 2rem 0.5rem;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  } */
`;

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
  font-weight: bolder;
  color: #ff6318;
`;

// export const DetailButton = styled(ButtonSSS)`
//   color: tomato;
//   background-color: white;
//   border-radius: 20px 0;
//   border-left: 3px solid blue;
// `;

export default ButtonS;
