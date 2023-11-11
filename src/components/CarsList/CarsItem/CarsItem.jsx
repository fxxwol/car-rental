import React from 'react'
import { CarImg, CarModel, CardTitle, DescText, Description, ImgWrap, Item, TitleMain } from './CarsItem.styled'
import variables from '../../../common/Variables'
import { Button } from "../../../common/Button.styled"

function CarsItem({ car }) {
    const { img, make, model, year, address, rentalPrice, rentalCompany, id, functionalities } = car
    const addressParts = address.split(', ');
    const city = addressParts[1];
    const country = addressParts[2];

    return (
        <Item>
            <ImgWrap>
                <CarImg src={img} alt={`${make} ${model} ${year}`} />
            </ImgWrap>
            <CardTitle>
                <TitleMain>
                    {make}
                    <CarModel>
                        {model}
                        <span style={{ color: variables.blackText }}>,</span>
                    </CarModel>
                    {year}
                </TitleMain>
                {rentalPrice}
            </CardTitle>
            <Description>
                <DescText>{city}</DescText>
                <DescText>{country}</DescText>
                <DescText>{rentalCompany}</DescText>
                <DescText>{model}</DescText>
                <DescText>{make}</DescText>
                <DescText>{id}</DescText>
                <DescText>{functionalities[0]}</DescText>
            </Description>
            <Button type="button" width={274} height={44}>
                Learn more
            </Button>
        </Item>
    )
}

export default CarsItem