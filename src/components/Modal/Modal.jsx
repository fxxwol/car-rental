import { useEffect } from "react";
import { createPortal } from "react-dom";
import sprite from "../../img/sprite.svg";
import { StyledLink } from "../../common/Button.styled";
import {
  ModalContainer,
  Backdrop,
  BtnClose,
  CloseIcon,
  CarImg,
  InfoWrapper,
  Accessories,
  AccessoriesTitle,
  AccessoryList,
  RentalTitle,
  RentalItem,
  RentalInfo,
  RentalBlock,
  ContentContainer,
  Descr,
} from "./Modal.styled";
import {
  CarModel,
  CardTitle,
  DescText,
  Description,
  TitleMain,
} from "../CarsList/CarsItem/CarsItem.styled";
import variables from "../../common/Variables";

const modalRoot = document.querySelector("#modal-root");

const toggleBodyOverflow = (toggle) => {
  if (toggle) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

const Modal = ({ onClose, car }) => {
  const {
    model,
    make,
    id,
    img,
    year,
    address,
    rentalPrice,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = car;

  useEffect(() => {
    toggleBodyOverflow(true);
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      toggleBodyOverflow(false);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const onOverlay = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const addressParts = address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalConditionsSplitted = rentalConditions.split("\n", 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  return createPortal(
    <Backdrop onClick={onOverlay} className="show">
      <ModalContainer className="show">
        <ContentContainer>
          <BtnClose type="button" aria-label="close button" onClick={onClose}>
            <CloseIcon>
              <use href={`${sprite}#icon-x`} />
            </CloseIcon>
          </BtnClose>
          <CarImg src={img} alt={make} />
          <InfoWrapper>
            <CardTitle>
              <TitleMain>
                {make}
                <CarModel>
                  {model}
                  <span style={{ color: variables.blackText }}>,</span>
                </CarModel>
                {year}
              </TitleMain>
              {rentalPrice}$
            </CardTitle>
            <Description
              style={{
                width: "277px",
              }}
            >
              <DescText>{city}</DescText>
              <DescText>{country}</DescText>
              <DescText>Id: {id}</DescText>
              <DescText>Year: {year}</DescText>
              <DescText>Type: {type}</DescText>
              <DescText>FuelConsumprion: {fuelConsumption}</DescText>
              <DescText>Engine Size: {engineSize}</DescText>
            </Description>
            <Descr>{description}</Descr>
            <Accessories>
              <AccessoriesTitle>
                Accessories and functionalities:
              </AccessoriesTitle>
              <AccessoryList>
                {accessories.map((accessory, index) => (
                  <DescText key={index}>{accessory}</DescText>
                ))}
                {functionalities.map((functionality, index) => (
                  <DescText key={index}>{functionality}</DescText>
                ))}
              </AccessoryList>
            </Accessories>
            <RentalBlock>
              <RentalTitle>Rental Conditions:</RentalTitle>
              <RentalInfo>
                <RentalItem>
                  Minimum age: <span>{number}</span>
                </RentalItem>
                <RentalItem>{rentalConditionsSplitted[1]}</RentalItem>
                <RentalItem>{rentalConditionsSplitted[2]}</RentalItem>
                <RentalItem>
                  Mileage: <span>{mileage.toLocaleString("en-EN")}</span>
                </RentalItem>
                <RentalItem>
                  Price: <span>{rentalPrice}$</span>
                </RentalItem>
              </RentalInfo>
            </RentalBlock>
            <StyledLink href="tel:380730000000" width={168} height={44}>
              Rental car
            </StyledLink>
          </InfoWrapper>
        </ContentContainer>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
