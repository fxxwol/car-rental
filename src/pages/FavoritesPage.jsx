import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllCars } from '../redux/carSlice/selectors';
import { Container } from '../common/Container.styled';
import CarsList from '../components/CarsList/CarsList';

function FavoritesPage() {
  const favorite = useSelector(state => state.favorite.favorites);
   const allCars = useSelector(selectAllCars);
  const favoriteCars = allCars.filter(car => favorite.includes(car.id));

  return (
      <>
        <Container>
          <CarsList cars={favoriteCars} />
        </Container>

      </>
    );
  };

export default FavoritesPage