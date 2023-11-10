import styled from "styled-components";
import variables from "../../../common/Variables";

export const Benefits = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
position: absolute;
left: -460px;
top: 48px;
`
export const BenefitItem = styled.li`
width: 592px;
height: 170px;
padding: 32px;
display: flex;
gap: 20px;
border-radius: 24px;
background-color: ${variables.bcgSecondary};
border: 1px solid rgba(0, 0, 0, 0.10);
`
export const BenefitTitle = styled.h3`
font-size: 24px;
font-weight: 700;
line-height: 150%; 
margin-bottom: 12px;
`
export const BenefitText = styled.p`
font-size: 17px;
line-height: 160%;
letter-spacing: -0.36px;`

export const SvgWrapper = styled.div`
    width: 54px;
    height: 106px;
    padding:41px 15px;
    background-color: ${variables.whiteText};
    border-radius: 16px;
`