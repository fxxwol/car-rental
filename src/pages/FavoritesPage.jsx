import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars } from '../redux/carSlice/selectors';
import { Container } from '../common/Container.styled';
import CarsList from '../components/CarsList/CarsList';
import FavHero from '../components/FavHero/FavHero';
import { FavsListSection } from '../components/FavHero/FavHero.styled';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import NoCarsFound from '../components/NoCars/NoCars';
import { selectFavFiltered, selectFavFilters, selectIsFavFiltered } from '../redux/favoriteSlice/selectors';
import { setFavFiltered, setFavFilters, setIsFavFiltered } from '../redux/favoriteSlice/slice';
import { fetchAllCars } from '../redux/carSlice/carsThunk';

function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const favorite = useSelector(state => state.favorite.favorites);
  const allCars = useSelector(selectAllCars);
  const favoriteCars = allCars.filter(car => favorite.includes(car.id));
  const isFavFiltered = useSelector(selectIsFavFiltered)
  const favFilters = useSelector(selectFavFilters)
  const favFiltered = useSelector(selectFavFiltered)

  return (
    <>
      <Container>
        <FavHero />
        <FavsListSection>
          <Filter cars={favoriteCars} filters={favFilters} onFilter={(val) => dispatch(setFavFiltered(val))} loading={setIsLoading} isFiltered={isFavFiltered} changeIsFiltered={(val) => dispatch(setIsFavFiltered(val))} changeFilters={(val) => dispatch(setFavFilters(val))} />
          {isLoading ? <Loader /> :
            <CarsList cars={isFavFiltered ? favFiltered : favoriteCars} />}
          {isFavFiltered && !favFiltered.length && <NoCarsFound />}
          {!favoriteCars && <NoCarsFound message={"You don't have any favorites yet"} />}
          {/* {!isFiltered && hasMore && <LoadMore />} */}
        </FavsListSection>
      </Container>

    </>
  );
};

export default FavoritesPage