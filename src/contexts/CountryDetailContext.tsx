import React from 'react';
import { Country } from 'client/RestCountries';


interface CountryDetailContextProps {
    selectedCountry: Country | undefined;
    selectCountry(country: Country | undefined): void;
}

const CountryDetailContext = React.createContext<CountryDetailContextProps>({ selectedCountry: undefined, selectCountry: () => void 0 });

export const CountryDetailProvider: React.FC = ({children}) => { 
    const [country, setCountry] = React.useState<Country | undefined>(undefined);

    return (
        <CountryDetailContext.Provider value={{ selectedCountry: country, selectCountry: setCountry}}>
            {children}
        </CountryDetailContext.Provider>
    )
}


export function useCountryDetail(): CountryDetailContextProps {
    const context = React.useContext<CountryDetailContextProps>(CountryDetailContext);
    return context;
}