import salairesReducer from '../salaires-reducer'

const a = {    
    salaireDeBase  : {
        id:1,
        code:'S001',
        libelle:"Salaire De Base",
        acro:'SB',
        active :true,
        readonly :false,            
        valeur:0	
    },
    salaireDePoste : {
        id:2,
        code:'S002',
        libelle:"salaire De Poste",
        acro:'SP',
        active :true,            
        readonly :true,            
        valeur:0	
    },
    salaireImposable  : {
        id:3,
        code:'S003',
        libelle:"Salaire Imposable",
        acro:'SI',
        active :true,
        readonly :true,            
        valeur:0	
    },
    salaireNet:   {
        id:4,
        code:'S004',
        libelle:"Salaire Net",
        acro:'SN',
        active :true,
        readonly : true,            
        valeur:0	
    },
}

const b = {    
    salaireDeBase  : {
        id:1,
        code:'S001',
        libelle:"Salaire De Base",
        acro:'SB',
        active :true,
        readonly :false,            
        valeur:0	
    },
    salaireDePoste : {
        id:2,
        code:'S002',
        libelle:"salaire De Poste",
        acro:'SP',
        active :true,            
        readonly :true,            
        valeur:0	
    },
    salaireImposable  : {
        id:3,
        code:'S003',
        libelle:"Salaire Imposable",
        acro:'SI',
        active :true,
        readonly :true,            
        valeur:58000	
    },
    salaireNet:   {
        id:4,
        code:'S004',
        libelle:"Salaire Net",
        acro:'SN',
        active :true,
        readonly : true,            
        valeur:0	
    },
}
const action = {type:"SET_SALAIRES_FIELD", code:'S003', fieldName:'valeur',value:58000}

console.log("c== ", salairesReducer(a,action))
test('modif saialers', () => {     
    expect(salairesReducer(a,action)).toEqual(b);
});