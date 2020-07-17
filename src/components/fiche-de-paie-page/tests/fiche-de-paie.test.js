 import { calcSumPC } from '../fiche-de-paie'

 const primesCotisable = [
    {
        id:1,
        code:'PC001',
        libelle:"indimnite d'expreience Proffesionel",
        acro:'IEP',
        active :true,
        base:18000,
        taux:0.09,
        valeur:0	
    },
    {
        id:2,
        code:'PC002',
        libelle:"indimnite d service permanant",
        acro:'ISP',
        active :true,
        base:18000,
        taux:0.09,	
        valeur:985
    },
    {
        id:3,
        code:'PC003',
        libelle:"indimnite de nuissance",
        acro:'IN',
        active :true,
        base:18000,
        taux:0.09,	
        valeur:0
    },
    {
        id:4,
        code:'PC004',
        libelle:"Prime de rendement individuel",
        acro:'PRI',
        active :true,
        base:18000,
        taux:0.09,	
        valeur:254
    },
    {
        id:5,
        code:'PC005',
        libelle:"Prime de rendement collectif",
        acro:'PRC',
        active :true,
        base:18000,
        taux:0.09,	
        valeur:2500
    }                	
]

test('calcSumPc of [{...,value:2500},{...,value:254},{...,value:985}] to equal 3739 ', () => {
    expect(calcSumPC(primesCotisable)).toBe(3739);
});
