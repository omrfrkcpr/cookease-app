import styled from "styled-components";
import banner from "../../assets/banner.jpg";

const ContainerS = styled.div``;

export const NavbarContainerS = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: rgba(255, 198, 99, 1);
  align-items: center;
`;

export const FooterContainerS = styled(NavbarContainerS)`
  padding: 3rem 2rem;
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
  height: 100%;
  background-color: rgba(232, 225, 113, 1);
  padding-top: 1rem;
`;

export const RecipeCardContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 400px;
  text-align: center;
  background-color: #dbd9c7;
  border: 2px solid grey;
  border-radius: 15px;
`;

export default ContainerS;
