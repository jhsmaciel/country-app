import React from 'react';
import styled from 'styled-components';
import { Country } from "client/RestCountries";
import { StyleProps } from 'config/styles';
import { useCountryDetail } from 'contexts/CountryDetailContext';
import { useTheme } from 'contexts/ThemeContext';
import { LabelValue } from 'components/LabelValue';


interface CardProps {
    country: Country
}

export const Card: React.FC<CardProps> = ({ country }) => {
    const { style } = useTheme();
    const { selectCountry } = useCountryDetail();

    return (
        <CardBox 
            styleContext={style}
            onClick={() => selectCountry(country)}
        >
            <Img src={country.flags.svg} alt={`Flag of ${country.name.official}`} />
            <Infos>
                <Title styleContext={style}>{country.name.common}</Title>
                <LabelValue label='Population' value={country.population?.toLocaleString()} />
                <LabelValue label='Region' value={country.region} />
                <LabelValue label='Capital' value={country.capital?.join(", ")} />
            </Infos>
        </CardBox>
    );
}

const CardBox = styled.div<StyleProps>`
    background: ${props => props.styleContext.elements};
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 1px 2px 5px 1px rgba(0,0,0,0.1);
`

const Img = styled.img`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
`

const Infos = styled.div`
    padding: 15px 20px;
`

const Title = styled.h2<StyleProps>`
    size: 14px;
    color: ${props => props.styleContext.text};
    font-weight: 900;
`