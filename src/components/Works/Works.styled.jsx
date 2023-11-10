import styled from "styled-components";
import variables from '../../common/Variables'

export const WorksSection = styled.section`
    background-color: ${variables.bcgSecondary};
    padding: 100px 0;
`

export const WorksTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.96px;
    margin-bottom: 24px;
`

export const WorksSubs = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: -0.36px;
    `
export const WorksTextWrapper = styled.div`
width: 720px;
margin: 0 auto;
text-align: center;
margin-bottom: 56px;
`
export const WorksRect = styled.div`
    width: 780px;
    height: 638px;
    position: relative;
    background-color: ${variables.whiteText};
    border-radius: 24px;
    padding: 0 40px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`