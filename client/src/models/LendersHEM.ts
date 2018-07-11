export class LendersHem {
min:string;
max:string;
adult:string;
adultAdditional:string;
dependents1:string;
dependents2:string;
dependents3:string;
dependentsAdditional:string;
dependentsCouple1:string;
dependentsCouple2:string;
dependentsCouple3:string;
dependentsCoupleAdditional:string;
timeStamp:Date;
constructor (
a1: string, a2: string, a3: string,
a4: string, a5: string, a6: string,
a7: string, a8: string, a9: string,
a10: string, a11: string, a12: string) {
    this.min=a1;
    this.max=a2;
    this.adult=a3;
    this.adultAdditional=a4;
    this.dependents1=a5;
    this.dependents2=a6;
    this.dependents3=a7;
    this.dependentsAdditional=a8;
    this.dependentsCouple1=a9;
    this.dependentsCouple2=a10;
    this.dependentsCouple3=a11;
    this.dependentsCoupleAdditional=a12;

}
}