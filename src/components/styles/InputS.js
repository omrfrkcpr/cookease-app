import styled from "styled-components";

export const InputS = styled.input`
  width: 60%;
  max-width: 500px;
  margin: 0.1rem;
  padding: 0.1rem 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const FormInputS = styled.input`
  width: 250px;
  margin: 0.3rem auto;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  border: 1px solid grey;
  &:focus {
    outline: none;
  }
`;
