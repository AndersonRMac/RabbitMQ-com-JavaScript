//classe viagem

module.exports = class Viagens{
    constructor(VEI_ID, EQP_SRN){
        this._VEI_ID = VEI_ID;
        this._EQP_SRN = EQP_SRN;

    } 
}

var viagens = new Viagens(111, 222);
console.log(viagens._EQP_SRN);

