import styled from 'styled-components';
import comingsoon from '../../img/comingsoon.jpg'
import variables from '../../common/Variables';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  max-width: 541px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
  width: 541px;
  z-index: 100;
  border-radius: 24px;
  max-height: 700px;
  overflow-y: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

&::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${variables.greyText};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.greyText};
  }

  `;

export const ContentContainer = styled.div`
position: relative;
  padding: 40px 35px;

`

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  width: 14px;
  display: block;
  height: 14px;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${variables.blackText};
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  background: url(${comingsoon});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 13px;
`;
export const Descr = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const Accessories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccessoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  gap: 3px;
`;

export const RentalBlock = styled.div`
  padding: 0;
  margin: 0;
`;

export const RentalTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalInfo = styled.ul`
  width: 461;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: ${variables.accentColor};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;


