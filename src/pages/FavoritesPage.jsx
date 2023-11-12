import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectLoading } from "../redux/carSlice/selectors";
import { Container } from "../common/Container.styled";
import CarsList from "../components/CarsList/CarsList";
import FavHero from "../components/FavHero/FavHero";
import { FavsListSection } from "../components/FavHero/FavHero.styled";
import Filter from "../components/Filter/Filter";
import Loader from "../components/Loader/Loader";
import NoCarsFound from "../components/NoCars/NoCars";
import {
  selectFavFiltered,
  selectFavFilters,
  selectIsFavFiltered,
} from "../redux/favoriteSlice/selectors";
import {
  setFavFiltered,
  setFavFilters,
  setIsFavFiltered,
} from "../redux/favoriteSlice/slice";
import { fetchAllCars } from "../redux/carSlice/carsThunk";

function FavoritesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const favorite = useSelector((state) => state.favorite.favorites);
  const allCars = useSelector(selectAllCars);
  const favoriteCars = allCars.filter((car) => favorite.includes(car.id));
  const isFavFiltered = useSelector(selectIsFavFiltered);
  const favFilters = useSelector(selectFavFilters);
  const favFiltered = useSelector(selectFavFiltered);
  const isLoading = useSelector(selectLoading)

  return (
    <>
      <Container>
        <FavHero />
        <FavsListSection>
          <Filter
            cars={favoriteCars}
            filters={favFilters}
            onFilter={(val) => dispatch(setFavFiltered(val))}
            isFiltered={isFavFiltered}
            changeIsFiltered={(val) => dispatch(setIsFavFiltered(val))}
            changeFilters={(val) => dispatch(setFavFilters(val))}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <CarsList cars={isFavFiltered ? favFiltered : favoriteCars} />
          )}
          {isFavFiltered && !favFiltered.length && <NoCarsFound />}
          {!isFavFiltered && !favoriteCars.length && (
            <NoCarsFound message={"You don't have any favorites yet"} />
          )}
        </FavsListSection>
      </Container>
    </>
  );
}

export default FavoritesPage;
