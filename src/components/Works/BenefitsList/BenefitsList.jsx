import React from "react";
import {
  BenefitItem,
  BenefitText,
  BenefitTitle,
  Benefits,
  SvgWrapper,
} from "./BenefitsList.styled";
import sprite from "../../../img/sprite.svg";

function BenefitsList() {
  return (
    <Benefits>
      <BenefitItem>
        <SvgWrapper>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-search`} />
          </svg>
        </SvgWrapper>
        <div>
          <BenefitTitle>Browse and select</BenefitTitle>
          <BenefitText>
            Choose from our wide range of premium cars, select the pickup and
            return dates and locations that suit you best.
          </BenefitText>
        </div>
      </BenefitItem>
      <BenefitItem>
        <SvgWrapper>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-calendar`} />
          </svg>
        </SvgWrapper>
        <div>
          <BenefitTitle>Book and confirm</BenefitTitle>
          <BenefitText>
            Book your desired car with just a few clicks and receive an instant
            confirmation via email or SMS.
          </BenefitText>
        </div>
      </BenefitItem>
      <BenefitItem>
        <SvgWrapper>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-face`} />
          </svg>
        </SvgWrapper>
        <div>
          <BenefitTitle>Enjoy your ride</BenefitTitle>
          <BenefitText>
            Pick up your car at the designated location and enjoy your premium
            driving experience with our top-quality service.
          </BenefitText>
        </div>
      </BenefitItem>
    </Benefits>
  );
}

export default BenefitsList;
