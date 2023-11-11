import styled from "styled-components";
import variables from "../../../common/Variables";

export const Item = styled.li`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: center;
`

export const CarImg = styled.img`
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
    width: 100%;
height: 268px;
border-radius: 12px;
`

export const ImgWrap = styled.div`
    margin-bottom: 14px;
    width: 100%;
`

export const CardTitle = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
font-size: 16px;
font-weight: 500;
line-height:  150%;
margin-bottom: 8px;
`
export const CarModel = styled.span`
color: ${variables.blueText};
`

export const TitleMain = styled.div`
display: flex;
gap: 5px;
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  height: 40px;
  line-height: 18px;
  gap: 4px;
  overflow: hidden; 
  margin-bottom: 28px;
`;

export const DescText = styled.div`
&:not(:last-child){
    border-right: 1px solid rgba(18, 20, 23, 0.10);;
}  
color: rgba(18, 20, 23, 0.50);
  padding-right: 4px;
font-size: 12px;
font-weight: 400;
line-height: 150%;
`;