import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/carSlice/slice";
import { CarsPagination } from "./Pagination.styled";
import {
  selectAllCars,
  selectLimit,
  selectPage,
} from "../../redux/carSlice/selectors";

function Pagination() {
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);
  const limit = useSelector(selectLimit);
  const pageCount = Math.ceil(allCars.length / limit);
  const page = useSelector(selectPage);
  const handlePageClick = ({ selected }) => {
    dispatch(setPage(selected + 1));
  };

  return (
    <CarsPagination
      breakLabel="..."
      nextLabel=" >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      initialPage={page - 1}
      previousLabel="< "
      renderOnZeroPageCount={null}
      pageClassName={"pagination-item"}
      previousClassName="pagination-arrows"
      nextClassName="pagination-arrows"
      activeClassName="active"
    />
  );
}

export default Pagination;
