import ReactPaginate from "react-paginate";
import styled from "styled-components";
import variables from "../../common/Variables";

export const CarsPagination = styled(ReactPaginate)`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-size: 20px;

  .pagination-item {
    background-color: ${variables.bcgSecondary};
    height: 40px;
    display: block;
    min-width: 40px;
    cursor: pointer;
    border-radius: 12px;
    width: 30px;
    transition: all 280ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:focus {
      background-color: ${variables.greyText};
    }
  }

  .pagination-item a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    background-color: ${variables.greyText};
  }

  .pagination-arrows {
    font-size: 25px;
    cursor: pointer;
  }
`;
