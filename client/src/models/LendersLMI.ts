export class LendersLMI {
    id: string ;
    lower: string ;
    upper:  string;
    fhog:  string;
    propertyType:  string;
    minimumLmi:  string;
    investementIndex:  string;
    lmirequiredOver:  string;
    d60:  string;
    d61:  string;
    d62:  string;
    d63:  string;
    d64:  string;
    d65:  string;
    d66:  string;
    d67:  string;
    d68:  string;
    d69:  string;
    d70:  string;
    d71:  string;
    d72:  string;
    d73:  string;
    d74:  string;
    d75:  string;
    d76:  string;
    d77:  string;
    d78:  string;
    d79:  string;
    d80:  string;
    d81:  string;
    d82:  string;
    d83:  string;
    d84:  string;
    d85:  string;
    d86:  string;
    d87:  string;
    d88:  string;
    d89:  string;
    d90:  string;
    d91:  string;
    d92:  string;
    d93:  string;
    d94:  string;
    d95:  string;
timeStamp:  Date;

constructor ( 
    lowerC: string, upperC:  string, fhogC:  string, propertyTypeC: string , minimumLmiC:  string, 
    investementIndexC:  string, lmirequiredOverC:  string, d60C:  string, d61C:  string, d62C:  string, d63C:  string, d64C:  string,
    d65C:  string, d66C:  string, d67C:  string, d68C:  string, d69C:  string, d70C:  string, d71C:  string, d72C:  string, d73C:  string, d74C:  string,
    d75C:  string, d76C:  string, d77C:  string, d78C:  string, d79C:  string, d80C:  string, d81C:  string, d82C:  string, d83C:  string,
    d84C:  string, d85C:  string, d86C:  string, d87C:  string, d88C:  string, d89C:  string, d90C:  string, d91C:  string, d92C:  string, d93C:  string, d94C:  string, d95C:  string,
) {
    this.lower = lowerC;
this.upper = upperC;
this.fhog = fhogC;
this.propertyType = propertyTypeC;
this.minimumLmi = minimumLmiC;
this.investementIndex = investementIndexC;
this.lmirequiredOver = lmirequiredOverC;
this.d60 = d60C;
this.d61 = d61C;
this.d62 = d62C;
this.d63 = d63C;
this.d64 = d64C;
this.d65 = d65C;
this.d66 = d66C;
this.d67 = d67C;
this.d68 = d68C;
this.d69 = d69C;
this.d70 = d70C;
this.d71 = d71C;
this.d72 = d72C;
this.d73 = d73C;
this.d74 = d74C;
this.d75 = d75C;
this.d76 = d76C;
this.d77 = d77C;
this.d78 = d78C;
this.d79 = d79C;
this.d80 = d80C;
this.d81 = d81C;
this.d82 = d82C;
this.d83 = d83C;
this.d84 = d84C;
this.d85 = d85C;
this.d86 = d86C;
this.d87 = d87C;
this.d88 = d88C;
this.d89 = d89C;
this.d90 = d90C;
this.d91 = d91C;
this.d92 = d92C;
this.d93 = d93C;
this.d94 = d94C;
this.d95 = d95C;    
}

}
/*
/*
constructor ();
constructor ( lmi: FLendersLMI );
constructor ( lmi?: any ) {
    this.lower = lmi.lower;
this.upper = lmi.upper;
this.fhog = lmi.fhog;
this.propertyType = lmi.propertyType;
this.minimumLmi = lmi.minimumLmi;
this.investementIndex = lmi.investementIndex;
this.lmirequiredOver = lmi.lmirequiredOver;
this.d60 = lmi.d60;
this.d61 = lmi.d61;
this.d62 = lmi.d62;
this.d63 = lmi.d63;
this.d64 = lmi.d64;
this.d65 = lmi.d65;
this.d66 = lmi.d66;
this.d67 = lmi.d67;
this.d68 = lmi.d68;
this.d69 = lmi.d69;
this.d70 = lmi.d70;
this.d71 = lmi.d71;
this.d72 = lmi.d72;
this.d73 = lmi.d73;
this.d74 = lmi.d74;
this.d75 = lmi.d75;
this.d76 = lmi.d76;
this.d77 = lmi.d77;
this.d78 = lmi.d78;
this.d79 = lmi.d79;
this.d80 = lmi.d80;
this.d81 = lmi.d81;
this.d82 = lmi.d82;
this.d83 = lmi.d83;
this.d84 = lmi.d84;
this.d85 = lmi.d85;
this.d86 = lmi.d86;
this.d87 = lmi.d87;
this.d88 = lmi.d88;
this.d89 = lmi.d89;
this.d90 = lmi.d90;
this.d91 = lmi.d91;
this.d92 = lmi.d92;
this.d93 = lmi.d93;
this.d94 = lmi.d94;
this.d95 = lmi.d95;    
}

interface FLendersLMI {
        lower:  string;
        upper:  string;
        fhog:  string;
        propertyType:  string;
        minimumLmi:  string;
        investementIndex:  string;
        lmirequiredOver:  string;
        d60:  string;
        d61:  string;
        d62:  string;
        d63:  string;
        d64:  string;
        d65:  string;
        d66:  string;
        d67:  string;
        d68:  string;
        d69:  string;
        d70:  string;
        d71:  string;
        d72:  string;
        d73:  string;
        d74:  string;
        d75:  string;
        d76:  string;
        d77:  string;
        d78:  string;
        d79:  string;
        d80:  string;
        d81:  string;
        d82:  string;
        d83:  string;
        d84:  string;
        d85:  string;
        d86:  string;
        d87:  string;
        d88:  string;
        d89:  string;
        d90:  string;
        d91:  string;
        d92:  string;
        d93:  string;
        d94:  string;
        d95:  string;
    timeStamp:  Date;

}
*/