export  default   {
    entete : {
        employerInfo : 'qsdqsdsqd',  
        periode: {
            month:4,
            year:'2020'
        },  
        matricule :'',
        ssNumber : '',
        fullName:'',
        embaucheDate :'',
        situationFamilliale:'',
        handicap : false,    
    },
    sommeGain:0,
    sommeRetenue:0,    
    netApayer:0,
    primesCotisable : [
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
            active :false,
            base:18000,
            taux:0.09,	
            valeur:0
        },
        {
            id:3,
            code:'PC003',
            libelle:"indimnite de nuissance",
            acro:'IN',
            active :false,
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
            valeur:0
        },
        {
            id:5,
            code:'PC005',
            libelle:"Prime de rendement collectif",
            acro:'PRC',
            active :true,
            base:18000,
            taux:0.09,	
            valeur:0
        }                	
    ],

    salaires : {    
        salaireDeBase  : {
            id:1,
            code:'S001',
            libelle:"salaire De Base",
            acro:'SB',
            active :true,
            readonly :false,            
            valeur:18000	
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
    },

    retenus : [ 
        {
            id:1,
            code:'R001',
            libelle:"retenue Securite Social",
            acro:'SS',
            active :true,
            readonly :true,            

            base:18000,
            taux:0.09,
            valeur:0        	
        },
        {
            id:2,
            code:'R002',
            libelle:"retenue CACOBATPH",
            acro:'CACOBATPH',
            active :false,
            readonly :true,            

            base:18000,
            taux:0.09,
            valeur:0       	
        },
         
        {
            id:3,
            code:'IRG',
            libelle:"IRG",
            acro:'IRG',
            active :true,
            readonly :true,            
            base:18000,
            taux:1,
            valeur:0       	
        },
    
    ], 

    
    primesImposable : [
        {
            id:1,
            code:'II001',
            libelle:"indimnite de panier",
            acro:'PANIER',
            active :true,
            base:200,
            taux:22,
            valeur:0	
        },
        {
            id:2,
            code:'II002',
            libelle:"indimnite de transport",
            acro:'TRANSPORT',
            active :true,
            base:200,
            taux:22,
            valeur:0	
        }
    ],
    primesNonImposable :[
        {
            id:1,
            code:'IN001',
            libelle:"Frais de deplacement",
            acro:'MISSION',
            active :true,
            base:18000,
            taux:0.09,
            valeur:0	
        },
        {
            id:2,
            code:'IN002',
            libelle:"Salaire unique",
            acro:'SU',
            active :true,

            base:18000,
            taux:0.09,	
            valeur:0
        },
        {
            id:3,
            code:'IN003',
            libelle:"Frais de Zone geographique",
            acro:'ZONEGEO',
            active :true,

            base:18000,
            taux:0.09,
            valeur:0	
        }

    ]


    
  }     
  
 
  
  
  
  
  