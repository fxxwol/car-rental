import React, { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import { CatalogSection } from "./CatalogPage.styled";
import { Container } from "../../common/Container.styled";
import CarsList from "../../components/CarsList/CarsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars, fetchCarsPage } from "../../redux/carSlice/carsThunk";
import {
  selectAllCars,
  selectFilteredCars,
  selectFilters,
  selectHasMore,
  selectLoading,
  selectPage,
  selectPageCars,
  selectisFiltered,
} from "../../redux/carSlice/selectors";
import LoadMore from "../../components/LoadMore/LoadMore";
import Loader from "../../components/Loader/Loader";
import NoCarsFound from "../../components/NoCars/NoCars";
import {
  setFilteredCars,
  setFilters,
  setIsLoading,
} from "../../redux/carSlice/slice";
import { setIsFiltered } from "../../redux/carSlice/slice";
function CatalogPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const allCars = useSelector(selectAllCars);
  const hasMore = useSelector(selectHasMore);
  const cars = useSelector(selectPageCars);
  const isFiltered = useSelector(selectisFiltered);
  const filters = useSelector(selectFilters);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCarsPage(page));
  }, [dispatch, page]);

  return (
    <CatalogSection>
      <Container>
        <Filter
          cars={allCars}
          filters={filters}
          onFilter={(val) => dispatch(setFilteredCars(val))}
          isFiltered={isFiltered}
          changeIsFiltered={(val) => dispatch(setIsFiltered(val))}
          changeFilters={(val) => dispatch(setFilters(val))}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <CarsList cars={isFiltered ? filteredCars : cars} />
        )}
        {isFiltered && !filteredCars.length && <NoCarsFound />}
        {!isFiltered && hasMore && <LoadMore />}
      </Container>
    </CatalogSection>
  );
}

export default CatalogPage;
