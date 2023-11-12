import React from "react";
import CarsItem from "./CarsItem/CarsItem";
import { CardsList } from "./CarsList.styled";

function CarsList({ cars }) {
  return (
    <CardsList>
      {cars.map((car) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </CardsList>
  );
}
export default CarsList;
