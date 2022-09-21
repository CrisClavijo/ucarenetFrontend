import { CountryClass } from "../../class/country";
import { NationClass } from "../../class/nation";
import { StateClass } from "../../class/state";
import { UserRoleClass } from "../../class/userRoleRes";

export default interface Root {
    User: IUserData
  }
  
  export interface IUserData {
    id: string;
    registrationDate: string | null;
    userName: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string | null;
    address: string;
    address2: string;
    city: string;
    countryID: string | null;
    country: CountryClass;
    stateID: string | null;
    state: StateClass;
    nationalityID: string | null;
    nationality: NationClass;
    postalCode: string;
    phone: string;
    contactDetails: string;
    gender: string;
    hasPicture: number | null;
    profileDescription: string;
    otherInterests: string;
    otherLanguage: string;
    activationLink: string;
    resetPasswordLink: string;
    active: boolean;
    facebookId: string;
    facebookName: string;
    tweeterId: string;
    tweeterName: string;
    googleId: string;
    googleName: string;
    userRoleID: string | null;
    userRole: UserRoleClass;
    hashPassword: string;
    percentComplete: number | null;
    vetted: boolean | null;
    activationDate: string | null;
    emailSent: number | null;
    points: number | null;
    referCode: string;
    referredBy: string;
    registerationChannel: string;
    recentLogin: string;
    lastLoginDate: string | null;
    profilePicture: string;
    lat: number | null;
    lon: number | null;
    emailSubscription: boolean | null;
    emailSubscriptionTypeInDays: string;
    emailSubscriptionEditDate: string | null;
  }
  