import React, { useEffect, useState } from 'react';
import { Country, getAllCountries } from 'client/RestCountries';
import { DetailCountry } from 'components/DetailCountry';
import { ListCountry } from 'components/ListCountry';
import { useCountryDetail } from 'contexts/CountryDetailContext';
import { Fetch } from 'client';

export const Home: React.FC = () => {

    const [countries, setCountries] = useState<Fetch<Country[]>>({ loading: false, payload: [] });

    const { selectedCountry } = useCountryDetail();

    useEffect(() => {
        async function getCountries() {
            setCountries({ loading: true, payload: []})
            try {
                const countries = await getAllCountries();
                setCountries({
                    loading: false,
                    payload: countries,
                })
            } catch (e) {
                setCountries({
                    loading: false,
                    error: e as Error,
                    payload: [] 
                })
            } 
        }

        getCountries();
    }, [])
    
    if (selectedCountry) {
        return <DetailCountry countries={countries.payload} />
    }

    return <ListCountry countries={countries.payload} loading={countries.loading}/>;
}


