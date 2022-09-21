export  default interface caregiverResultsList 

{
    id: string;
registrationDate: Date;
firstName: string;
lastName: string;
city: string;
postalCode: string;
gender: string;
hasPicture: number;
profileDescription?: any;
active: boolean;
userRoleID: string;
userRole?: any;
registerationChannel: string;
recentLogin: string;
lastLoginDate: Date;
profilePicture: string;
cgId: string;
availabilityType?: any;
availabilityLocation?: any;
availabilityDistance: number;
driversLicense?: any;
availableTransportation?: any;
vettingStatus?: any;
vettingAuthorization?: any;
desiredWage: number;
yearsOfExperience: number;
expFromDate?: any;
expToDate?: any;
description: string;
ratePunct: number;
rateDepen: number;
rateTrans: number;
rateHirea: number;
rateItems: number;
otherSkill?: any;
otherInterest?: any;
ranking: number;
profileTitle: string;
}