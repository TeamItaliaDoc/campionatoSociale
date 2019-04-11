//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
var giorni = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var elimiati = ['fungiat'];
var posizione = {"N": 0, "pari" : 0,"oldPunti" : -1, "oldVinte" : 0}
var fineTorneo = new Date("2019-07-01"); 
//var fineTorneo = new Date("2018-11-14"); 

CAMPIONATO = {
    gironi: {},
    giocatori: [],
    scriviTabelleRun: false,
    calcolaClassificaRun: false,
    getEloUsername: '',
    isAdmin : false,

    inizializzaGironi: function()
    {
        //Valorori avviato. 0: valore iniziale, girone avviato - 1: girone non iniziato da controllare players - 2: girone non iniziato players caricati 
        stgironi = '{"girone": [';
       stgironi += '{"index": "1", "nome": "csp-inverno-2018-2019-girone-1", "descrizione" : "1", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true, "risultati" : "{}"}';
        stgironi += ',{"index": "2", "nome": "csp-inverno-2018-2019-girone-2", "descrizione" : "2", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "3", "nome": "csp-inverno-2018-2019-girone-3", "descrizione" : "3",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "4", "nome": "csp-inverno-2018-2019-girone-4", "descrizione" : "4",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "5", "nome": "csp-inverno-2018-2019-girone-5", "descrizione" : "5",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "6", "nome": "csp-inverno-2018-2019-girone-6", "descrizione" : "6",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "7", "nome": "csp-inverno-2018-2019-girone-7", "descrizione" : "7",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "8", "nome": "csp-inverno-2018-2019-girone-8", "descrizione" : "8",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "9", "nome": "csp-inverno-2018-2019-girone-9", "descrizione" : "9",  "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "10", "nome": "csp-inverno-2018-2019-girone-10", "descrizione" : "10", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "11", "nome": "csp-inverno-2018-2019-girone-11", "descrizione" : "11", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "12", "nome": "csp-inverno-2018-2019-girone-12", "descrizione" : "12", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "13", "nome": "csp-inverno-2018-2019-girone-13", "descrizione" : "13", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "14", "nome": "csp-inverno-2018-2019-girone-14", "descrizione" : "14", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "15", "nome": "csp-inverno-2018-2019-girone-15", "descrizione" : "15", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "16", "nome": "csp-inverno-2018-2019-girone-16", "descrizione" : "16", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "17", "nome": "csp-inverno-2018-2019-girone-17", "descrizione" : "17", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "18", "nome": "csp-inverno-2018-2019-girone-18", "descrizione" : "18", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "19", "nome": "csp-inverno-2018-2019-girone-19", "descrizione" : "19","partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "20", "nome": "csp-inverno-2018-2019-girone-20", "descrizione" : "20", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "21", "nome": "csp-inverno-2018-2019-girone-21", "descrizione" : "21", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "22", "nome": "csp-inverno-2018-2019-girone-22", "descrizione" : "22", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "23", "nome": "csp-inverno-2018-2019-girone-23", "descrizione" : "23", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "24", "nome": "csp-inverno-2018-2019-girone-24", "descrizione" : "24", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "25", "nome": "csp-inverno-2018-2019-girone-25", "descrizione" : "25", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "26", "nome": "csp-inverno-2018-2019-girone-26", "descrizione" : "26", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "27", "nome": "csp-inverno-2018-2019-girone-27", "descrizione" : "27", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "28", "nome": "csp-inverno-2018-2019-girone-28", "descrizione" : "28", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "29", "nome": "csp-inverno-2018-2019-girone-29", "descrizione" : "29", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "30", "nome": "csp-inverno-2018-2019-girone-30", "descrizione" : "30", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "31", "nome": "csp-inverno-2018-2019-girone-31", "descrizione" : "31", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "32", "nome": "csp-inverno-2018-2019-girone-32", "descrizione" : "32", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "33", "nome": "csp-inverno-2018-2019-girone-33", "descrizione" : "33", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "34", "nome": "csp-inverno-2018-2019-girone-34", "descrizione" : "34", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "35", "nome": "csp-inverno-2018-2019-girone-35", "descrizione" : "35", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "36", "nome": "csp-inverno-2018-2019-girone-36", "descrizione" : "36", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "37", "nome": "csp-inverno-2018-2019-girone-37", "descrizione" : "37", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "38", "nome": "csp-inverno-2018-2019-girone-38", "descrizione" : "38", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "39", "nome": "csp-inverno-2018-2019-girone-39", "descrizione" : "39", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "40", "nome": "csp-inverno-2018-2019-girone-40", "descrizione" : "40", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "41", "nome": "csp-inverno-2018-2019-girone-41", "descrizione" : "41", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "42", "nome": "csp-inverno-2018-2019-girone-42", "descrizione" : "42", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "43", "nome": "csp-inverno-2018-2019-girone-43", "descrizione" : "43", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "44", "nome": "csp-inverno-2018-2019-girone-44", "descrizione" : "44", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "45", "nome": "csp-inverno-2018-2019-girone-45", "descrizione" : "45", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "46", "nome": "csp-inverno-2018-2019-girone-46", "descrizione" : "46", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "47", "nome": "csp-inverno-2018-2019-girone-47", "descrizione" : "47", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "48", "nome": "csp-inverno-2018-2019-girone-48", "descrizione" : "48", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true, "risultati" : "{}"}';
        stgironi += ',{"index": "49", "nome": "csp-inverno-2018-2019-girone-49", "descrizione" : "49", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "50", "nome": "csp-inverno-2018-2019-girone-50", "descrizione" : "50", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
//Anche se non esiste lo devo lasciare altrimenti gli indici non corrispondono e i gironi non avviati risultano sbagliati.       
        stgironi += ',{"index": "51", "nome": "csp-inverno-2018-2019-girone-51", "descrizione" : "51", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "52", "nome": "csp-inverno-2018-2019-girone-52", "descrizione" : "52", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "53", "nome": "csp-inverno-2018-2019-girone-53", "descrizione" : "53", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "54", "nome": "csp-inverno-2018-2019-girone-54", "descrizione" : "54", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "55", "nome": "csp-inverno-2018-2019-girone-55", "descrizione" : "55", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "56", "nome": "csp-inverno-2018-2019-girone-56", "descrizione" : "56", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "57", "nome": "csp-inverno-2018-2019-girone-57", "descrizione" : "57", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "58", "nome": "csp-inverno-2018-2019-girone-58", "descrizione" : "58", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "59", "nome": "csp-inverno-2018-2019-girone-59-1", "descrizione" : "59", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "60", "nome": "csp-inverno-2018-2019-girone-60-1", "descrizione" : "60", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "61", "nome": "csp-inverno-2018-2019-girone-61", "descrizione" : "61", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "62", "nome": "csp-inverno-2018-2019-girone-62", "descrizione" : "62", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "63", "nome": "csp-inverno-2018-2019-girone-63-1", "descrizione" : "63", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "64", "nome": "csp-inverno-2018-2019-girone-64", "descrizione" : "64", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "65", "nome": "csp-inverno-2018-2019-girone-65", "descrizione" : "65", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "66", "nome": "csp-inverno-2018-2019-girone-66", "descrizione" : "66", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "67", "nome": "csp-inverno-2018-2019-girone-67", "descrizione" : "67", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "68", "nome": "csp-inverno-2018-2019-girone-68", "descrizione" : "68", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "69", "nome": "csp-inverno-2018-2019-girone-69", "descrizione" : "69", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "70", "nome": "csp-inverno-2018-2019-girone-70", "descrizione" : "70", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "71", "nome": "csp-inverno-2018-2019-girone-71", "descrizione" : "71", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "72", "nome": "csp-inverno-2018-2019-girone-72", "descrizione" : "72", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "73", "nome": "csp-inverno-2018-2019-girone-73", "descrizione" : "73", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "74", "nome": "csp-inverno-2018-2019-girone-74", "descrizione" : "74", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "75", "nome": "csp-inverno-2018-2019-girone-75", "descrizione" : "75", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "76", "nome": "csp-inverno-2018-2019-girone-76", "descrizione" : "76", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "77", "nome": "csp-inverno-2018-2019-girone-77", "descrizione" : "77", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
/*        stgironi += ',{"index": "78", "nome": "csp-inverno-2018-2019-girone-78", "descrizione" : "78", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "79", "nome": "csp-inverno-2018-2019-girone-79", "descrizione" : "79", "partiteTerminate" : 0, "partiteGirone" : 30, "avviato" : 0, "daCaricare" : true,  "risultati" : "{}"}';
*/        stgironi += ']}';

        CAMPIONATO.gironi = JSON.parse(stgironi);   

    //Aggiorno dati per gironi che non si caricano 
    CAMPIONATO.gironi.girone[14-1].dataInizio = new Date('2018-11-22');   
    CAMPIONATO.gironi.girone[14-1].dataFine = "";   
    CAMPIONATO.gironi.girone[14-1].partiteTerminate = 41;   
    CAMPIONATO.gironi.girone[14-1].partiteGirone = 42;   
    CAMPIONATO.gironi.girone[14-1].numGiocatori = 6;
    CAMPIONATO.gironi.girone[14-1].giocatori = ["fungiat","riccardocioli","il_king","silverblack","linchetto","paulbuhl","dag_stinner"]; 
    CAMPIONATO.gironi.girone[21-1].dataInizio = new Date('2018-12-10');   
    CAMPIONATO.gironi.girone[21-1].dataFine = "19/01/2019";   
    CAMPIONATO.gironi.girone[21-1].partiteTerminate = 20;   
    CAMPIONATO.gironi.girone[21-1].partiteGirone = 20;   
    CAMPIONATO.gironi.girone[21-1].numGiocatori = 5;
    CAMPIONATO.gironi.girone[21-1].giocatori = ["fungiat","dag_stinner","tulpicanistan","kmoreteam","thejoker2000"]; 
    CAMPIONATO.gironi.girone[34-1].dataInizio = new Date('2018-12-31');   
    CAMPIONATO.gironi.girone[34-1].dataFine = "";   
    CAMPIONATO.gironi.girone[34-1].partiteTerminate = 29;   
    CAMPIONATO.gironi.girone[34-1].partiteGirone = 30;   
    CAMPIONATO.gironi.girone[34-1].numGiocatori = 6;
    CAMPIONATO.gironi.girone[34-1].giocatori = ["fungiat","cavaliereyedi","themoonlightknight","big-fishy","giampiero111","alderekk"]; 
    //-- -2 perchè è stato cancellato il torneo 51
    CAMPIONATO.gironi.girone[57-2].dataInizio = new Date('2019-02-21');   
    CAMPIONATO.gironi.girone[57-2].dataFine = "";   
    CAMPIONATO.gironi.girone[57-2].partiteTerminate = 41;   
    CAMPIONATO.gironi.girone[57-2].partiteGirone = 42;   
    CAMPIONATO.gironi.girone[57-2].numGiocatori = 6;
    CAMPIONATO.gironi.girone[57-2].giocatori = ["fox7hem","dag_stinner","napoli67","big-fishy","alessandro08","dannyknockers","cavaliereyedi"]; 

//Girone 21

username = 'tulpicanistan';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"tulpicanistan","displayName":"Tulpicanistan", "id":"https://www.chess.com/member/tulpicanistan","avatar":"","elo":"", "punteggio":6.41, "vinte":4, "perse":4, "patte":0, "partiteTotali":8, "partiteTerminate":8,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'kmoreteam';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"kmoreteam","displayName":"kmoreteam", "id":"https://www.chess.com/member/kmoreteam","avatar":"","elo":"", "punteggio":2.76, "vinte":2, "perse":6, "patte":0, "partiteTotali":8, "partiteTerminate":8,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'thejoker2000';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"thejoker2000","displayName":"thejoker2000", "id":"https://www.chess.com/member/thejoker2000","avatar":"","elo":"", "punteggio":0.0, "vinte":0, "perse":6, "patte":0, "partiteTotali":8, "partiteTerminate":6,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);



//Girone 34
username = 'alderekk';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"alderekk","displayName":"Alderekk", "id":"https://www.chess.com/member/alderekk","avatar":"","elo":"", "punteggio":8.84, "vinte":9, "perse":0, "patte":0, "partiteTotali":10, "partiteTerminate":10,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);

