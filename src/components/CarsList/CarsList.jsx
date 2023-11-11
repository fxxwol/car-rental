import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCars } from '../../redux/carSlice/selectors'

function CarsList() {
    const cars = useSelector(selectAllCars)

    return (
        <ul>
            { cars.map(car => <li key={car.id}>{car.make}</li>)}
        </ul>
    )
}

export default CarsList