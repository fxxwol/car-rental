import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import { CatalogSection } from './CatalogPage.styled'
import { Container } from '../../common/Container.styled'
import CarsList from '../../components/CarsList/CarsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCars, fetchCarsPage } from '../../redux/carSlice/carsThunk'
import { selectHasMore, selectHasMoreFiltered, selectLoading, selectPage, selectisFiltered } from '../../redux/carSlice/selectors'
import LoadMore from '../../components/LoadMore/LoadMore'
import  Loader  from '../../components/Loader/Loader'

function CatalogPage() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)
  const page = useSelector(selectPage)
  const hasMore = useSelector(selectHasMore)
  const isFiltered = useSelector(selectisFiltered)
  const hasMoreFiltered = useSelector(selectHasMoreFiltered)


  useEffect(() => {
     dispatch(fetchAllCars());
     dispatch(fetchCarsPage(page));
  }, [dispatch, page])

  return (
    <CatalogSection>
      <Container>
        <Filter />
        {isLoading ? <Loader />
          : <CarsList/>}
        {!isFiltered && hasMore && <LoadMore />}
        {isFiltered && hasMoreFiltered && <LoadMore />}
      </Container>
    </CatalogSection>
  )
}

export default CatalogPage