import { Country } from "../country/CountryRes";


export interface State  {
    id: string;
    name: string;
    countryID: string | null;
    country: Country;
}