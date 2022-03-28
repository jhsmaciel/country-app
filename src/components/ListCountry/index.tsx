import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Country } from 'client/RestCountries';
import { Card } from 'components/Card';
import { SearchInput } from 'components/Input';
import { SelectOption } from 'components/Select';
import { REGIONS } from 'constants/constants';
import { LoadingIndicator } from 'components/LoadingIndicator';

interface ListCountryProps {
    countries: Country[];
    loading: boolean;
}

export const ListCountry: React.FC<ListCountryProps> = ({ countries, loading }) => {

    const [searchText, setSearchText] = useState<string | undefined>(undefined);
    const [region, setRegion] = useState<string | undefined>(undefined);

    const isSameRegion = useCallback((item: Country, region: string) => {
        return item.region?.toLowerCase() === region;
    }, []);

    const containsInfo = useCallback((item: Country, searchText: string) => {
        return JSON.stringify(item)?.toLowerCase().includes(searchText.toLowerCase())
    }, []);

    const filterByRegionAndText = useCallback((item: Country) => {
        if (!searchText && !region) {
            return true;
        }
        if (searchText && region) {
            return isSameRegion(item, region) && containsInfo(item, searchText);
        }
        if (region) {
            return isSameRegion(item, region);
        }
        if (searchText) {
            return containsInfo(item, searchText);
        }
        
        return false;
    }, [searchText, region, containsInfo, isSameRegion])

    return (
        <Content>
            <Filters>
                <SearchInput 
                    placeholder='Search for a country'
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <SelectOption 
                    initial={{ label: "Filter by Region"}}
                    values={REGIONS}
                    onChange={(e) => setRegion(e) }
                    value={region}
                />
            </Filters>
            {
                loading ? <LoadingIndicator /> : 
                (

                    <List>
                        {
                            countries
                                .filter(item => filterByRegionAndText(item))
                                .map(country => <Card key={country.name.common + country.ccn3} country={country} />)
                        }
                    </List>
                )
            }
        </Content>
    );
}

const Filters = styled.div`
    display: grid;
    margin-top: 20px;
    width: 100%;
    grid-template-columns: auto;
    row-gap: 30px;
    column-gap: 0px;

    @media (min-width: 767.98px) {
        grid-template-columns: 1fr auto;
        column-gap: 180px;
    }
`;

const List = styled.div`
    display: grid;
    margin-top: 50px;

    grid-template-columns: auto;

    @media (min-width: 767.98px) {
        grid-template-columns: auto auto;
    }

    @media (min-width: 1050px) {
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 1366px) { 
        grid-template-columns: auto auto auto auto;
    }
    row-gap: 60px;
    column-gap: 60px;
`

const Content = styled.div``