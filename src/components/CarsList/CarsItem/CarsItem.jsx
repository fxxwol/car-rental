import React, { useState } from 'react'
import { CarImg, CarModel, CardTitle, DescText, Description, HeartBtn, HeartIcon, ImgWrap, Item, TitleMain } from './CarsItem.styled'
import variables from '../../../common/Variables'
import { Button } from "../../../common/Button.styled"
import sprite from '../../../img/sprite.svg'
import Modal from '../../Modal/Modal'
import comingsoon from '../../../img/comingsoon.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavoriteList, removeFavoriteList } from '../../../redux/favoriteSlice/slice'

function CarsItem({ car }) {
    // const [isClicked, setIsClicked] = useState(false)
    const { img, make, model, year, address, rentalPrice, rentalCompany, id, functionalities } = car
    const addressParts = address.split(', ');
    const favorite = useSelector(state => state.favorite.favorites);
    const city = addressParts[1];
    const country = addressParts[2];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const favoriteStatus = favorite.includes(id);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFavorite = () => {
        favoriteStatus ? dispatch(removeFavoriteList(id)) : dispatch(addToFavoriteList(id))
    }

    return (
        <Item>
            <div>
                <ImgWrap>
                    <HeartBtn onClick={handleFavorite}>
                        {favoriteStatus ?
                            <HeartIcon>
                                <use href={`${sprite}#icon-activeheart`} />
                            </HeartIcon> :
                            <HeartIcon>
                                <use href={`${sprite}#icon-normalheart`} />
                            </HeartIcon>
                        }
                    </HeartBtn>
                    <CarImg src={img} alt={`${make} ${model} ${year}`}
                        onError={ e => {
                            e.target.src = `${comingsoon}`
                            e.onError = null
                        }
                    }
                    />
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
                    {rentalPrice}$
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
            </div>
            <Button type="button" width={274} height={44} onClick={openModal}>
                Learn more
            </Button>
            {isModalOpen && <Modal onClose={closeModal} car={car} />}
        </Item>
    )
}

export default CarsItem