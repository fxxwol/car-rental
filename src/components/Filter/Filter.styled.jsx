import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';
import variables from '../../common/Variables';

export const FilterSectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 80px;
`;

export const InputsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const InputBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  `;

export const Dropdown = styled.div`
    position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  overflow: auto;
  z-index: 100;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  margin-top: 3px;

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

`
export const ModelDropdown = styled(Dropdown)`
  width: 252px;
  max-height: 272px;

  &::-webkit-scrollbar {
    height: 130px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${variables.filterLavelsColor};
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 14px;
  background: ${variables.selectorsColor};
  border: none;
  outline: none;
  color: ${variables.blackText};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  height: 48px;
  cursor: default;

  &::placeholder {
    color: ${variables.blackText};
  }
`
export const ModelInput = styled(Input)`
  width: 252px;
`;

export const ArrowDown = styled(FiChevronDown)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: ${variables.blackText};
`;

export const ArrowUp = styled(FiChevronUp)`
  width: 20px;
  height: 20px;
  margin: 0;

  color: ${variables.blackText};
`;

export const ArrowBtn = styled.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;


export const PriceDropdown = styled(Dropdown)`
  width: 145px;
  max-height: 188px;
 
  &::-webkit-scrollbar {
    height: 66px;
  }

`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  gap: 8px;
`;

export const OptionListItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  color: ${variables.greyText};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: rgba(18, 20, 23, 0.8);
  }
`;

export const PriceInput = styled(Input)`
  width: 153px;
`;

export const MileageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MileageInputLeft = styled(Input)`
  width: 160px;
  border-radius: 0;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  cursor: text;
  text-indent: 51px;


  &::placeholder{
    text-indent: 0;
  }
  `;

export const MileageInputRight = styled(Input)`
  width: 160px;
  border-radius: 0;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  cursor: text;
  text-indent: 29px;

  &::placeholder{
    text-indent: 0;
  }
`;
