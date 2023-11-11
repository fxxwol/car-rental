import React, { useState } from 'react';
import { Button } from '../../common/Button.styled';
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

const Filter = () => {
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [startMiles, setStartMiles] = useState('');
    const [endMiles, setEndMiles] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    function createArrayWithStep(number, step) {
        const resultArray = [];
        for (let i = step; i <= number; i += step) {
            resultArray.push(i.toString());
        }
        return resultArray;
    }
    const minPrice = 30;
    const maxPrice = 500;
    const step = 10;
    const priceOptions = createArrayWithStep(maxPrice, step)
        .filter(item => item >= minPrice)
        .map(item => ({ label: item, value: item }));

    const handleChangeModel = event => {
        setModel(event.target.value);
        setIsDropdownOpen(false);
    };
    const handleSelectModel = selectedModel => {
        setModel(selectedModel);
        setIsDropdownOpen(false);
    };

    const handleChangePrice = event => {
        setPrice(event.target.value);
    };
    const handleSelectPrice = selectedPrice => {
        setPrice(selectedPrice);
        setIsDropdownOpen(false);
    };

    const handleChangeStartMiles = event => {
        setStartMiles(event.target.value);
    };
    const handleChangeEndMiles = event => {
        setEndMiles(event.target.value);
    };

    const toggleDropdown = dropdownType => {
        if (isDropdownOpen === dropdownType) {
            setIsDropdownOpen(null);
        } else {
            setIsDropdownOpen(dropdownType);
        }
    };

    return (
        <FilterSectionContainer>
            <InputsBlock>
                <InputBlock>
                    <Label htmlFor="modelTitle">Car brand</Label>
                    <ModelInput
                        id="modelTitle"
                        readOnly
                        placeholder="Enter the text"
                        onChange={handleChangeModel}
                        value={model}
                    >
                    </ModelInput>
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
                        onChange={handleChangePrice}
                        value={price}
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
                            onChange={handleChangeStartMiles}
                            type='number'
                            value={startMiles}
                        />
                        <PlaceholderRight>To</PlaceholderRight>
                        <MileageInputRight
                            id="mileageTitle"
                            type='number'
                            value={endMiles}
                            onChange={handleChangeEndMiles}
                        />
                    </MileageInputWrapper>
                </InputBlock>
                <Button type='button'>
                    Search
                </Button>
            </InputsBlock>
        </FilterSectionContainer>
    );
};

export default Filter