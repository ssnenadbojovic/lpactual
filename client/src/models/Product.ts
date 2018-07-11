export class Product {
id:string;
idLender:string;
// integrations:

iELodgeId:string;
iNextGenId:string;
iSimpologyId:string;

// information:

infoName:string;
infoImpaired:string;
infoWhiteLabel:false;
infoProPack:boolean;
infoProPackDiscount:string;
infoUpfrontFee:number;
infoInitialRate:number;
infoRevertRate:number;
infoComparisonRate:number;
// details:
dPropertyUse:string;
dLineOfCredit:string;
dLoanType:string;
dConstruction:string;
dRepaymentType:string;
dInterestOnlyMaxPeriod:string;
dLmiCapitalization:string;
dLmiRequiredOver:string;
dSmsf:string;
dRateType:string;
dFixedTerm:number;
dMinLvr:string;
dMaxLvr:string;
dMinLoan:number;
dMaxLoan:number;
dMaxTerm:string;
dRedrawFacility:string;
dAdditionalRepayments:string;
dOffset:string;
dAbilityToSplitLoan:string;

// Fees:

fApplication:number;
fValuation:number;
fLegal:number;
fSettlement:number;
fPackageMonthly:number;
fPackageAnnual:number;
fRateLock:number;
fOther:number;
fNotes:string;

// rewards:

rHasRewards:false;
rDescription:string;
rPoints:number;
rTimeStamp:Date;
}
export type IState= Product [];