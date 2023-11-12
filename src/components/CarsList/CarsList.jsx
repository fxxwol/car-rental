import React from 'react'
import CarsItem from './CarsItem/CarsItem'
import { CardsList } from './CarsList.styled'
import { useSelector } from 'react-redux'
import { selectPageCars, selectFilteredCars, selectisFiltered } from '../../redux/carSlice/selectors'

function CarsList() {
    const cars = useSelector(selectPageCars)
    const filteredCars = useSelector(selectFilteredCars)
    const isFiltered = useSelector(selectisFiltered)
    return (
        <CardsList>
            {isFiltered ?
                <>
                {filteredCars.map(car => <CarsItem key={car.id} car={car} />)}
                </>
                :
                <>
                    {cars.map(car => <CarsItem key={car.id} car={car} />)}
                </>
            }
        </CardsList>
    )
}
export default CarsList;