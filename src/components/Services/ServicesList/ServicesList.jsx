import React from "react";
import {
  ServiceItem,
  ServiceList,
  ServiceText,
  ServiceTitle,
  SvgService,
} from "./ServicesList.styled";
import sprite from "../../../img/sprite.svg";
function ServicesList() {
  return (
    <ServiceList>
      <ServiceItem>
        <SvgService>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-stars`} />
          </svg>
        </SvgService>
        <ServiceTitle>Quality Choice</ServiceTitle>
        <ServiceText>
          We offer a wide range of high-quality vehicles to choose from,
          including luxury cars, SUVs, vans, and more.
        </ServiceText>
      </ServiceItem>
      <ServiceItem>
        <SvgService>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-coins-hand`} />
          </svg>
        </SvgService>
        <ServiceTitle>Affordable Prices</ServiceTitle>
        <ServiceText>
          Our rental rates are highly competitive and affordable, allowing our
          customers to enjoy their trips without breaking the bank.
        </ServiceText>
      </ServiceItem>
      <ServiceItem>
        <SvgService>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-check-verified`} />
          </svg>
        </SvgService>
        <ServiceTitle>Convenient Online Booking</ServiceTitle>
        <ServiceText>
          With our easy-to-use online booking system, customers can quickly and
          conveniently reserve their rental car from anywhere, anytime.
        </ServiceText>
      </ServiceItem>
    </ServiceList>
  );
}

export default ServicesList;
