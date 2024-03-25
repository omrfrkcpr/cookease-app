import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const NavbarContainerS = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: rgba(255, 198, 99, 1);
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }
`;

export const FooterContainerS = styled(NavbarContainerS)`
  padding: 2rem 2rem;

  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 2rem;
  padding: 2rem 0;
  border-radius: 15px;
`;

export const HomePageContainerS = styled.div`
  min-height: calc(100vh - 244px);
  background-color: rgba(232, 225, 113, 1);
  padding-top: 1rem;
`;

export const RecipeCardContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  height: 400px;
  text-align: center;
  background-color: #dbd9c7;
  border: 2px solid grey;
  border-radius: 15px;
  max-width: 350px;
  margin: auto;
`;

export const DetailCardContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: left;
  gap: 1rem;
`;

export const FormContainerS = styled.div`
  width: 50%;
  text-align: center;
`;
