import styled from "styled-components";
import heroImg from "../../img/hero.png";
import variables from "../../common/Variables";

export const HeroSection = styled.section`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: calc(50% + 480px);
  padding: 120px 0;
  height: 750px;
`;
export const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 40px;
`;

export const HeroSpan = styled.span`
  color: ${variables.blueText};
  text-transform: capitalize;
  text-decoration: underline;
`;

export const HeroSubs = styled.h2`
  width: 541px;
  font-size: 18px;
  position: relative;
  line-height: 160%;
  margin-bottom: 60px;

  &::after {
    content: "";
    position: absolute;
    right: 15px;
    bottom: -24px;
    width: 528px;
    height: 2px;
    background-color: ${variables.greyText};
  }
`;

export const HeroTextContainer = styled.div`
  width: 662px;
`;
