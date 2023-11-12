import styled from "styled-components";
import variables from "../../common/Variables";
import favhero from '../../img/favhero.jpg'

export const FavHeroSection = styled.section`
margin-top: 30px;
border-radius: 12px;
background-color: ${variables.blackText};
display: flex;
align-items: center;
justify-content: space-between;
`
export const FavTile = styled.h1`
    font-size: 50px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 30px;
    text-transform:capitalize;
    color: ${variables.whiteText};

`
export const FavSubs = styled.h2`
font-size: 18px;
line-height: 160%;
font-weight: 400;
margin-bottom: 60px;
color: ${variables.whiteText};

`
export const FavTextContainer = styled.div`
    width: 406px;
    text-align: right;
    margin-right: 120px;
`
export const FavImgWrap = styled.div`
width: calc(50% + 70px);
height: 468px;
border-radius: 12px 0 0 12px;

background-image: url(${favhero});
background-repeat: no-repeat;
background-size: cover;
`

export const FavsListSection = styled.section`
    min-height: 700px;
    margin-bottom: 50px;
`