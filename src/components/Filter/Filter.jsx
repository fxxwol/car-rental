import React, { useState } from 'react';
import { Button } from '../../common/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
    ArrowBtn,
    ArrowDown,
    ArrowUp,
    ErrorMsg,
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
import { selectAllCars, selectFilters, selectisFiltered } from '../../redux/carSlice/selectors';
import { seFilteredCars, setFilters, setIsFiltered } from '../../redux/carSlice/slice';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams()
    const allCars = useSelector(selectAllCars)
    const filters = useSelector(selectFilters)
    const isFiltered = useSelector(selectisFiltered)

    const dispatch = useDispatch()
    
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
                return !value || (car["mileage"] >= value);
            }
            if (param === 'endMileage') {
                value = Number(value)
                return !value || (car["mileage"] <= value);
            }
            return true;
        });
    };

    const handleSearch = () => {
            if (filters.startMileage && filters.startMileage < 500 ) {
            setError("Mileage should be greater than 500")
            return;
            } else if (filters.endMileage && filters.endMileage < 500) { 
            setError("Mileage should be greater than 500")
            return;
            } else if (filters.startMileage && filters.endMileage && filters.startMileage > filters.endMileage) { 
            setError("Number in To field should be greater than From")
            return;
        } else {
            setError(null)
        }
        setSearchParams({ ...filters })
        const filteredCars = allCars.filter((car) => filterCars(car, filters));
        dispatch(seFilteredCars(filteredCars))
        dispatch(setIsFiltered(true))
    };


    const handleEnter = (e) => {
        if (e.code === "Enter") {
            handleSearch()
        }
    }

    const handleReset = () => {
        dispatch(setFilters({
            make: '', rentalPrice: '', startMileage: '', endMileage: ''
        }))
        dispatch(setIsFiltered(false))
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
                                        className={option === filters.make ? 'active' : ''}
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
                                        className={option.label === filters.rentalPrice ? 'active' : ''}
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
                            min="500"
                        />
                        <PlaceholderRight>To</PlaceholderRight>
                        <MileageInputRight
                            id="mileageTitle"
                            type='number'
                            value={filters.endMileage}
                            onChange={(e) => {
                                    dispatch(setFilters({
                                        endMileage: e.target.value
                                    }))
                            }}
                            onKeyDown={handleEnter}
                            min="500"
                            />
                        {error && <ErrorMsg>{error }</ErrorMsg>}
                    </MileageInputWrapper>
                </InputBlock>
                <Button type='button' onClick={handleSearch} onKeyDown={handleEnter}>
                    Search
                </Button>
                {isFiltered && <Button type='button' onClick={handleReset}>
                    Reset
                </Button>}
            </InputsBlock>
        </FilterSectionContainer>
    );
};

export default Filter