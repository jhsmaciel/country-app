import React, { useEffect, useState } from 'react';
import { Country, getAllCountries } from 'client/RestCountries';
import { DetailCountry } from 'components/DetailCountry';
import { ListCountry } from 'components/ListCountry';
import { useCountryDetail } from 'contexts/CountryDetailContext';


export const Home: React.FC = () => {

    const [countries, setCountries] = useState<Country[]>([]);

    const { selectedCountry } = useCountryDetail();

    useEffect(() => {
        getAllCountries()
        .then(setCountries);
    }, [])
    
    return selectedCountry ? <DetailCountry countries={countries} /> : <ListCountry countries={countries} />;
}


