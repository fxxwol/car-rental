import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import { CatalogSection } from './CatalogPage.styled'
import { Container } from '../../common/Container.styled'
import CarsList from '../../components/CarsList/CarsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCars, fetchCarsPage } from '../../redux/carSlice/carsThunk'
import { selectFilteredCars, selectHasMore, selectLoading, selectPage, selectPageCars, selectisFiltered } from '../../redux/carSlice/selectors'
import LoadMore from '../../components/LoadMore/LoadMore'
import  Loader  from '../../components/Loader/Loader'
import NoCarsFound from '../../components/NoCars/NoCars'

function CatalogPage() {
  const dispatch = useDispatch()
  const filteredCars = useSelector(selectFilteredCars)
  const isLoading = useSelector(selectLoading)
  const page = useSelector(selectPage)
  const hasMore = useSelector(selectHasMore)
  const cars = useSelector(selectPageCars)
  const isFiltered = useSelector(selectisFiltered)

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCarsPage(page));
  }, [dispatch, page]);

  return (
    <CatalogSection>
      <Container>
        <Filter />
        {isLoading ? <Loader /> :
           <CarsList cars={ isFiltered ? filteredCars : cars} />}
        {isFiltered && !filteredCars.length && <NoCarsFound/>}
        {!isFiltered && hasMore && <LoadMore />}
      </Container>
    </CatalogSection>
  )
}

export default CatalogPage