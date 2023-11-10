import styled from "styled-components";
import variables from "../../../common/Variables";

export const ServiceList = styled.ul`
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
`
export const SvgService = styled.div`
border-radius: 40px;
border: 7px solid rgba(255, 255, 255, 0.90);
background: ${variables.blueText};
display: flex;
width: 70px;
height: 70px;
padding: 12px;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
export const ServiceItem = styled.li`
text-align: center;
width: 384px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const ServiceTitle = styled.h3`
    font-size: 24px;
font-weight: 700;
line-height: 150%; 
margin-bottom: 12px;
`
export const ServiceText = styled.p`
    font-size: 17px;
line-height: 160%;
letter-spacing: -0.36px;
`