username = 'themoonlightknight';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"themoonlightknight","displayName":"TheMoonlightKnight", "id":"https://www.chess.com/member/themoonlightknight","avatar":"","elo":"", "punteggio":3.0, "vinte":2, "perse":7, "patte":0, "partiteTotali":10, "partiteTerminate":9,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);

username = 'giampiero111';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"giampiero111","displayName":"Giampiero111", "id":"https://www.chess.com/member/giampiero111","avatar":"","elo":"", "punteggio":3.75, "vinte":2, "perse":7, "patte":1, "partiteTotali":10, "partiteTerminate":10,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);


//Girone 57
username = 'fox7hem';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"fox7hem","displayName":"fox7hem", "id":"https://www.chess.com/member/fox7hem","avatar":"","elo":"", "punteggio":10.65, "vinte":9, "perse":3, "patte":0, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);

username = 'napoli67';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"napoli67","displayName":"napoli67", "id":"https://www.chess.com/member/napoli67","avatar":"","elo":"", "punteggio":8.91, "vinte":5, "perse":4, "patte":2, "partiteTotali":12, "partiteTerminate":11,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'alessandro08';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"alessandro08","displayName":"Alessandro08", "id":"https://www.chess.com/member/alessandro08","avatar":"","elo":"", "punteggio":6.85, "vinte":6, "perse":6, "patte":0, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'dannyknockers';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"dannyknockers","displayName":"DannyKnockers", "id":"https://www.chess.com/member/dannyknockers","avatar":"","elo":"", "punteggio":4.31, "vinte":2, "perse":9, "patte":1, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'cavaliereyedi';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"cavaliereyedi","displayName":"cavaliereyedi", "id":"https://www.chess.com/member/cavaliereyedi","avatar":"","elo":"", "punteggio":2.0, "vinte":1, "perse":11, "patte":0, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'big-fishy';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"big-fishy","displayName":"Big-Fishy", "id":"https://www.chess.com/member/big-fishy","avatar":"","elo":"", "punteggio":3.75, "vinte":0, "perse":0, "patte":0, "partiteTotali":12, "partiteTerminate":0,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);


