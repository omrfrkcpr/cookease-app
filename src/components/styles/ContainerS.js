import styled, { css } from "styled-components";
import banner from "../../assets/banner.jpg";
import bgImg from "../../assets/details-bg.jpg";
import aboutBg from "../../assets/about-bg.jpg";
import notFound from "../../assets/404.avif";
import loginBg from "../../assets/login-bg.gif";

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const containerStyles = css`
  ${centerAlign}
  padding: 0.5rem 2rem 1rem;
  background-image: linear-gradient(to top, #feada6 40%, #f5efef 110%);
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsiveExtraSmall}) {
    gap: 1rem;
    padding: 1rem 0.5rem 0;
  }
`;

export const CenterAlignForm = styled.div`
  ${centerAlign}
  flex-direction: column;
`;

export const NavbarContainerS = styled.div`
  ${containerStyles}
  justify-content: space-between;
`;

export const FooterContainerS = styled(NavbarContainerS)`
  padding: 2rem;
`;

export const HeaderContainerS = styled.div`
  ${centerAlign}
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem 0;
  border-radius: 15px;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    border-radius: 0px;
  }
`;

export const PageContainerS = styled.div`
  position: relative;
  background-repeat: ${(props) =>
    props.login || props.signup ? "repeat" : "no-repeat"};
  background-position: center;
  background-size: ${(props) => props.notFound && "contain"};
  min-height: calc(100vh - 236px);
  background-image: ${(props) =>
    props.about === "true"
      ? `url(${aboutBg})`
      : props.notFound
      ? `url(${notFound})`
      : props.login || props.signup
      ? `url(${loginBg})`
      : "linear-gradient(to bottom, #feada6 20%, #f5efef 30%)"};
  padding: ${(props) => (props.notFound ? "3rem 0 0 0" : "0.5rem")};
  text-align: ${(props) => props.notFound && "center"};
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    padding: 0rem;
    min-height: calc(100vh - 300px);
  }
  @media screen and (max-width: ${({ theme }) => theme.responsiveExtraSmall}) {
    min-height: ${(props) =>
      props.login || props.signup
        ? "calc(100vh - 269px)"
        : "calc(100vh - 236px)"};
  }
`;

export const NotFoundContainerS = styled.div`
  ${centerAlign}
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    padding: 7rem;
  }
`;

export const RecipeCardContainerS = styled.div`
  ${centerAlign}
  flex-direction: column;
  padding: 1rem;
  height: 470px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  border: 2px solid grey;
  border-radius: 15px;
  max-width: 350px;
  margin: auto;
`;

export const DetailsContainerS = styled.div`
  background-image: url(${bgImg});
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 236px);
`;

export const DetailCardContainerS = styled.div`
  ${centerAlign}
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgb(71, 71, 71);
  padding: 1.5rem;
  background-color: wheat;
  width: fit-content;
  margin: auto;
  gap: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    flex-direction: column;
  }
`;

export const FormContainerS = styled.div`
  width: 50%;
  text-align: center;
`;

export const EmptyContainerS = styled.div`
  ${centerAlign}
  min-height: calc(100vh - 236px);
  background-color: #1394b2;
`;

export const AboutContainerS = styled.div`
  ${centerAlign}
  width: 90%;
  margin: auto;
  box-shadow: 2px 2px 2px gray;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    width: 6px;
    background: #888;
  }
`;

export const LoginFormContainerS = styled.div`
  ${centerAlign}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  width: 70%;
  max-width: 400px;
  height: fit-content;
  background-color: white;
  box-shadow: 2px 2px 8px black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 1rem 0;
`;

export const FormS = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecipeCardImgContainerS = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  margin: 1rem;
`;

export const DetailsGeneral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DetailsGeneralSpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
