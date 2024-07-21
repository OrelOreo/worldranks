type TCapitalInfo = {
    latlng: number[]
}

type TCar = {
    side: string
    signs: string[]
}

type TCoatOfArms = {
    png: string
    svg: string
}

type TXCD = {
    name: string
    symbol: string

}

type TCurrencies = {
    XCD: TXCD
}

type TDemonyms = {
    eng: {
        f: string;
        m: string;
    };
    fra: {
        f: string;
        m: string;
    };
};

type TIdd = {
    root: string
    suffixes: string[]
}

type TLanguage = {
    [key: string]: string
}

type TLanguages = {
    [key: string]: TLanguage
}

type TMap = {
    googleMaps: string
    openStreetMaps: string
}

type TName = {
    common: string
    nativeName: {
        eng: { official: string; common: string }
    }
    official: string
}

type TTranslation = {
    official: string
    common: string
}

type TTranslations = {
    [key: string]: TTranslation
}

type TCountry = {
    altSpellings: string[]
    area: number
    capital: string[]
    capitalInfo: TCapitalInfo
    car: TCar
    cca2: string
    cca3: string
    ccn3: string
    coatOfArms: TCoatOfArms
    continents: string[]
    currencies: TCurrencies
    demonyms: TDemonyms
    fifa: string
    flag: string
    flags: { [format: string]: string }
    idd: TIdd
    independent: boolean
    landlocked: boolean
    languages: TLanguages
    latlng: number[]
    maps: TMap
    name: TName
    population: number
    postalCode?: { [format: string]: string }
    region: string
    startOfWeek: string
    status: string
    subregion: string
    timezones: string[]
    tld: string[]
    translations: TTranslations
    unMember: boolean
}

export default TCountry