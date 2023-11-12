import React from "react";
import { BrandList } from "./BrandsList.styled";
import sprite from "../../../img/sprite.svg";

function BrandsList() {
  const brandsList = [
    "icon-honda",
    "icon-mercedes",
    "icon-nissan",
    "icon-hyundai",
    "icon-bmw",
    "icon-volkswagen",
    "icon-tesla",
  ];

  return (
    <BrandList>
      {brandsList.map((brand) => (
        <li key={brand}>
          <svg width={150} height={80}>
            <use href={`${sprite}#${brand}`} />
          </svg>
        </li>
      ))}
    </BrandList>
  );
}

export default BrandsList;
