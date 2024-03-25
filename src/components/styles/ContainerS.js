import styled from "styled-components";

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
  background-color: rgba(232, 225, 113, 1);
`;

export const HomePageContainerS = styled.div`
  height: calc(100vh - 146px);
  background-color: rgba(232, 225, 113, 1);
`;

export default ContainerS;
