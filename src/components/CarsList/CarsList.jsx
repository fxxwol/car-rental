import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCars } from '../../redux/carSlice/selectors'
import CarsItem from './CarsItem/CarsItem'
import { CardsList } from './CarsList.styled'

function CarsList() {
    const cars = useSelector(selectAllCars)

    return (
        <CardsList>
            {cars.map(car =>
                <CarsItem key={car.id} car={car} />)}
        </CardsList>
    )
}

export default CarsList