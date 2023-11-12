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
import { selectCars, selectFilters } from '../../redux/carSlice/selectors';
import { seFilteredCars, setFilters, setIsFiltered } from '../../redux/carSlice/slice';

const Filter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch()

    const allCars = useSelector(selectCars)
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

    const handleSelectModel = selectedMake => {
        dispatch(setFilters({
            make: selectedMake
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

    const filterCars = (car, filters) => {
        return Object.entries(filters).every(([param, value]) => {
            if (param === 'make') {
                return !value || car[param] === value;
            }
            if (param === 'rentalPrice') {
                value = Number(value)
                return !value || car[param] <= value;
            }
            if (param === 'startMileage' && filters.endMileage !== "") {
                value = Number(value)
                return !value || (car["mileage"] >= value && car["mileage"] <= filters.endMileage);
            }
            if (param === 'endMileage' && filters.startMileage !== "") {
                value = Number(value)
                return !value || (car["mileage"] <= value && car["mileage"] >= filters.startMileage);
            }
            if (param === 'startMileage') {
                value = Number(value)
                return !value || (car["mileage"] >= value );
            }
            if (param === 'endMileage') {
                value = Number(value)
                return !value || (car["mileage"] <= value );
            }
            return true;
        });
    };

    const handleSearch = () => {
        const filteredCars = allCars.filter((car) => filterCars(car, filters));
        dispatch(seFilteredCars(filteredCars))
        dispatch(setIsFiltered(true))
    };


    const handleEnter = (e) => {
        if (e.code === "Enter") {
            handleSearch()
        }
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
                            onKeyDown={handleEnter}
                        />
                        <PlaceholderRight>To</PlaceholderRight>
                        <MileageInputRight
                            id="mileageTitle"
                            type='number'
                            value={filters.endMileage}
                            onChange={(e) => dispatch(setFilters({
                                endMileage: e.target.value
                            }))}
                            onKeyDown={handleEnter}
                        />
                    </MileageInputWrapper>
                </InputBlock>
                <Button type='button' onClick={handleSearch} onKeyDown={handleEnter}>
                    Search
                </Button>
            </InputsBlock>
        </FilterSectionContainer>
    );
};

export default Filter