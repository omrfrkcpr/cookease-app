import styled from "styled-components";

export const NavbarLink = styled.span`
  color: ${({ isActive }) => (isActive ? "white" : "#6b675f")};

  &:hover {
    color: white;
  }
`;
