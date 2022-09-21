import { isClassDeclaration } from "typescript";
import { CareseekerClass } from "../careseeker/careseeker";
import { CountryClass } from "../country";
import { MobilityClass } from "../mobility";


export class SeniorClass  {
    id: string;
    careSeekerID: string;
    careSeeker: CareseekerClass;
    name: string;
    age: string;
    sex: string;
    mobilityID: string;
    mobility: MobilityClass;
    houseNumber: string;
    unitNumber: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;
    countryID: string;
    country: CountryClass;
    shareLocation: boolean;
    colourScheme: number;
}