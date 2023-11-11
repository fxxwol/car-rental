import React, { useState } from 'react';
import { Button } from '../../common/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
    ArrowBtn,
    ArrowDown,
    ArrowUp,
    FilterSectionContainer,
    InputBlock,
    InputsBlock,
    Label,
    MileageInputLeft,
    MileageInputRight,
    MileageInputWrapper,
    ModelDropdown,
    ModelInput,
    OptionList,
    OptionListItem,
    PlaceholderLeft,
    PlaceholderRight,
    PriceDropdown,
    PriceInput
} from './Filter.styled';
import { models } from './modelOptions';
import { selectFilters } from '../../redux/carSlice/selectors';
import { setFilters } from '../../redux/carSlice/slice';

const Filter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dispatch = useDispatch()
    const filters = useSelector(selectFilters)
    const minPrice = 30;
    const maxPrice = 500;
    const step = 10;

    function createArrayWithStep(number, step) {
        const resultArray = [];
        for (let i = step; i <= number; i += step) {
            resultArray.push(i.toString());
        }
        return resultArray;
    }

    const priceOptions = createArrayWithStep(maxPrice, step)
        .filter(item => item >= minPrice)
        .map(item => ({ label: item, value: item }));

    const handleSelectModel = selectedModel => {
        dispatch(setFilters({
            make: selectedModel
        }))
        setIsDropdownOpen(false);
    };

    const handleSelectPrice = selectedPrice => {
        dispatch(setFilters({
            rentalPrice: selectedPrice
        }))
        setIsDropdownOpen(false);
    };

    const toggleDropdown = dropdownType => {
        if (isDropdownOpen === dropdownType) {
            setIsDropdownOpen(null);
        } else {
            setIsDropdownOpen(dropdownType);
        }
    };

    const handleSearch = () => {

    }

    return (
        <FilterSectionContainer>
            <InputsBlock>
                <InputBlock>
                    <Label htmlFor="modelTitle">Car brand</Label>
                    <ModelInput
                        id="modelTitle"
                        readOnly
                        placeholder="Enter the text"
                        value={filters.make}
                    />
                    <ArrowBtn type="button" onClick={() => toggleDropdown('model')}>
                        {isDropdownOpen === 'model' ? <ArrowUp /> : <ArrowDown />}
                    </ArrowBtn>
                    {isDropdownOpen === 'model' && (
                        <ModelDropdown>
                            <OptionList>
                                {models.map((option, idx) => (
                                    <OptionListItem
                                        key={idx}
                                        onClick={() => handleSelectModel(option)}
                                    >
                                        {option}
                                    </OptionListItem>
                                ))}
                            </OptionList>
                        </ModelDropdown>
                    )}
                </InputBlock>
                <InputBlock>
                    <Label htmlFor="modelTitle">Price/ 1 hour </Label>
                    <PriceInput
                        id="priceTitle"
                        placeholder="To $"
                        readOnly
                        value={filters.rentalPrice}
                    />
                    <ArrowBtn type="button" onClick={() => toggleDropdown('price')}>
                        {isDropdownOpen === 'price' ? <ArrowUp /> : <ArrowDown />}
                    </ArrowBtn>
                    {isDropdownOpen === 'price' && (
                        <PriceDropdown>
                            <OptionList>
                                {priceOptions.map((option, idx) => (
                                    <OptionListItem
                                        key={idx}
                                        onClick={() => handleSelectPrice(option.value)}
                                    >
                                        {option.label}
                                    </OptionListItem>
                                ))}
                            </OptionList>
                        </PriceDropdown>
                    )}
                </InputBlock>
                <InputBlock>
                    <Label htmlFor="mileageTitle">Сar mileage / km </Label>
                    <MileageInputWrapper>
                        <PlaceholderLeft>From</PlaceholderLeft>
                        <MileageInputLeft
                            id="mileageTitle"
                            onChange={(e) => dispatch(setFilters({
                                startMileage: e.target.value
                            }))}
                            type='number'
                            value={filters.startMileage}
                        />
                        <PlaceholderRight>To</PlaceholderRight>
                        <MileageInputRight
                            id="mileageTitle"
                            type='number'
                            value={filters.endMileage}
                            onChange={(e) => dispatch(setFilters({
                                endMileage: e.target.value
                            }))}
                        />
                    </MileageInputWrapper>
                </InputBlock>
                <Button type='button' onClick={handleSearch}>
                    Search
                </Button>
            </InputsBlock>
        </FilterSectionContainer>
    );
};

export default Filter