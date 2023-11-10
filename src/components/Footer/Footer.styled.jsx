import styled from "styled-components";
import { Container } from "../../common/Container.styled";
import variables from "../../common/Variables";

export const FooterWrap = styled.footer`
    padding: 30px 0;
    background-color: ${variables.bcgSecondary};
`
export const FooterContainer = styled(Container)`
    display: flex;
    align-items: start;
    justify-content: space-between;
    position: relative;
    &::after{
        position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        bottom: -20px;
        right: 0px;
        background-color: ${variables.greyText};
    }
`
export const Address = styled.address`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
justify-content: center;
`
export const FooterTitle = styled.h3`
color: ${variables.blackText};
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
`

export const Link = styled.a`
    text-decoration: none;
    font-size: 16px;
line-height:  171.429%;
color: ${variables.blackText};
font-style: normal;
`

export const ContactsWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
`

export const LinksWrap = styled.ul`
display: flex;
gap: 30px;
`

export const SocialIcon = styled.a`
  margin-right: 10px;
  text-decoration: none;
  border-radius: 40px;
background-color: ${variables.blueText};
display: flex;
width: 35px;
height: 35px;
justify-content: center;
align-items: center;
transition: all 280ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover, :focus{
background-color: ${variables.accentColor};
}
`;

export const SocialWrapper = styled(Wrapper)`
    flex-direction: row;
`

export const Copyright = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const CopyrightLink = styled.a`
text-decoration: underline;
`