//Girone 14

username = 'riccardocioli';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"riccardocioli","displayName":"riccardocioli", "id":"https://www.chess.com/member/riccardocioli","avatar":"","elo":"", "punteggio":9.6, "vinte":9, "perse":2, "patte":1, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'il_king';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"il_king","displayName":"il_king", "id":"https://www.chess.com/member/il_king","avatar":"","elo":"", "punteggio":10.35, "vinte":9, "perse":3, "patte":0, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'silverblack';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"silverblack","displayName":"silverblack", "id":"https://www.chess.com/member/silverblack","avatar":"","elo":"", "punteggio":6.67, "vinte":5, "perse":5, "patte":1, "partiteTotali":12, "partiteTerminate":11,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'linchetto';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"linchetto","displayName":"linchetto", "id":"https://www.chess.com/member/linchetto","avatar":"","elo":"", "punteggio":5.47, "vinte":4, "perse":6, "patte":1, "partiteTotali":12, "partiteTerminate":11,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'paulbuhl';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"paulbuhl","displayName":"paulbuhl", "id":"https://www.chess.com/member/paulbuhl","avatar":"","elo":"", "punteggio":1.10, "vinte":1, "perse":11, "patte":0, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'a550';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"a550","displayName":"A550", "id":"https://www.chess.com/member/a550","avatar":"","elo":"", "punteggio":2.0, "vinte":1, "perse":11, "patte":0, "partiteTotali":12, "partiteTerminate":12,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);

//Più gironi
username = 'fungiat';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"fungiat","displayName":"Fungiat", "id":"https://www.chess.com/member/fungiat","avatar":"","elo":"", "punteggio":25.53, "vinte":25, "perse":3, "patte":1, "partiteTotali":30, "partiteTerminate":30,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'cavaliereyedi';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"cavaliereyedi","displayName":"cavaliereyedi", "id":"https://www.chess.com/member/cavaliereyedi","avatar":"","elo":"", "punteggio":9.28, "vinte":5, "perse":17, "patte":0, "partiteTotali":22, "partiteTerminate":22,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'big-fishy';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"big-fishy","displayName":"Big-Fishy", "id":"https://www.chess.com/member/big-fishy","avatar":"","elo":"", "punteggio":9.33, "vinte":3, "perse":5, "patte":1, "partiteTotali":22, "partiteTerminate":9,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);
username = 'dag_stinner';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"dag_stinner","displayName":"Dag_Stinner", "id":"https://www.chess.com/member/dag_stinner","avatar":"","elo":"", "punteggio":19.2, "vinte":17, "perse":2, "patte":1, "partiteTotali":20, "partiteTerminate":20,"gironi":"", "stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);

//Aggiorno eloDate
    for (var username in CAMPIONATO.giocatori) {
        CAMPIONATO.giocatori[username].eloDate = new Date("2019-01-01");
    }

