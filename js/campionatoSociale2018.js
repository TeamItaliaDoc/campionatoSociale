//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
var giorni = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var elimiati = ["danieletar", "never_walk_alone", "miki1701", "aracine", "jbg12618", "nr051162", "lieissvi", "mastertom2040", "costadeipirati","ricci888",
	"procellaria_fabio_61","procellaria_61-it", "lamicoditenerife-x", "vesevus", "lordbendtner99", "sanner60","claudiosignorini"];
var posizione = {"N": 0, "pari" : 0,"oldPunti" : 0, "oldVinte" : 0}
var fineTorneo = new Date("2019-01-01"); 

CAMPIONATO = {
    gironi: {},
    giocatori: [],
    scriviTabelleRun: false,
    getEloUsername: '',
    isAdmin : false,

    inizializzaGironi: function()
    { 
        stgironi = '{"girone": [';
        stgironi += '{"index": "1", "nome": "campionato-sociale-team-italia-doc-girone-1", "descrizione" : "1", "coefficiente" : "1.41", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true, "risultati" : "{}"}';
        stgironi += ',{"index": "2", "nome": "campionato-sociale-team-italia-doc-girone-2", "descrizione" : "2", "coefficiente" : "1.51", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "3", "nome": "campionato-sociale-team-italia-doc-girone-3", "descrizione" : "3", "coefficiente" : "1.36", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "4", "nome": "campionato-sociale-team-italia-doc-girone-4", "descrizione" : "4", "coefficiente" : "1.37", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "5", "nome": "campionato-sociale-team-italia-doc-girone-5", "descrizione" : "5", "coefficiente" : "1.18", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "6", "nome": "campionato-sociale-team-italia-doc-girone-6", "descrizione" : "6", "coefficiente" : "1.10", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "7", "nome": "campionato-sociale-team-italia-doc-girone-7", "descrizione" : "7", "coefficiente" : "1.24", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "8", "nome": "campionato-sociale-team-italia-doc-girone-8", "descrizione" : "8", "coefficiente" : "1.38", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "9", "nome": "campionato-sociale-team-italia-doc-girone-9", "descrizione" : "9", "coefficiente" : "1.35", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "10", "nome": "campionato-sociale-team-italia-doc-girone-10", "descrizione" : "10", "coefficiente" : "1.17", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "11", "nome": "campionato-sociale-team-italia-doc-girone-11", "descrizione" : "11", "coefficiente" : "1.33", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "12", "nome": "campionato-sociale-team-italia-doc-2018-girone-12", "descrizione" : "12", "coefficiente" : "1.26", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "13", "nome": "campionato-sociale-team-italia-doc-2018-girone-13", "descrizione" : "13", "coefficiente" : "1.39", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "14", "nome": "campionato-sociale-team-italia-doc-2018-girone-14", "descrizione" : "14", "coefficiente" : "1.41", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "15", "nome": "campionato-sociale-team-italia-doc-2018-girone-15", "descrizione" : "15", "coefficiente" : "1.05", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "16", "nome": "campionato-sociale-team-italia-doc-2018-girone-16", "descrizione" : "16", "coefficiente" : "1.15", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "17", "nome": "campionato-sociale-team-italia-doc-girone-17", "descrizione" : "17", "coefficiente" : "1.20", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "18", "nome": "campionato-sociale-team-italia-doc-girone-18", "descrizione" : "18", "coefficiente" : "1.39", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "19", "nome": "campionato-sociale-team-italia-doc-2018-girone-19", "descrizione" : "19", "coefficiente" : "1.35", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "20", "nome": "campionato-sociale-team-italia-doc-2018-girone-20", "descrizione" : "20", "coefficiente" : "1.42", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "21", "nome": "campionato-sociale-team-italia-doc-2018-girone-21", "descrizione" : "21", "coefficiente" : "1.28", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "22", "nome": "campionato-sociale-team-italia-doc-2018-girone-22", "descrizione" : "22", "coefficiente" : "1.42", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "23", "nome": "campionato-sociale-team-italia-doc-2018-girone-23", "descrizione" : "23", "coefficiente" : "1.06", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "24", "nome": "campionato-sociale-team-italia-doc-2018-girone-24", "descrizione" : "24", "coefficiente" : "0.80", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "25", "nome": "campionato-sociale-team-italia-doc-2018-girone-25", "descrizione" : "25", "coefficiente" : "1.44", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "26", "nome": "campionato-sociale-team-italia-doc-2018-girone-26", "descrizione" : "26", "coefficiente" : "1.46", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "27", "nome": "campionato-sociale-team-italia-doc-2018-girone-27", "descrizione" : "27", "coefficiente" : "1.07", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "28", "nome": "campionato-sociale-team-italia-doc-2018-girone-28", "descrizione" : "28", "coefficiente" : "1.23", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "29", "nome": "campionato-sociale-team-italia-doc-2018-girone-29", "descrizione" : "29", "coefficiente" : "1.48", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "30", "nome": "campionato-sociale-team-italia-doc-2018-girone-30", "descrizione" : "30", "coefficiente" : "1.45", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "31", "nome": "campionato-sociale-team-italia-doc-2018-girone-31", "descrizione" : "31", "coefficiente" : "1.40", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "32", "nome": "campionato-sociale-team-italia-doc-2018-girone-32", "descrizione" : "32", "coefficiente" : "1.40", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "33", "nome": "campionato-sociale-team-italia-doc-2018-girone-33", "descrizione" : "33", "coefficiente" : "1.28", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "34", "nome": "campionato-sociale-team-italia-doc-2018-girone-34", "descrizione" : "34", "coefficiente" : "1.21", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "35", "nome": "campionato-sociale-team-italia-doc-2018-girone-35", "descrizione" : "35", "coefficiente" : "1.40", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "36", "nome": "campionato-sociale-team-italia-doc-2018-girone-36", "descrizione" : "36", "coefficiente" : "1.52", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "37", "nome": "campionato-sociale-team-italia-doc-2018-girone-37", "descrizione" : "37", "coefficiente" : "1.26", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "38", "nome": "campionato-sociale-team-italia-doc-2018-girone-38", "descrizione" : "38", "coefficiente" : "1.39", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "39", "nome": "campionato-sociale-team-italia-doc-2018-girone-39", "descrizione" : "39", "coefficiente" : "1.35", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "40", "nome": "campionato-sociale-team-italia-doc-2018-girone-40", "descrizione" : "40", "coefficiente" : "1.34", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "41", "nome": "campionato-sociale-team-italia-doc-2018-girone-41", "descrizione" : "41", "coefficiente" : "1.05", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "42", "nome": "campionato-sociale-team-italia-doc-2018-girone-42", "descrizione" : "42", "coefficiente" : "1.45", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "43", "nome": "campionato-sociale-team-italia-doc-2018-girone-43", "descrizione" : "43", "coefficiente" : "1.38", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "44", "nome": "campionato-sociale-team-italia-doc-2018-girone-44", "descrizione" : "44", "coefficiente" : "1.41", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "45", "nome": "campionato-sociale-team-italia-doc-2018-girone-45", "descrizione" : "45", "coefficiente" : "1.54", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "46", "nome": "campionato-sociale-team-italia-doc-2018-girone-46", "descrizione" : "46", "coefficiente" : "1.43", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "47", "nome": "campionato-sociale-team-italia-doc-2018-girone-47", "descrizione" : "47", "coefficiente" : "1.39", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : false,  "risultati" : "{}"}';
        stgironi += ',{"index": "48", "nome": "campionato-sociale-team-italia-doc-2018-girone-48", "descrizione" : "48", "coefficiente" : "1.59", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true, "risultati" : "{}"}';
        stgironi += ',{"index": "49", "nome": "campionato-sociale-team-italia-doc-2018-girone-49", "descrizione" : "49", "coefficiente" : "1.55", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "50", "nome": "campionato-sociale-team-italia-doc-2018-girone-50", "descrizione" : "50", "coefficiente" : "1.49", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ',{"index": "51", "nome": "campionato-sociale-team-italia-doc-2018-girone-51", "descrizione" : "51", "coefficiente" : "1.37", "partiteTerminate" : "0", "avviato" : true, "daCaricare" : true,  "risultati" : "{}"}';
        stgironi += ']}';

        CAMPIONATO.gironi = JSON.parse(stgironi);   

    //Aggiorno dati per gironi che non si caricano 
    CAMPIONATO.gironi.girone[9-1].dataInizio = new Date('2018-07-25');   
    CAMPIONATO.gironi.girone[9-1].dataFine = "";   
    CAMPIONATO.gironi.girone[9-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[9-1].giocatori = ["roberto_boe","rogergheser","pinandia","rolmas54"]; 
    CAMPIONATO.gironi.girone[11-1].dataInizio = new Date('2018-07-31');   
    CAMPIONATO.gironi.girone[11-1].dataFine = "02/10/2018";   
    CAMPIONATO.gironi.girone[11-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[11-1].giocatori = ["a550","simone_filaci"]; 
    CAMPIONATO.gironi.girone[21-1].dataInizio = new Date('2018-08-28');   
    CAMPIONATO.gironi.girone[21-1].dataFine = "30/10/2018";   
    CAMPIONATO.gironi.girone[21-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[21-1].giocatori = ["fungiat","stefano95lf","themoonlightknight"];   
    CAMPIONATO.gironi.girone[25-1].dataInizio = new Date('2018-09-07');   
    CAMPIONATO.gironi.girone[25-1].dataFine = "09/11/2018";   
    CAMPIONATO.gironi.girone[25-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[25-1].giocatori = ["nimzoblockade","thomyorkeandeeeeeed","dag_stinner","implacabile","asbana55"];   
    CAMPIONATO.gironi.girone[30-1].dataInizio = new Date('2018-09-16');   
    CAMPIONATO.gironi.girone[30-1].dataFine = "28/11/2018";   
    CAMPIONATO.gironi.girone[30-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[30-1].giocatori = ["mlamdmar","pieropare","tulpicanistan","silvio_pao"];   
    CAMPIONATO.gironi.girone[32-1].dataInizio = new Date('2018-09-21');   
    CAMPIONATO.gironi.girone[32-1].dataFine = "";   
    CAMPIONATO.gironi.girone[32-1].partiteTerminate = '27';   
    CAMPIONATO.gironi.girone[32-1].giocatori = ["saurosol","litantrace","mrcarokan","emanuelefratantuono","themoonlightknight"];   
    CAMPIONATO.gironi.girone[35-1].dataInizio = new Date('2018-09-26');   
    CAMPIONATO.gironi.girone[35-1].dataFine = "22/10/2018";   
    CAMPIONATO.gironi.girone[35-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[35-1].giocatori = ["saurosol","88arf","catenzo","profondonero","bntt84"];   
    CAMPIONATO.gironi.girone[36-1].dataInizio = new Date('2018-09-30');   
    CAMPIONATO.gironi.girone[36-1].dataFine = "02/11/2018";   
    CAMPIONATO.gironi.girone[36-1].partiteTerminate = '30';   
    CAMPIONATO.gironi.girone[36-1].giocatori = ["vittobet","kremont","fungiat","mlamdmar"];   
    CAMPIONATO.gironi.girone[47-1].dataInizio = new Date('2018-09-30');   
    CAMPIONATO.gironi.girone[47-1].dataFine = "";   
    CAMPIONATO.gironi.girone[47-1].partiteTerminate = '27';   
    CAMPIONATO.gironi.girone[47-1].giocatori = ["88arf","serbanleo","paolobenedetti","a550","fungiat"];   

//Girone 9								
username = 'roberto_boe';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"roberto_boe","displayName":"Roberto_Boe", "id":"https://www.chess.com/member/roberto_boe","avatar":"","elo":"", "punteggio":10.12, "vinte":8, "perse":1, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'rogergheser';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"rogergheser","displayName":"rogergheser", "id":"https://www.chess.com/member/rogergheser","avatar":"","elo":"", "punteggio":8.10, "vinte":7, "perse":3, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'pinandia';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"pinandia","displayName":"pinandia", "id":"https://www.chess.com/member/pinandia","avatar":"","elo":"", "punteggio":7.42, "vinte":5, "perse":4, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'rolmas54';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"rolmas54","displayName":"rolmas54", "id":"https://www.chess.com/member/rolmas54","avatar":"","elo":"", "punteggio":5.40, "vinte":5, "perse":5, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Girone 11								
								
username = 'simone_filaci';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"simone_filaci","displayName":"Simone_Filaci", "id":"https://www.chess.com/member/simone_filaci","avatar":"","elo":"", "punteggio":5.32, "vinte":4, "perse":6, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Girone 21								
								
								
username = 'stefano95lf';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"stefano95lf","displayName":"Stefano95LF", "id":"https://www.chess.com/member/stefano95lf","avatar":"","elo":"", "punteggio":5.12, "vinte":4, "perse":6, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
								
//Girone 25								
username = 'nimzoblockade';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"nimzoblockade","displayName":"Nimzoblockade", "id":"https://www.chess.com/member/nimzoblockade","avatar":"","elo":"", "punteggio":10.79, "vinte":7, "perse":2, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'thomyorkeandeeeeeed';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"thomyorkeandeeeeeed","displayName":"ThomYorkeAndEEEEEED", "id":"https://www.chess.com/member/thomyorkeandeeeeeed","avatar":"","elo":"", "punteggio":13.68, "vinte":9, "perse":0, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'dag_stinner';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"dag_stinner","displayName":"Dag_Stinner", "id":"https://www.chess.com/member/dag_stinner","avatar":"","elo":"", "punteggio":8.64, "vinte":5, "perse":3, "patte":2,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'implacabile';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"implacabile","displayName":"Implacabile", "id":"https://www.chess.com/member/implacabile","avatar":"","elo":"", "punteggio":7.19, "vinte":4, "perse":4, "patte":2,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'asbana55';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"asbana55","displayName":"Asbana55", "id":"https://www.chess.com/member/asbana55","avatar":"","elo":"", "punteggio":2.88, "vinte":2, "perse":8, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Girone 30								
								
username = 'pieropare';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"pieropare","displayName":"pieropare", "id":"https://www.chess.com/member/pieropare","avatar":"","elo":"", "punteggio":7.25, "vinte":8, "perse":2, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'tulpicanistan';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"tulpicanistan","displayName":"Tulpicanistan", "id":"https://www.chess.com/member/tulpicanistan","avatar":"","elo":"", "punteggio":5.80, "vinte":7, "perse":3, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'silvio_pao';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"silvio_pao","displayName":"silvio_pao", "id":"https://www.chess.com/member/silvio_pao","avatar":"","elo":"", "punteggio":0.0, "vinte":2, "perse":8, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Girono 32								
								
username = 'litantrace';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"litantrace","displayName":"Litantrace", "id":"https://www.chess.com/member/litantrace","avatar":"","elo":"", "punteggio":5.60, "vinte":4, "perse":4, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
username = 'mrcarokan';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"mrcarokan","displayName":"MrCarokan", "id":"https://www.chess.com/member/mrcarokan","avatar":"","elo":"", "punteggio":11.19, "vinte":8, "perse":0, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'emanuelefratantuono';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"emanuelefratantuono","displayName":"EmanueleFratantuono", "id":"https://www.chess.com/member/emanuelefratantuono","avatar":"","elo":"", "punteggio":5.60, "vinte":4, "perse":5, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Girone 35								
								
								
username = 'catenzo';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"catenzo","displayName":"Catenzo", "id":"https://www.chess.com/member/catenzo","avatar":"","elo":"", "punteggio":5.60, "vinte":4, "perse":6, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'profondonero';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"profondonero","displayName":"profondonero", "id":"https://www.chess.com/member/profondonero","avatar":"","elo":"", "punteggio":2.80, "vinte":2, "perse":8, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'bntt84';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"bntt84","displayName":"bntt84", "id":"https://www.chess.com/member/bntt84","avatar":"","elo":"", "punteggio":1.40, "vinte":1, "perse":9, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Girone 36								
username = 'vittobet';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"vittobet","displayName":"Vittobet", "id":"https://www.chess.com/member/vittobet","avatar":"","elo":"", "punteggio":10.64, "vinte":7, "perse":5, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'kremont';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"kremont","displayName":"kremont", "id":"https://www.chess.com/member/kremont","avatar":"","elo":"", "punteggio":10.64, "vinte":6, "perse":2, "patte":2,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
								
								
								
//Girono 47								
								
username = 'serbanleo';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"serbanleo","displayName":"serbanleo", "id":"https://www.chess.com/member/serbanleo","avatar":"","elo":"", "punteggio":1.39, "vinte":2, "perse":6, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'paolobenedetti';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"paolobenedetti","displayName":"paolobenedetti", "id":"https://www.chess.com/member/paolobenedetti","avatar":"","elo":"", "punteggio":2.78, "vinte":3, "perse":5, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
								
								
//Più gironi								
username = 'themoonlightknight';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"themoonlightknight","displayName":"TheMoonlightKnight", "id":"https://www.chess.com/member/themoonlightknight","avatar":"","elo":"", "punteggio":13.16, "vinte":10, "perse":9, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'mlamdmar';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"mlamdmar","displayName":"mlamdmar", "id":"https://www.chess.com/member/mlamdmar","avatar":"","elo":"", "punteggio":15.53, "vinte":13, "perse":6, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'saurosol';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"saurosol","displayName":"saurosol", "id":"https://www.chess.com/member/saurosol","avatar":"","elo":"", "punteggio":20.29, "vinte":15, "perse":4, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = '88arf';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"88arf","displayName":"88arf", "id":"https://www.chess.com/member/88arf","avatar":"","elo":"", "punteggio":18.12, "vinte":14, "perse":6, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'a550';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"a550","displayName":"A550", "id":"https://www.chess.com/member/a550","avatar":"","elo":"", "punteggio":6.83, "vinte":6, "perse":12, "patte":0,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
username = 'fungiat';CAMPIONATO.giocatori[username] = {}; stgiocatore = '{"username":"fungiat","displayName":"Fungiat", "id":"https://www.chess.com/member/fungiat","avatar":"","elo":"", "punteggio":36.71, "vinte":29, "perse":0, "patte":1,"gironi":"", "nTimeoutWin":0,  "nTimeoutWin3":0, "nTimeoutLost":0, "nTimeoutLost3":0, "nTimeoutGirone":0,  "nTimeoutGiallo":0,"stampato":false, "accountChiuso":false}';CAMPIONATO.giocatori[username] = JSON.parse(stgiocatore);								
    
    //Aggiorno eloDate
    for (var username in CAMPIONATO.giocatori) {
        CAMPIONATO.giocatori[username].eloDate = new Date("2018-01-01");
    }

//https://api.chess.com/pub/tournament/campionato-sociale-team-italia-doc-girone-1/1/1
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
                    if (! CAMPIONATO.gironi.girone[i].risultati.games & CAMPIONATO.gironi.girone[i].avviato & CAMPIONATO.gironi.girone[i].daCaricare) {
                        return;
                    }
                }
                //Tutti i gironi caricati
                CAMPIONATO.calcolaClassifica();
            }).error(function(jqXhr, textStatus, error) {
                //è andato in errore ricarico i dati
                CAMPIONATO.caricaDati(this.url);    
            });

    },
    calcolaClassifica: function()
    {
        var elo = 0;
        var png = '';
        //Per tutti i gironi
        for (var i in CAMPIONATO.gironi.girone) {

            //Aggiorno i gironi del giocatori
            for (var iPlayer in CAMPIONATO.gironi.girone[i].risultati.players) {
                var username = CAMPIONATO.gironi.girone[i].risultati.players[iPlayer].username;
                //Se non eliminato
                if (elimiati.indexOf(username.toLowerCase()) == -1) {
                    //Se non ho trovato giocatore lo aggiungo
                    if (!CAMPIONATO.giocatori[username.toLowerCase()])
                        CAMPIONATO.creaGiocatore(username);
                    //Se non ancora presente aggiungo il girone al giocatore
                    if (CAMPIONATO.giocatori[username.toLowerCase()].gironi.indexOf(CAMPIONATO.gironi.girone[i].nome) < 0)
                        CAMPIONATO.giocatori[username.toLowerCase()].gironi += '<a href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”>' + CAMPIONATO.gironi.girone[i].index + '</a> - ';
                    //Azzero contatori giocatore x girone
                    CAMPIONATO.giocatori[username.toLowerCase()].nTimeoutGirone = 0;
                }
            }

            //Per tutte le partite
            for (var iGames in CAMPIONATO.gironi.girone[i].risultati.games) {

                //Aggiorno la data di inizio girone. DA FARE prima del controllo della fine     
                if ( (! CAMPIONATO.gironi.girone[i].dataInizio) || (CAMPIONATO.gironi.girone[i].dataInizio > CAMPIONATO.gironi.girone[i].risultati.games[iGames].start_time))
                    CAMPIONATO.gironi.girone[i].dataInizio =CAMPIONATO.gironi.girone[i].risultati.games[iGames].start_time;

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
                var mosseOK = true; 
                png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                if (png.indexOf('4.') > -1)
                    mosseOk = true
                else
                    mosseOk = false;
                png = png.substring(png.indexOf('WhiteElo')+10);
                elo = png.substring(0, png.indexOf('"'));
                CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].white, elo, i, mosseOk, end_time, CAMPIONATO.gironi.girone[i].risultati.games[iGames].black);
                //Aggiorno punti nero
                png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                if (png.indexOf('3.') > -1)
                    mosseOk = true
                else
                    mosseOk = false;
                png = png.substring(png.indexOf('BlackElo')+10);
                elo = png.substring(0, png.indexOf('"'));
                CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].black, elo, i, mosseOk, end_time, CAMPIONATO.gironi.girone[i].risultati.games[iGames].white);
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

            //Se non ci sono elo da ricercare scrivo la tabella
            CAMPIONATO.scriviTabelle();


        }).error(function(jqXhr, textStatus, error) {
            //è andato in errore ricarico i dati
            CAMPIONATO.getEloUrl(this.url);    
        });

    },
    setPunti : function(risultato, elo, index, mosseOk, end_time, avversario) {

        //Aggiorno display name. E' l'unico punto in cui ha le maiuscole
        if (CAMPIONATO.giocatori[risultato.username.toLowerCase()])
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].displayName = risultato.username;

        //Calcolo sempre timeout
        if (risultato.result == 'timeout')
        {
            //se non è eliminato segno time out perso
            if (elimiati.indexOf(risultato.username.toLowerCase()) == -1)
            {
                if (mosseOk)
                    CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeoutLost ++
                else
                    CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeoutLost3 ++;
                //Aggiorno perse timeout per cartellini
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeoutGirone ++;
                if (CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeoutGirone == 2)
                    CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeoutGiallo ++;
            }
            //Assegno al vincitore
            if (elimiati.indexOf(avversario.username.toLowerCase()) == -1)
            {
                if (mosseOk)
                    CAMPIONATO.giocatori[avversario.username.toLowerCase()].nTimeoutWin ++
                else
                    CAMPIONATO.giocatori[avversario.username.toLowerCase()].nTimeoutWin3 ++;
            }
    }
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

        if (risultato.result == 'win')
        {
            //Vinto
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].punteggio += 1 * CAMPIONATO.gironi.girone[index].coefficiente;
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].vinte ++;
        } else {
            if ((risultato.result == 'agreed') || (risultato.result == 'repetition')  || (risultato.result == 'timevsinsufficient') || 
                (risultato.result == '50move') || (risultato.result == 'insufficient') || (risultato.result == 'stalemate')  ){
                //Patta
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].punteggio += 0.5 * CAMPIONATO.gironi.girone[index].coefficiente;
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].patte ++;
            } else {
                //Perso      
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].perse ++;
            }   
        }
    },
    scriviTabelle: function()
    {
        //Calcola classifica per fascie
        while (CAMPIONATO.calcolaClassificaFasciaB());
        posizione.N = 0;
        posizione.oldPunti = 0;
        posizione.oldVinte = 0;
        posizione.pari = 0;
        while (CAMPIONATO.calcolaClassificaFasciaC());

        //Tabella classifica
        posizione.N = 0;
        posizione.oldPunti = 0;
        posizione.oldVinte = 0;
        posizione.pari = 0;
        while (CAMPIONATO.scriviGiocatore());

        //In ultimo scrivo giocatori eliminati
        CAMPIONATO.scriviEliminati();
        //Tabella gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Se il girone non è iniziato non lo stampo
            if (! CAMPIONATO.gironi.girone[i].avviato)
                continue;
            //Se ho terminato tutte le partite scrivo in verde
            var colore = "";
            var dataFine = "";
            if (CAMPIONATO.gironi.girone[i].partiteTerminate == 30)
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
            '<td class="gironi-col">' + CAMPIONATO.gironi.girone[i].coefficiente + '</td> <td class="gironi-col">' + CAMPIONATO.gironi.girone[i].partiteTerminate + ' / 30</td> </tr>');
        }
    }
    ,
    calcolaClassificaFasciaB: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newVinte = -1;
        var giocatore;

        //Calcolo classifica 
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
            if (! giocatore.stampato & ! giocatore.accountChiuso & giocatore.elo > 1300 &  giocatore.elo < 1601 & ! giocatore.fasciaB) {
//                if (CAMPIONATO.giocatori[username].elo < 1301) {
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
        }
        //Azzero pari
        posizione.pari = 0;

        //Aggiorno posizione
        CAMPIONATO.giocatori[username].fasciaB = posizione.N;

        return true;
    },
    calcolaClassificaFasciaC: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newVinte = -1;
        var giocatore;

        //Calcolo classifica 
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
            if (! giocatore.stampato & ! giocatore.accountChiuso & giocatore.elo < 1301 & ! giocatore.fasciaC) {
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
        }
        //Azzero pari
        posizione.pari = 0;

        //Aggiorno posizione
        CAMPIONATO.giocatori[username].fasciaC = posizione.N;

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

        //Cartellino rosso. Lo considero stampato.
        //   verrà stampato in stampaEliminati
        if (CAMPIONATO.giocatori[username].nTimeoutGiallo > 1)
        {
            CAMPIONATO.giocatori[username].stampato = true;
            return true;
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
        }
        //Azzero pari
        posizione.pari = 0;

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
                //Fascia B - U1600
                if (CAMPIONATO.giocatori[username].elo > 1300 &  CAMPIONATO.giocatori[username].elo < 1601)
                {
                    if (posizione.N > 5 & CAMPIONATO.giocatori[username].fasciaB < 4)
                        stPosizione = '<img class="classifica-podio" src="img/fasciaB' + CAMPIONATO.giocatori[username].fasciaB + '.png">';
                    stPosizione += '<span style="font-size: 10px;"><BR>#' + CAMPIONATO.giocatori[username].fasciaB + ' U1600</span>';
                }
                //Fascia C - U1300
                if (CAMPIONATO.giocatori[username].elo < 1301)
                { 
                    if (posizione.N > 5 & CAMPIONATO.giocatori[username].fasciaC  < 4)
                        stPosizione = '<img class="classifica-podio" src="img/fasciaC' + CAMPIONATO.giocatori[username].fasciaC + '.png">';
                    stPosizione += '<span style="font-size: 10px;"><br>#' + CAMPIONATO.giocatori[username].fasciaC + ' U1300</span>';
                }
            } else {
                //Torneo non finito, non visualizzo immagini
                if (CAMPIONATO.giocatori[username].elo > 1300 &  CAMPIONATO.giocatori[username].elo < 1601)
               {
                    stPosizione += '<span style="font-size: 10px;"><BR>#' + CAMPIONATO.giocatori[username].fasciaB + ' U1600</span>';
               }
               //Fascia C
               if (CAMPIONATO.giocatori[username].elo < 1301)
                {     
                    stPosizione += '<span style="font-size: 10px;"><br>#' + CAMPIONATO.giocatori[username].fasciaC + ' U1300</span>';
                }
            }
        }    
       //----------------- FINE POSIZIONE 

       //Prepara riga per timeout
       var stTimeout = '';
        if (CAMPIONATO.giocatori[username].nTimeoutGiallo == 1)
            stTimeout = '<img class="classifica-cartellino" src="img/giallo.png">';
        // se amministratore stampo timeout punti
        if (CAMPIONATO.isAdmin)
        {
            if (CAMPIONATO.giocatori[username].nTimeoutLost > 0 || CAMPIONATO.giocatori[username].nTimeoutLost3 > 0 ||
                CAMPIONATO.giocatori[username].nTimeoutWin > 0 || CAMPIONATO.giocatori[username].nTimeoutWin3 > 0)
            {
                stTimeout += '<BR><span class="game-win" style="font-size: 12px;">' +  CAMPIONATO.giocatori[username].nTimeoutWin + ' - '  + CAMPIONATO.giocatori[username].nTimeoutWin3 + ' W</span> / '+
                            '<span class="game-lost" style="font-size: 12px;">' +  CAMPIONATO.giocatori[username].nTimeoutLost + ' - '  + CAMPIONATO.giocatori[username].nTimeoutLost3 + ' L</span>';
            }
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
            '<td class="classifica-col3">' + CAMPIONATO.giocatori[username].punteggio.toFixed(2) +'</td>' +
            '<td class="classifica-col4"> <span class="game-win">' +  CAMPIONATO.giocatori[username].vinte + ' W</span> /'+
                '<span class="game-lost">' +  CAMPIONATO.giocatori[username].perse + ' L</span> /' +
                '<span class="game-draw">' +  CAMPIONATO.giocatori[username].patte + ' D</span>' +
            '</td>' +
            '<td class="classifica-col5">' +stTimeout + '</td>' +
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

            //Prepara riga per timeout
            var stTimeout = '';
            if (giocatore.nTimeoutGiallo > 1 & ! giocatore.accountChiuso)
            {
                stTimeout = '<img class="classifica-cartellino" src="img/rosso.png">';
                daStampare = true;
            }
            //Se admin stampo anche gli account chiusi
            if (CAMPIONATO.isAdmin & giocatore.accountChiuso)
            {
                stTimeout = 'Account chiuso';
                daStampare = true;
            }

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
                    '<td class="classifica-col5">' +stTimeout + '</td>' +
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
        CAMPIONATO.giocatori[username].punteggio = 0;
        CAMPIONATO.giocatori[username].vinte = 0;
        CAMPIONATO.giocatori[username].perse = 0;
        CAMPIONATO.giocatori[username].patte = 0;
        CAMPIONATO.giocatori[username].gironi = '';
        CAMPIONATO.giocatori[username].nTimeoutWin = 0;
        CAMPIONATO.giocatori[username].nTimeoutWin3 = 0;
        CAMPIONATO.giocatori[username].nTimeoutLost = 0;
        CAMPIONATO.giocatori[username].nTimeoutLost3 = 0;
        CAMPIONATO.giocatori[username].nTimeoutGirone = 0;
        CAMPIONATO.giocatori[username].nTimeoutGiallo = 0;
        CAMPIONATO.giocatori[username].stampato = false;
        CAMPIONATO.giocatori[username].accountChiuso = false;
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


