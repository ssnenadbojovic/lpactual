// import * as lendermethods from './LenderMethods';
export class Lender {
active: Boolean;
id: string;
information: Information;
applyOnlineDetails: ApplyOnlineDetails;
contactDetails:ContactDetails;
solicitorDetails:SolicitorDetails;

sddIndex: string
scAvailable: boolean; 

timestamp: Date

   // info
}
export class Information {
    logo: string;
    name: string;
    country: string;
    shorthand: string;
    livingExpenses: string;
    turnaround: string;
    digitalPlatform: boolean;
    phone: string;
    fax: string;
    email: string;
    url: string;
    notes: string;
    timeStamp: Date;

}
   // applyOnlineDetails: 
   //  aod
export class ApplyOnlineDetails{
brokerIdPrimaryTitle: string;
brokerIdPrimaryPattern: string;
brokerIdSecondaryRequired: boolean;
brokerIdSecondaryTitle: string;
brokerIdSecondaryPattern: string;
additionalInformationRequired: boolean;
additionalInformationTitle: string
}
// contactDetails: 
export class ContactDetails {
phones: string[];
faxes: string[];
emails: string[];
urls: string[];
notes: string;
timeStamp: Date
}
// daDetails: 
export class LenderDetails {
phone: string;
fax: string;
email: string;
url: string;
notes: string;
timeStamp: Date;
}
// daSolicitorDetails: 
export class SolicitorDetails {
name: string;
phone: string;
fax: string;
email: string;
url: string;
notes: string;
timeStamp:  Date;
}
// mbp: 
export class Mbp {
baseSalary: number;
bonus: number;
commission: number;
allowance: number;
overtimeEssential: number;
overtimeNonEssential: number;
rental: number;
otherTaxable: number;
nonTaxable: number;
businessIncomeLastYear: number;
businessIncomeYearBefore: number;
expenses: object[];
calculation: number;
}

// faux constructors
