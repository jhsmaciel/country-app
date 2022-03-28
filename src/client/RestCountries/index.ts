import { URL_REST_COUNTRIES } from 'config'

const getAllCountries: () => Promise<Country[]>  = async () => {
    const response = await fetch(URL_REST_COUNTRIES + '/all');
    return response.json();
}

export interface Country {
    name: {
        common: string,
        official: string,
        nativeName: Record<string, {
            official: string,
            common: string
        }>
    },
    tld: string[],
    cca2: string,
    ccn3: string,
    cca3: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: Record<string, {
        name: string,
        symbol: string
    }>,
    idd: {
        root: string,
        suffixes: string[]
    },
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: Record<string, string>,
    translations: Record<string, {
        official: string,
        common: string
    }>,
    latlng: number[],
    landlocked: boolean,
    area: number,
    demonyms: Record<string, {
        f: string,
        m: string
    }>,
    flag: string,
    maps: {
        googleMaps: string,
        openStreetMaps: string
    },
    population: number,
    car: {
        signs: string[],
        side: string
    },
    timezones: string[],
    continents: string[],
    flags: Record<"png" | "svg", string>
    coatOfArms: Record<"png" | "svg", string>,
    startOfWeek: string,
    capitalInfo: {
        latlng: number[]
    },
    borders: string[]
}

export {
    getAllCountries,
}