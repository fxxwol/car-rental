import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import { CatalogSection } from './CatalogPage.styled'
import { Container } from '../../common/Container.styled'
import CarsList from '../../components/CarsList/CarsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCars } from '../../redux/carSlice/carsThunk'
import { selectHasMore, selectLoading, selectPage } from '../../redux/carSlice/selectors'
import LoadMore from '../../components/LoadMore/LoadMore'
import  Loader  from '../../components/Loader/Loader'

function CatalogPage() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)
  const page = useSelector(selectPage)
  const hasMore = useSelector(selectHasMore)

  useEffect(() => {
    dispatch(fetchAllCars(page));
  }, [dispatch, page])

  return (
    <CatalogSection>
      <Container>
        <Filter />
        {isLoading ? <Loader />
          : <CarsList />}
        {hasMore && <LoadMore />}
      </Container>
    </CatalogSection>
  )
}

export default CatalogPage