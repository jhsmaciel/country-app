import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import styled from 'styled-components';
import { StyleProps } from 'config/styles';
import { useCountryDetail } from 'contexts/CountryDetailContext';
import { useTheme } from 'contexts/ThemeContext';
import { Button } from 'components/Button';
import { Label, LabelValue } from 'components/LabelValue';
import { useEffect } from 'react';
import { Country } from 'client/RestCountries';
import { useCallback } from 'react';

interface DetailCountryProps {
    countries: Country[]
}

export const DetailCountry: React.FC<DetailCountryProps> = ({ countries }) => {
    const { selectedCountry, selectCountry } = useCountryDetail();
    const {style} = useTheme();
    useEffect(() => console.log(selectedCountry), [selectedCountry])

    const getLanguages = useCallback(() => {
        return Object
            .entries(selectedCountry?.languages || {})
            .map(([,value]) => value)
            .sort()
            .join(", ") 
    }, [selectedCountry])

    const getCurrencies = useCallback(() => {
        return Object
            .entries(selectedCountry?.currencies || {})
            .map(([,value]) => value.name)
            .join(", ")
    }, [selectedCountry])

    const getNativeName = useCallback(() => {
        const commonsNativeName = Object
            .entries(selectedCountry?.name.nativeName || {})
            .map(([,value]) => value.common)
        return commonsNativeName[commonsNativeName.length-1];
    }, [selectedCountry])


    const onOpen = useCallback((cca3: string) => {
        const country = countries.find(country => country.cca3 === cca3)
        if (country) {
            selectCountry(country)
        }
    }, [countries, selectCountry])

    const getNameByCca3 = useCallback((cca3: string) => {
        const country = countries.find(country => country.cca3 === cca3)
        return country?.name.common;
    }, [countries])

    return (
        <div style={{marginTop: 20}}>
            <Button onClick={() => selectCountry(undefined)} width={120}>
                <IoIosArrowRoundBack color={style.text} size={16}/> <div style={{ width: 10}} />Back
            </Button>
            <Detail>
                <ImageBox>
                    <img src={selectedCountry?.flags.svg} alt={`Flag of ${selectedCountry?.name.official}`} style={{ width: '100%'}}/>
                </ImageBox>
                <Informations>
                    <Title styleContext={style}>{selectedCountry?.name.common}</Title>
                    <BoxLabelValue>
                        <ColumnBoxLabelValue>
                            <LabelValue label='Native name' value={getNativeName()} />
                            <LabelValue label='Population' value={selectedCountry?.population.toLocaleString() || ""} />
                            <LabelValue label='Region' value={selectedCountry?.region || ""} />
                            <LabelValue label='Sub Region' value={selectedCountry?.subregion || ""} />
                            <LabelValue label='Capital' value={selectedCountry?.capital.toString() || ""} />
                        </ColumnBoxLabelValue>
                        <Padder sizePad={110}/>
                        <ColumnBoxLabelValue>
                            <LabelValue label='Top Level Domain' value={selectedCountry?.tld.join(", ") || ""} />
                            <LabelValue label='Currencies' value={getCurrencies()} />
                            <LabelValue label='Languages' value={getLanguages()} />
                        </ColumnBoxLabelValue>
                    </BoxLabelValue>
                    <BoxBorderCountries>
                        <Label styleContext={style} style={{ marginRight: 10, marginBottom: 7 }}>Border Countries: </Label>
                        <BoxButtons>
                            {
                                selectedCountry?.borders
                                    .map(it => <Button onClick={() => onOpen(it)} style={{marginRight: 7, marginBottom: 7}}>{getNameByCca3(it)}</Button>)
                            }
                        </BoxButtons>
                    </BoxBorderCountries>
                </Informations>
            </Detail>
        </div>
    );
}

const Detail = styled.div`
    display: flex;
    margin-top: 50px;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;

    @media (min-width: 767.98px) {
        flex-direction: row;
    }
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const BoxLabelValue = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 767.98px) {
        flex-direction: row;
    }
`
const ColumnBoxLabelValue = styled.div``

const BoxBorderCountries = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: flex-start;

    flex-direction: column; 
    @media (min-width: 767.98px) {
        flex-direction: row;
        align-items: center;
    }
`
const BoxButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Padder = styled.div<{ sizePad: number }>`
    width: 0px;
    margin-bottom: 16px;
    @media (min-width: 767.98px) {
        margin-bottom: 0px;
        width: ${prop => prop.sizePad}px;
    }
`

const ImageBox = styled.div`
    width: 100%;
    margin-right: 0px;
    @media (min-width: 767.98px) {
        margin-right: 80px;
        width: 50%;
    }
`

const Title = styled.h2<StyleProps>`
    color: ${props => props.styleContext.text};
    font-weight: 900;
    margin-bottom: 20px;
`