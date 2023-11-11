import React from 'react'
import { LoadMoreBtn } from './LoadMore.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage } from '../../redux/carSlice/selectors'
import { setPage} from '../../redux/carSlice/slice'

function LoadMore() {
  const page = useSelector(selectPage)
  const dispatch = useDispatch()

  return (
    <LoadMoreBtn type='button' onClick={() => dispatch(setPage(page + 1))}>
      Load more
    </LoadMoreBtn>
  )
}

export default LoadMore