//https://api.chess.com/pub/tournament/csp-inverno-2018-2019-girone-1/1/1
        //Carico i dati di tuti i gironi
        for (var i in CAMPIONATO.gironi.girone) {
            if (CAMPIONATO.gironi.girone[i].daCaricare) {
                CAMPIONATO.caricaDati('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/1/1');
            } else {
                //Non è da caricare, aggiungo il girone ai giocatori
                for (var iGiocatore in CAMPIONATO.gironi.girone[i].giocatori) {
                    var username = CAMPIONATO.gironi.girone[i].giocatori[iGiocatore];
                    CAMPIONATO.giocatori[username].gironi += '<a href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”>' + CAMPIONATO.gironi.girone[i].index + '</a> - ';
                }
            }
        }
    },
    caricaDati : function(url)
    {
        //Leggo i dati del girone
            $.getJSON(url,function(dataGirone){

                //Carico dati
                for (var iGirone in CAMPIONATO.gironi.girone) {
                    if ('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[iGirone].nome == dataGirone.games[0].tournament)
                    {
                        CAMPIONATO.gironi.girone[iGirone].risultati = dataGirone;    
                    }
                }
                //Se ho caricato tutti i dati calcolo la classifica
                for (var i in CAMPIONATO.gironi.girone) {
                    if (! CAMPIONATO.gironi.girone[i].risultati.games & CAMPIONATO.gironi.girone[i].avviato == 0 & CAMPIONATO.gironi.girone[i].daCaricare) {
                        return;
                    }
                }
                //Tutti i gironi caricati calcolo la classifica
                if (CAMPIONATO.calcolaClassificaRun)
                    return;
                CAMPIONATO.calcolaClassificaRun = true;

                CAMPIONATO.calcolaClassifica();
            }).error(function(jqXhr, textStatus, error) {
                //è andato in errore ricarico i dati
               // CAMPIONATO.caricaDati(this.url);    
                // ???????????????????????????
                //è andato in errore ricarico i dati
                console.log('--------------');
                console.log(jqXhr);
                console.log('--------------');
                console.log(textStatus);
                console.log('-------------- error');
                console.log(error);
                console.log('-------------- textStatus');
                console.log(jqXhr.textStatus);
                console.log('-------------- statusCode');
                console.log(jqXhr.statusCode);
                console.log('-------------- readyState');
                console.log(jqXhr.readyState);
                console.log('-------------- responseJson');
                console.log(jqXhr.responseJSON);
                console.log('-------------- reponseText');
                console.log(jqXhr.reponseText);
                //Se responseJSON non è valorizzato solo se il torneo esiste    
                if (! jqXhr.responseJSON)
                {
                    console.log('ERRORE ricarico dati: ' + this.url);
                    CAMPIONATO.caricaDati(this.url);    
                } else {
                    console.log('ERRORE Girone non valido');
                    //log per girone non caricato per chater
                    if (jqXhr.responseJSON.message == 'Unrecognized field: game.gameEndTime') {
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                        console.log('ERRORE Girone non valido. DA CARICARE MANUALMENTE');
                    }
                    //Il girone non esiste. Lo cancello
                    for (var iErrore in CAMPIONATO.gironi.girone) {
                        if ('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[iErrore].nome + '/1/1' == this.url)
                        {
                            console.log('ASSEGNO -1 a: ' + iErrore)
                            CAMPIONATO.gironi.girone[iErrore].avviato = 1;
                        }
                    }

                    //Se ho caricato tutti i dati calcolo la classifica
                    for (var iCaricato in CAMPIONATO.gironi.girone) {
                        if (! CAMPIONATO.gironi.girone[iCaricato].risultati.games & CAMPIONATO.gironi.girone[iCaricato].avviato == 0 & CAMPIONATO.gironi.girone[iCaricato].daCaricare) {
                            console.log('errore. caricadati. girone non caricato esco: ' + iCaricato);
                            return;
                        }
                    }
                    console.log('errore, caricamento terminato. calcolo classifica');

                    //Tutti i gironi caricati calcolo la classifica
                    if (CAMPIONATO.calcolaClassificaRun)
                        return;
                    CAMPIONATO.calcolaClassificaRun = true;
    
                    CAMPIONATO.calcolaClassifica();
                }
                   
            });

    },
    calcolaClassifica: function()
    {
        var eloWhite = 0;
        var eloBlack = 0;
        var png = '';
        //Per tutti i gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Se il girone non è iniziato continuo
            if (CAMPIONATO.gironi.girone[i].avviato > 0 || !CAMPIONATO.gironi.girone[i].daCaricare)
                continue;
    
           //Aggiorno partite totali del girone
            CAMPIONATO.gironi.girone[i].partiteGirone = (CAMPIONATO.gironi.girone[i].risultati.players.length * CAMPIONATO.gironi.girone[i].risultati.players.length) - CAMPIONATO.gironi.girone[i].risultati.players.length;
            //Aggiorno N. giocatori per girone
            CAMPIONATO.gironi.girone[i].numGiocatori = CAMPIONATO.gironi.girone[i].risultati.players.length;
            //Aggiorno i gironi del giocatori
            for (var iPlayer in CAMPIONATO.gironi.girone[i].risultati.players) {
                var username = CAMPIONATO.gironi.girone[i].risultati.players[iPlayer].username;
                //Se non eliminato
                if (elimiati.indexOf(username.toLowerCase()) == -1) {
                    //Se non ho trovato giocatore lo aggiungo
                    if (!CAMPIONATO.giocatori[username.toLowerCase()])
                        CAMPIONATO.creaGiocatore(username);
                   
                    //Se non ancora presente aggiungo il girone al giocatore
                    if (CAMPIONATO.giocatori[username.toLowerCase()].gironi.indexOf(CAMPIONATO.gironi.girone[i].nome + '/') < 0)
                    {
                        CAMPIONATO.giocatori[username.toLowerCase()].gironi += '<a href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”>' + CAMPIONATO.gironi.girone[i].index + '</a> - ';
                        //E aggiorno le partite totali
                        CAMPIONATO.giocatori[username.toLowerCase()].partiteTotali += (CAMPIONATO.gironi.girone[i].risultati.players.length - 1) * 2;
                    }
                }
            }
            //Per tutte le partite
            for (var iGames in CAMPIONATO.gironi.girone[i].risultati.games) {
                //Aggiorno la data di inizio girone. DA FARE prima del controllo della fine     
                if ( (! CAMPIONATO.gironi.girone[i].dataInizio) || (CAMPIONATO.gironi.girone[i].dataInizio > CAMPIONATO.gironi.girone[i].risultati.games[iGames].start_time))
                    CAMPIONATO.gironi.girone[i].dataInizio =CAMPIONATO.gironi.girone[i].risultati.games[iGames].start_time;

                //Aggiorno totale partite dei giocatori
                if (CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time )
                {
                    //Partita terminata
                    var username = CAMPIONATO.gironi.girone[i].risultati.games[iGames].white.username.toLowerCase();
                    CAMPIONATO.giocatori[username].partiteTerminate ++;
                    username = CAMPIONATO.gironi.girone[i].risultati.games[iGames].black.username.toLowerCase();
                    CAMPIONATO.giocatori[username].partiteTerminate ++;
                } else {
                    //Partita in corso
                    //White/Black contengono l'api che restituisce i dati del giocatore
                    //  lo username è la parte finale
                    var username = CAMPIONATO.gironi.girone[i].risultati.games[iGames].white;
                    username = username.substr(33, username.length-33).toLowerCase();
                    username = CAMPIONATO.gironi.girone[i].risultati.games[iGames].black;
                    username = username.substr(33, username.length-33).toLowerCase();
                }

                //Se non definita end_time la partita non è finita
                if (! CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time )
                    continue; 
                
                //controllo se non ha superato la data di fine torneo
                var myObj = $.parseJSON('{"date_created":"' + CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time + '"}'),
                end_time = new Date(1000*myObj.date_created);
                if (end_time > fineTorneo)
                   continue;    
                 
                //Aggiorno la data di fine girone
                if ( (! CAMPIONATO.gironi.girone[i].dataFine) || (CAMPIONATO.gironi.girone[i].dataFine < CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time))
                    CAMPIONATO.gironi.girone[i].dataFine =CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time;

                //Aggiorno partite finite
                CAMPIONATO.gironi.girone[i].partiteTerminate ++;
                
                //Aggiorno punti bianco
                //Calcolo punteggio se sono state fatte più di tre mosse.
                png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                if (png.indexOf('4.') > -1)
                    mosseOk = true
                else
                    mosseOk = false;
                png = png.substring(png.indexOf('WhiteElo')+10);
                eloWhite = png.substring(0, png.indexOf('"'));
                png = png.substring(png.indexOf('BlackElo')+10);
                eloBlack = png.substring(0, png.indexOf('"'));
                CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].white, eloWhite, mosseOk, end_time, CAMPIONATO.gironi.girone[i].risultati.games[iGames].black.username, eloBlack);
                //Aggiorno punti nero
                png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                if (png.indexOf('3.') > -1)
                    mosseOk = true
                else
                    mosseOk = false;
                CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].black, eloBlack, mosseOk, end_time, CAMPIONATO.gironi.girone[i].risultati.games[iGames].white.username, eloWhite);
            }

        }

        //Ricerco avatar
        CAMPIONATO.getAvatar();

    },
    getAvatar : function()
    {
        //Cerco il primo giocatore di cui non so ancora l'avatar
        //  Potrebbe essere andata in erore l'api di ricerca profilo
        for (var username in CAMPIONATO.giocatori) {
                //Cerco avatar
                CAMPIONATO.getAvatarUrl('https://api.chess.com/pub/player/' + username);
        }    
    },
    getAvatarUrl: function(url)
    {
        //Eseguo funzione per ricercare un avatar
        $.getJSON(url,function(dataAvatar){
            if (dataAvatar.avatar) {
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = dataAvatar.avatar;
            } else {
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";
            }
            //Se ha chiuso l'account lo imposto come stampato così non lo considero più
            if (dataAvatar.status == 'closed') 
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].accountChiuso = true;
            //Se non ho caricato tuti gli avatar esengo ancora la funzione
            for (var username in CAMPIONATO.giocatori) {
                if (! CAMPIONATO.giocatori[username].avatar) {
                    return;
                }
            }
            //Finito calcolo. Scrivo i risultati 
            //   Controllo se è già partita la fase di scrittura
            //      se arrivano contemporaneamente più caricamenti potrebbe succedere
            if (! CAMPIONATO.getEloRun)
            {
                CAMPIONATO.getEloRun = true;
                CAMPIONATO.getElo();
            }
        }).error(function(jqXhr, textStatus, error) {
            //è andato in errore ricarico i dati
            CAMPIONATO.getAvatarUrl(this.url);    
            //Per evitare problemi se il giocatore è non esiste,
            //  se va in errore carico l'avatar di default
            //Tolto se il giocatore va in errore bisogna correggere anche stat
            //var username = this.url.substr(33, this.url.length - 32);
            //CAMPIONATO.giocatori[username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";

        });

    },
    getElo : function()
    {
        //Cerco l'avatar per tutti i giocatori
        for (var username in CAMPIONATO.giocatori) {
                //Cerco avatar
                CAMPIONATO.getEloUrl('https://api.chess.com/pub/player/' + username + '/stats');
        }    
    },
    getEloUrl: function(url)
    {
        //Eseguo funzione per ricercare un avatar
        $.getJSON(url,function(data){
            var username = ''
            username = this.url.substr(33, this.url.length-39);
            if (data.chess_daily)
                CAMPIONATO.giocatori[username].elo = data.chess_daily.last.rating;
            else
                CAMPIONATO.giocatori[username].elo = 1200;    
                
            //Se non ho caricato tuti gli elo  esengo ancora la funzione
            for (var username in CAMPIONATO.giocatori) {
                if (! CAMPIONATO.giocatori[username].elo) {
                    return;
                }
            }

            if (CAMPIONATO.scriviTabelleRun)
                return;
                
            //Se non ci sono elo da ricercare scrivo la tabella
            CAMPIONATO.scriviTabelleRun = true;
           //Controllo se ci sono gironi in partenza
           CAMPIONATO.controllaInPartenza();


        }).error(function(jqXhr, textStatus, error) {
            //è andato in errore ricarico i dati
            CAMPIONATO.getEloUrl(this.url);    
        });

    },
    setPunti : function(risultato, elo, mosseOk, end_time, avversarioUsename, avversarioElo) {
        //Aggiorno display name. E' l'unico punto in cui ha le maiuscole
        if (CAMPIONATO.giocatori[risultato.username.toLowerCase()])
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].displayName = risultato.username;

        //??????????????????
        //  Se avversario era Fungiat con elo abassato esco.
        if (avversarioUsename == 'Fungiat' && avversarioElo < 2000) {
            return;
        }
        //??????????????????
        
        //Se eliminato esco
        if (elimiati.indexOf(risultato.username.toLowerCase()) > -1)
            return;
        //Aggiorno all'ultima partita valido (quelle terminate dopo la fine del torneo non sono valide)
        if (CAMPIONATO.giocatori[risultato.username.toLowerCase()].eloDate < end_time)
        {
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].elo = elo;
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].eloDate = end_time;
        }
        //Se non sono state fatte le 3 mosse non aggiorno punti
        if (! mosseOk)
            return;
        //Risultati mai verificati assegnati come perse
        if (risultato.result == 'kingofthehill')
            console.log(risultato);            
        if (risultato.result == 'threecheck')
            console.log(risultato);         
        if (risultato.result == 'timevsinsufficient')
            console.log(risultato);          
        //--------------

        var punti;
        if (risultato.result == 'win')
        {
            //Vinto
            punti = 1 * CAMPIONATO.getPunti(elo, avversarioElo);
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].punteggio += punti;
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].vinte ++;
            //salvo come sono stati calcolati i punti
            if (CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti != '')
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += '<BR>';
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += '&nbsp;&nbsp;' + risultato.username + ' (' + elo + ')';
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += ' - ' + avversarioUsename + ' (' + avversarioElo + ')';
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += ' - W - ' +punti;
        } else {
            if ((risultato.result == 'agreed') || (risultato.result == 'repetition')  || (risultato.result == 'timevsinsufficient') || 
                (risultato.result == '50move') || (risultato.result == 'insufficient') || (risultato.result == 'stalemate')  ){
                //Patta
                punti = 0.5 * CAMPIONATO.getPunti(elo, avversarioElo);
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].punteggio += punti;
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].patte ++;
                //salvo come sono stati calcolati i punti
                if (CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti != '')
                    CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += '<BR>';
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += '&nbsp;&nbsp;' + risultato.username + ' (' + elo + ')';
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += ' - ' + avversarioUsename +  ' (' + avversarioElo + ')';
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].calcoloPunti += ' - D - ' + punti;
            } else {
                //Perso      
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].perse ++;
            }   
        }
    },
    getPunti: function(elo, avversarioElo)
    {
        /* attribuzione dei punti dipende dalla differenza di rating tra i due giocatori, calcolata sottraendo dal rating del vincente il rating del perdente (D=V-P);
            in caso di patta, il conteggio viene effettuato per entrambi i giocatori A e B, 
            considerando la differenza A-B per il giocatore A, e la differenza B-A per il giocatore B;
            i valori vengono approssimati alla seconda cifra decimale
        */

        var differenza = elo - avversarioElo;
        //una vittoria contro un pari livello (-50<D<50) vale 2 punti; 
        if (differenza >= -50 && differenza <= 50)
        {
            return 2;
        } 

        //una vittoria con D>50 vale 2/(2,25)^(1-50/D) punti; 
        if (differenza > 50)
        {
            //var risultato = 2 / ((2.25) ^ (1-50/differenza)); 
            //var risultato = (1-50/differenza); 

            var risultato = 2 / Math.pow(2.25, (1-50/differenza))
            return risultato.toFixed(2);
        } 

        //una vittoria con D<-50 vale 2*(2,5)^(1+50/D) punti;
        risultato = 2 * Math.pow(2.25, (1+50/differenza));
        return risultato.toFixed(2);
        
    },
    controllaInPartenza: function()
    {
        //Controllo i gironi non ancora avviati 
        //   per sapere i giocatori iscritti
        for (var i in CAMPIONATO.gironi.girone) {
            //Se il girone non è iniziato continuo
            if (CAMPIONATO.gironi.girone[i].avviato != 1)
                continue;

            $.getJSON('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[i].nome,function(data){
            
                //leggo il girone da aggiornare
                var mioGirone = this.url.substr(37, this.url.length-37);
                var iGirone = 0
                for (var ii in CAMPIONATO.gironi.girone) {
                    if (mioGirone == CAMPIONATO.gironi.girone[ii].nome) {
                        iGirone = ii
                        break;
                    }  
                }
    
                var gironeIscritto = parseInt(iGirone);
                gironeIscritto += 1;
                if (! data.timeStart) {
                    for (var iPlayer in data.players) {
                        //se iscritto realmente
                        if (data.players[iPlayer].status == 'registered') {
                            if (CAMPIONATO.giocatori[data.players[iPlayer].username]) {
                                if (! CAMPIONATO.giocatori[data.players[iPlayer].username].iscritto) {
                                    CAMPIONATO.giocatori[data.players[iPlayer].username].iscritto = '<br>Iscritto G' + gironeIscritto;
                                } else {
                                    CAMPIONATO.giocatori[data.players[iPlayer].username].iscritto += ' *'; 
                                }
                        }
                            
                        }
                    }
                }

                //Caricamento ok
                CAMPIONATO.gironi.girone[iGirone].avviato = 2;  
        
                //Controlo altri nuovi gironi
                CAMPIONATO.controllaInPartenza();  

            }).error(function(jqXhr, textStatus, error) {


                //leggo il girone da aggiornare
                var mioGirone = this.url.substr(37, this.url.length-37);
                var iGirone = 0
                for (var ii in CAMPIONATO.gironi.girone) {
                    if (mioGirone == CAMPIONATO.gironi.girone[ii].nome) {
                        iGirone = ii
                        break;
                    }  
                }

                //Caricamento ok
                CAMPIONATO.gironi.girone[iGirone].avviato = 2;  

                //è andato in errore ricarico i dati
                CAMPIONATO.controllaInPartenza();  
            });

            //Esco per non scrivere le tabelle
            return;

        }
        
        //Ho controllato tutti i gironi stampo
        CAMPIONATO.scriviTabelle();

    },
    scriviTabelle: function()
    {
        //Calcola classifica per fascie
        while (CAMPIONATO.calcolaClassificaU1300());
        posizione.N = 0;
        posizione.oldPunti = -1;
        posizione.oldVinte = 0;
        posizione.pari = 0;
        while (CAMPIONATO.calcolaClassificaU1500());
        posizione.N = 0;
        posizione.oldPunti = -1;
        posizione.oldVinte = 0;
        posizione.pari = 0;
        while (CAMPIONATO.calcolaClassificaU1700());

        //Tabella classifica
        posizione.N = 0;
        posizione.oldPunti = -1;
        posizione.oldVinte = 0;
        posizione.pari = 0;
        while (CAMPIONATO.scriviGiocatore());

        //In ultimo scrivo giocatori eliminati
        CAMPIONATO.scriviEliminati();
        //Tabella gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Se il girone non è iniziato non lo stampo
            if (CAMPIONATO.gironi.girone[i].avviato > 0)
                continue;
            //Se ho terminato tutte le partite scrivo in verde
            var colore = "";
            var dataFine = "";
            if (CAMPIONATO.gironi.girone[i].partiteTerminate == CAMPIONATO.gironi.girone[i].partiteGirone)
            {
                colore = 'style="color:green!important"';
                var end_time
                if (CAMPIONATO.gironi.girone[i].daCaricare)
                {
                    var myObj = $.parseJSON('{"date_created":"' + CAMPIONATO.gironi.girone[i].dataFine + '"}'),
                    end_time = new Date(1000*myObj.date_created);
                    dataFine = giorni[end_time.getDate()-1]  + '/' + giorni[end_time.getMonth()]+ '/'+ end_time.getFullYear();
                } else {
                    dataFine = CAMPIONATO.gironi.girone[i].dataFine;
                }
            }
            //Data inizio
            var dataInizio = ""
            var start_time
            if (CAMPIONATO.gironi.girone[i].daCaricare)
            {
                var myObj = $.parseJSON('{"date_created":"' + CAMPIONATO.gironi.girone[i].dataInizio + '"}'),
                start_time = new Date(1000*myObj.date_created);
            } else {
                start_time = CAMPIONATO.gironi.girone[i].dataInizio;
            }
            dataInizio = giorni[start_time.getDate()-1]  + '/' + giorni[start_time.getMonth()]+ '/'+ start_time.getFullYear();
    
            $("#gironi").append('<tr  ' + colore + ' class="gironi-giocatori"> <td class="gironi-col1"><a class="username" href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”> #' +
            CAMPIONATO.gironi.girone[i].descrizione + '</a></td><td class="gironi-col">' + dataInizio + '</td> <td class="gironi-col">' + dataFine + '</td> ' +
            '<td class="gironi-col">' + CAMPIONATO.gironi.girone[i].partiteTerminate + ' / ' + CAMPIONATO.gironi.girone[i].partiteGirone + ' </td> ' +
            '<td class="gironi-col">' + CAMPIONATO.gironi.girone[i].numGiocatori + ' </td> </tr>');
        }

        //Scrivo i dati dei giocatori totali nelle intestazioni
        var totaleGiocatori = 0;
        for (var i in CAMPIONATO.giocatori) 
            totaleGiocatori ++;
        var totaleTerminate = 0;
        var totalePartite = 0;
        for (var i in CAMPIONATO.gironi.girone) {
            if (CAMPIONATO.gironi.girone[i].avviato == 0) {
                totaleTerminate += CAMPIONATO.gironi.girone[i].partiteTerminate;
                totalePartite += CAMPIONATO.gironi.girone[i].partiteGirone;
            }
        } 
        $("#nGiocatori").html(totaleGiocatori);
        $("#partiteTerminate").html(totaleTerminate + '/' + totalePartite);

    },
    calcolaClassificaU1300: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newVinte = -1;
        var giocatore;

        //Calcolo classifica 
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
                if (! giocatore.accountChiuso & giocatore.elo < 1300 & ! giocatore.U1300) {
                if  ((giocatore.punteggio > newPunteggio) |
                    ((giocatore.punteggio == newPunteggio) & (giocatore.vinte > newVinte) )
                    )          
                {
                    newPunteggio = giocatore.punteggio;
                    newVinte = giocatore.vinte;
                    username = i;
                }
            }
        }

        if (username == "")
        {
            return false;
        }

        //Controllo se sono pari
        if ((newPunteggio == posizione.oldPunti) &
            (newVinte == posizione.oldVinte))
        {
             posizione.pari ++;
        } else {

            posizione.N += posizione.pari + 1;
            posizione.oldPunti = newPunteggio;
            posizione.oldVinte = newVinte;
            //Azzero pari
            posizione.pari = 0;
        }

        //Aggiorno posizione
        CAMPIONATO.giocatori[username].U1300 = posizione.N;

        return true;
    },
    calcolaClassificaU1500: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newVinte = -1;
        var giocatore;

        //Calcolo classifica 
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
                if (! giocatore.accountChiuso & giocatore.elo > 1299 &  giocatore.elo < 1500 & ! giocatore.U1500) {
                if  ((giocatore.punteggio > newPunteggio) |
                    ((giocatore.punteggio == newPunteggio) & (giocatore.vinte > newVinte) )
                    )          
                {
                    newPunteggio = giocatore.punteggio;
                    newVinte = giocatore.vinte;
                    username = i;
                }
            }
        }

        if (username == "")
        {
            return false;
        }

        //Controllo se sono pari
        if ((newPunteggio == posizione.oldPunti) &
            (newVinte == posizione.oldVinte))
        {
             posizione.pari ++;
        } else {

            posizione.N += posizione.pari + 1;
            posizione.oldPunti = newPunteggio;
            posizione.oldVinte = newVinte;
            //Azzero pari
            posizione.pari = 0;
        }

        //Aggiorno posizione
        CAMPIONATO.giocatori[username].U1500 = posizione.N;

        return true;
    },
    calcolaClassificaU1700: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newVinte = -1;
        var giocatore;

        //Calcolo classifica 
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
            if (! giocatore.accountChiuso & giocatore.elo > 1499 &  giocatore.elo < 1700 & ! giocatore.U1700) {
                if  ((giocatore.punteggio > newPunteggio) |
                    ((giocatore.punteggio == newPunteggio) & (giocatore.vinte > newVinte) )
                    )          
                {
                    newPunteggio = giocatore.punteggio;
                    newVinte = giocatore.vinte;
                    username = i;
                }
            }
        }

        if (username == "")
        {
            return false;
        }

        //Controllo se sono pari
        if ((newPunteggio == posizione.oldPunti) &
            (newVinte == posizione.oldVinte))
        {
             posizione.pari ++;
        } else {

            posizione.N += posizione.pari + 1;
            posizione.oldPunti = newPunteggio;
            posizione.oldVinte = newVinte;
            //Azzero pari
            posizione.pari = 0;
        }

        //Aggiorno posizione
        CAMPIONATO.giocatori[username].U1700 = posizione.N;

        return true;
    },
    scriviGiocatore: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newUsername = "zzzzzzz";
        var newVinte = -1;
        var giocatore;
        
        //Se amministratore visualizzo in ordine alfabetico, altrimenti per punteggio
        if (CAMPIONATO.isAdmin)
        {
            for (var i in CAMPIONATO.giocatori) {
                giocatore = CAMPIONATO.giocatori[i];
                if (! giocatore.stampato & ! giocatore.accountChiuso & giocatore.username < newUsername) 
                {
                    newUsername = giocatore.username;
                    username = i;
                }
            }

        } else {
            //Calcolo classifica vera
            for (var i in CAMPIONATO.giocatori) {
                giocatore = CAMPIONATO.giocatori[i];
                if (! giocatore.stampato & ! giocatore.accountChiuso) {
                    if  ((giocatore.punteggio > newPunteggio) |
                         ((giocatore.punteggio == newPunteggio) & (giocatore.vinte > newVinte) )
                        )          
                    {
                        newPunteggio = giocatore.punteggio;
                        newVinte = giocatore.vinte;
                        username = i;
                    }
                }
            }
        }

        if (username == "")
        {
            return false;
        }

        //Controllo se sono pari
        if ((newPunteggio == posizione.oldPunti) &
            (newVinte == posizione.oldVinte))
        {

             posizione.pari ++;
        } else {

            posizione.N += posizione.pari + 1;
            posizione.oldPunti = newPunteggio;
            posizione.oldVinte = newVinte;
            //Azzero pari
            posizione.pari = 0;
        }

        //La posizione potrebbe contenere delle immagini
        var stPosizione = '#' + posizione.N;
        //Se torneo finito visualizzo immagine
        //   solo se non sono amministratore
        if (! CAMPIONATO.isAdmin)
        { 
            var adesso = new Date();
            if (adesso > fineTorneo)
            {
                //Assoluti
                if (posizione.N == 1)
                    stPosizione = '<img class="classifica-assoluto1" src="img/assoluto1.png"><BR>' + stPosizione + ' Assoluto';
                if (posizione.N == 2)
                    stPosizione = '<img class="classifica-assoluto2" src="img/assoluto2.png"><BR>' + stPosizione + ' Assoluto';
                if (posizione.N == 3)
                    stPosizione = '<img class="classifica-podio" src="img/assoluto3.png"><BR>' + stPosizione + ' Assoluto';
                if (posizione.N == 4)
                    stPosizione = '<img class="classifica-podio" src="img/assoluto4.png"><BR>' + stPosizione + ' Assoluto';
                if (posizione.N == 5)
                stPosizione = '<img class="classifica-podio" src="img/assoluto5.png"><BR>' + stPosizione + ' Assoluto';
                //Categoria U1700
                if (CAMPIONATO.giocatori[username].elo > 1499 &  CAMPIONATO.giocatori[username].elo < 1700)
                {
                    if (posizione.N > 5 & CAMPIONATO.giocatori[username].U1700 < 4)
                        stPosizione = '<img class="classifica-podio" src="img/U1700' + CAMPIONATO.giocatori[username].U1700 + '.png">';
                    stPosizione += '<span style="font-size: 10px;"><BR>#' + CAMPIONATO.giocatori[username].U1700 + ' U1700</span>';
                }
                //Categoria U1500
                if (CAMPIONATO.giocatori[username].elo > 1299 &  CAMPIONATO.giocatori[username].elo < 1500)
                {
                    if (posizione.N > 5 & CAMPIONATO.giocatori[username].U1500 < 4)
                        stPosizione = '<img class="classifica-podio" src="img/U1500' + CAMPIONATO.giocatori[username].U1500 + '.png">';
                    stPosizione += '<span style="font-size: 10px;"><BR>#' + CAMPIONATO.giocatori[username].U1500 + ' U1500</span>';
                }
                //Categoria U1300
                if (CAMPIONATO.giocatori[username].elo < 1300)
                { 
                    if (posizione.N > 5 & CAMPIONATO.giocatori[username].U1300  < 4)
                        stPosizione = '<img class="classifica-podio" src="img/U1300' + CAMPIONATO.giocatori[username].U1300 + '.png">';
                    stPosizione += '<span style="font-size: 10px;"><br>#' + CAMPIONATO.giocatori[username].U1300 + ' U1300</span>';
                }
            } else {
                //Torneo non finito, non visualizzo immagini
                //Categoria U1700
               if (CAMPIONATO.giocatori[username].elo > 1499 &  CAMPIONATO.giocatori[username].elo < 1700)
               {
                    stPosizione += '<span style="font-size: 10px;"><BR>#' + CAMPIONATO.giocatori[username].U1700 + ' U1700</span>';
               }
                //Categoria U1500
                if (CAMPIONATO.giocatori[username].elo > 1299 &  CAMPIONATO.giocatori[username].elo < 1500)
                {     
                    stPosizione += '<span style="font-size: 10px;"><br>#' + CAMPIONATO.giocatori[username].U1500 + ' U1500</span>';
                }
                //Categoria U1300
                if (CAMPIONATO.giocatori[username].elo < 1300)
                {     
                    stPosizione += '<span style="font-size: 10px;"><br>#' + CAMPIONATO.giocatori[username].U1300 + ' U1300</span>';
                }
            }
        }    
       //----------------- FINE POSIZIONE 

       //Preparo riga per colonna Partite completate
       var stCompletate = '';
       var percentuale = CAMPIONATO.giocatori[username].partiteTerminate * 100 / CAMPIONATO.giocatori[username].partiteTotali;
       percentuale = percentuale.toFixed(0);  //Arrotondo
       var nGironi = CAMPIONATO.giocatori[username].gironi.split(' - ').length-1;
       if ( ! CAMPIONATO.giocatori[username].iscritto && (
           (nGironi <= 10 && percentuale >= 50) || (nGironi >=  11 && nGironi <= 20 && percentuale >= 66) || (nGironi > 20 && percentuale >= 75) ))
            stCompletate = '<img class="classifica-partite" src="img/Ok.png">';
        else
            stCompletate = '<img class="classifica-partite" src="img/Ko.png">';
       stCompletate += '<BR><span style="font-size: 10px;">' +  CAMPIONATO.giocatori[username].partiteTerminate + ' - '  + CAMPIONATO.giocatori[username].partiteTotali + '  (' + percentuale + '%) </span> ';
        //Se iscritto ai nuovi gironi
        if (CAMPIONATO.giocatori[username].iscritto)
             stCompletate += '<span style="font-size: 10px;">' + CAMPIONATO.giocatori[username].iscritto;

        //Se amministratore visualizzo come sono stati calcolati i punti
        var myPunteggio =  CAMPIONATO.giocatori[username].punteggio.toFixed(2);
        if (CAMPIONATO.giocatori[username].calcoloPunti) {
            myPunteggio = '<div class="tooltip">' + myPunteggio;
            myPunteggio += '  <span class="tooltiptext">' + CAMPIONATO.giocatori[username].calcoloPunti + '</span>';
            myPunteggio += '</div>';
        }

        //ordino gironi
        var arGironi;
        var stGironi = '';
        arGironi = CAMPIONATO.giocatori[username].gironi.substr(0, CAMPIONATO.giocatori[username].gironi.length -2).split(' - ');
        arGironi.sort(CAMPIONATO.compareGironi);
        for (var i in arGironi) {
            stGironi += arGironi[i] + ' - ';
        }

        //stampo riga    
        $("#giocatori").append('<tr class="classifica-giocatori">' +
            '<td class="classifica-col1">' + stPosizione + '</td>' +  
            '<td class="classifica-col1SEP"></td>' + 
            '<td class="classifica-col2">' +
            '    <table><tr>' +
            '        <td>' +
            '        <img class="classifica-avatar" src="' + CAMPIONATO.giocatori[username].avatar + '">' +
            '    </td>' +
            '    <td width=7px></td>' +
            '    <td><div>' +
            '            <a class="username" href="' + CAMPIONATO.giocatori[username].id + '" target=”_blank”> ' + CAMPIONATO.giocatori[username].displayName + '</a>' +
            '        </div> <div>  (' + CAMPIONATO.giocatori[username].elo + ') </div>' +
            '        </td>' +    
            '    </tr></table>' +
            '</td>' +
            '<td class="classifica-col3">' + myPunteggio +'</td>' +
            '<td class="classifica-col4"> <span class="game-win">' +  CAMPIONATO.giocatori[username].vinte + ' W</span> /'+
                '<span class="game-lost">' +  CAMPIONATO.giocatori[username].perse + ' L</span> /' +
                '<span class="game-draw">' +  CAMPIONATO.giocatori[username].patte + ' D</span>' +
            '</td>' +
            '<td class="classifica-col5">' + stCompletate + '</td>' +
            '<td class="classifica-col6"></td>' +
            '<td class="classifica-col7">' + stGironi.substr(0, stGironi.length - 2) + '</td>' +
            '</tr>'
            );

            //Flag per non stampare più questo giocatore
            CAMPIONATO.giocatori[username].stampato = true;
            return true;
    },
    scriviEliminati: function()
    {
        //Cerco giocatore con punteggio più alto
        var giocatore;
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
        
            //se da stampare
            var daStampare = false;

            //stampo riga    
            if (daStampare)
            {
                $("#giocatori").append('<tr class="classifica-giocatori">' +
                    '<td class="classifica-col1"></td>' +  
                    '<td class="classifica-col1SEP"></td>' + 
                    '<td class="classifica-col2">' +
                    '    <table><tr>' +
                    '            <td>' +
                    '            <img class="classifica-avatar" src="' + giocatore.avatar + '">' +
                    '    </td>' +
                    '    <td width=7px></td>' +
                    '    <td><div>' +
                    '            <a class="username" href="' + giocatore.id + '" target=”_blank”> ' + giocatore.displayName + '</a>' +
                    '        </div> <div>  (' + giocatore.elo + ') </div>' +
                    '        </td>' +    
                    '    </tr></table>' +
                    '</td>' +
                    '<td class="classifica-col3">' + giocatore.punteggio.toFixed(2) +'</td>' +
                    '<td class="classifica-col4"> <span class="game-win">' +  giocatore.vinte + ' W</span> /'+
                    '<span class="game-lost">' +  giocatore.perse + ' L</span> /' +
                    '<span class="game-draw">' +  giocatore.patte + ' D</span>' +
                    '</td>' +
                    '<td class="classifica-col5">' + '' + '</td>' +
                    '<td class="classifica-col6"></td>' +
                    '<td class="classifica-col7">' + giocatore.gironi.substr(0, giocatore.gironi.length -2)  + '</td>' +
                    '</tr>'
                );
            }
        }
    },
    creaGiocatore : function(apiUsername)
    {
        username = apiUsername.toLowerCase()
        CAMPIONATO.giocatori[username] = {};
        CAMPIONATO.giocatori[username].username = username;
        CAMPIONATO.giocatori[username].displayName = apiUsername;
        CAMPIONATO.giocatori[username].id = 'https://www.chess.com/member/' + username;
        CAMPIONATO.giocatori[username].avatar = '';
        CAMPIONATO.giocatori[username].elo = 0;
        CAMPIONATO.giocatori[username].eloDate = new Date("2018-01-01");;
        CAMPIONATO.giocatori[username].punteggio = 0.00;
        CAMPIONATO.giocatori[username].vinte = 0;
        CAMPIONATO.giocatori[username].perse = 0;
        CAMPIONATO.giocatori[username].patte = 0;
        CAMPIONATO.giocatori[username].partiteTerminate = 0;
        CAMPIONATO.giocatori[username].partiteTotali = 0;
        CAMPIONATO.giocatori[username].gironi = '';
        CAMPIONATO.giocatori[username].stampato = false;
        CAMPIONATO.giocatori[username].accountChiuso = false;
        CAMPIONATO.giocatori[username].calcoloPunti = '';

        $.getJSON('https://api.chess.com/pub/player/' + username,function(dataAvatar){
        if (dataAvatar.avatar) {
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = dataAvatar.avatar;
            } else {
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg ";
            }
            //Se ha chiuso l'account lo imposto come stampato così non lo considero più
            if (dataAvatar.status == 'closed') 
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].accountChiuso = true;

            //NB NB SE IL CARICAMENTO NON VA A BUON FINE VIENE RIPETUTO NELLA FUNZIONE getAvatarUrl
        })    

    },
    compareGironi : function (a,b) {
        if (parseInt(a.substring(a.indexOf('>')+1, a.substring(1,a.length-1).indexOf('<')+1)) < parseInt(b.substring(b.indexOf('>')+1, b.substring(1,b.length-1).indexOf('<')+1)))
            return  -1;
        else
            return  1;
    }

}


