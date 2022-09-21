import { CountryClass } from "./country";



export class StateClass {
   id: string;
   name: string;
   countryID: string | null;
   country: CountryClass;
}