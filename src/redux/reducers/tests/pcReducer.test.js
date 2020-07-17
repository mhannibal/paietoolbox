import pcReducer from '../pcReducer'

const a =  [
    {
        id:1,
        code:'PC001',
        libelle:"indimnite d'expreience Proffesionel",
        acro:'IEP',
        base:18000,
        taux:0.09,
        valeur:0	
    },
    {
        id:2,
        code:'PC002',
        libelle:"indimnite d service permanant",
        acro:'ISP',
        base:18000,
        taux:0.09,	
        valeur:0
    },
    {
        id:3,
        code:'PC003',
        libelle:"indimnite de nuissance",
        acro:'IN',
        base:18000,
        taux:0.09,	
        valeur:0
    },
    {
        id:4,
        code:'PC004',
        libelle:"Prime de rendement individuel",
        acro:'PRI',
        base:18000,
        taux:0.09,	
        valeur:0
    },
    {
        id:5,
        code:'PC005',
        libelle:"Prime de rendement collectif",
        acro:'PRC',
        base:18000,
        taux:0.09,	
        valeur:0
    }                	
]


const b =  [
    {
        id:1,
        code:'PC001',
        libelle:"indimnite d'expreience Proffesionel",
        acro:'IEP',
        base:18000,
        taux:0.09,
        valeur:0	
    },
    {
        id:2,
        code:'PC002',
        libelle:"indimnite d service permanant",
        acro:'ISP',
        base:18000,
        taux:0.09,	
        valeur:0
    },
    {
        id:3,
        code:'PC003',
        libelle:"indimnite de nuissance",
        acro:'IN',
        base:26999,
        taux:0.09,	
        valeur:0
    },
    {
        id:4,
        code:'PC004',
        libelle:"Prime de rendement individuel",
        acro:'PRI',
        base:18000,
        taux:0.09,	
        valeur:0
    },
    {
        id:5,
        code:'PC005',
        libelle:"Prime de rendement collectif",
        acro:'PRC',
        base:18000,
        taux:0.09,	
        valeur:0
    }                	
]

const action = {type:"SET_PC_FIELD", code:'PC003', fieldName:'base',value:26999}
console.log("a ==",a)
console.log("b ==",b)
console.log("c == ",pcReducer(a,action))
test('Irg of 30000 to equal 0', () => {     
    expect(pcReducer(a,action)).toEqual(b);
});
