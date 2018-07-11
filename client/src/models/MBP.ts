export class MBP{
baseSalary:string;
bonus:string;
commission:string;
allowance:string;
overtimeEssential:string;
overtimeNonEssential:string;
rental:string;
otherTaxable:string;
nonTaxable:string;
businessIncomeLastYear:string;
businessIncomeYearBefore:string;
expenses: expenses;
constructor (
    a1: string, a2: string, a3: string, a4: string,
    a5: string, a6: string, a7: string,
    a8: string, a9: string, a10: string, a11: string

){
    this.baseSalary= a1;
    this.bonus= a2;
    this.commission= a3;
    this.allowance= a4;
    this.overtimeEssential= a5;
    this.overtimeNonEssential= a6;
    this.rental= a7;
    this.otherTaxable= a8;
    this.nonTaxable= a9;
    this.businessIncomeLastYear= a10;
    this.businessIncomeYearBefore= a11;

}

}
export class expenses {

    creditCardRepayments:string;
    servicingRate:string;
    negativeGearingRate:string;
    existingLoanRepaymentMultiplier:string;
    na1:string;
    na2:string;
    magicNumber:string;
}