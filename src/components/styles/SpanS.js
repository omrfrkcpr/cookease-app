import styled from "styled-components";

export const NavbarLink = styled.span`
  color: ${({ isActive }) => (isActive ? "white" : "#6b675f")};

  &:hover {
    color: white;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1rem;
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

export const CousineSpan = styled.span`
  font-size: 1.5rem;
  margin-top: 0.3rem;
`;

export const CousineSpanValue = styled.span`
  color: indianred;
  font-weight: bolder;
`;

export const NutrientsLabelSpan = styled.span`
  color: indianred;
  font-weight: bolder;
`;
