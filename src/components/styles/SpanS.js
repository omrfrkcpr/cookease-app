import styled from "styled-components";

export const NavbarLink = styled.span`
  color: ${({ isActive }) => (isActive ? "white" : "#6b675f")};

  &:hover {
    color: white;
  }
`;

export const FavoritesSpan = styled.span`
  position: absolute;
  font-size: 0.9rem;
  top: 0;
  right: -15px;
  background-color: #ff6318;
  padding: 0 0.1rem;
  color: white;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    top: 15px;
    right: -10px;
    font-size: 0.7rem;
  }
`;
