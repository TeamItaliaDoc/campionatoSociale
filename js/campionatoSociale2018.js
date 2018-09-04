//METTERE SEMPRE MINUSCOLO
var elimiati = ["danieletar", "never_walk_alone", "vincenzovanaria", "pysse", "miki1701", "aracine", "jbg12618", "nr051162", "lieissvi", "mastertom2040"];
var posizione = {"N": 0,"punti" : 0, "pari" : 0}
var okAvatar = false;

CAMPIONATO = {
    gironi: {},
    giocatori: [],

    inizializzaGironi: function()
    { 
        stgironi = '{"girone": [';
        stgironi += '{"index": "1", "nome": "campionato-sociale-team-italia-doc-girone-1", "descrizione" : "1", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.41", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        //stgironi += ',{"index": "2", "nome": "campionato-sociale-team-italia-doc-girone-2", "descrizione" : "2", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.34", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "2", "nome": "campionato-sociale-team-italia-doc-girone-2", "descrizione" : "2", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.51", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "3", "nome": "campionato-sociale-team-italia-doc-girone-3", "descrizione" : "3", "inizio" : "19/07/2018", "fine" : "06/08/2018", "coefficiente" : "1.36", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "4", "nome": "campionato-sociale-team-italia-doc-girone-4", "descrizione" : "4", "inizio" : "19/07/2018", "fine" : "", "coefficiente" : "1.37", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "5", "nome": "campionato-sociale-team-italia-doc-girone-5", "descrizione" : "5", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.18", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "6", "nome": "campionato-sociale-team-italia-doc-girone-6", "descrizione" : "6", "inizio" : "19/07/2018", "fine" : "", "coefficiente" : "1.10", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "7", "nome": "campionato-sociale-team-italia-doc-girone-7", "descrizione" : "7", "inizio" : "18/07/2018", "fine" : "12/08/2018", "coefficiente" : "1.24", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "8", "nome": "campionato-sociale-team-italia-doc-girone-8", "descrizione" : "8", "inizio" : "24/07/2018", "fine" : "", "coefficiente" : "1.45", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "9", "nome": "campionato-sociale-team-italia-doc-girone-9", "descrizione" : "9", "inizio" : "25/07/2018", "fine" : "", "coefficiente" : "1.35", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "10", "nome": "campionato-sociale-team-italia-doc-girone-10", "descrizione" : "10", "inizio" : "28/07/2018", "fine" : "", "coefficiente" : "1.06", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "11", "nome": "campionato-sociale-team-italia-doc-girone-11", "descrizione" : "11", "inizio" : "31/07/2018", "fine" : "", "coefficiente" : "1.33", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "12", "nome": "campionato-sociale-team-italia-doc-2018-girone-12", "descrizione" : "12", "inizio" : "06/08/2018", "fine" : "", "coefficiente" : "1.26", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "13", "nome": "campionato-sociale-team-italia-doc-2018-girone-13", "descrizione" : "13", "inizio" : "09/08/2018", "fine" : "", "coefficiente" : "1.39", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "14", "nome": "campionato-sociale-team-italia-doc-2018-girone-14", "descrizione" : "14", "inizio" : "11/08/2018", "fine" : "", "coefficiente" : "1.41", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "15", "nome": "campionato-sociale-team-italia-doc-2018-girone-15", "descrizione" : "15", "inizio" : "17/08/2018", "fine" : "", "coefficiente" : "1.05", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "16", "nome": "campionato-sociale-team-italia-doc-2018-girone-16", "descrizione" : "16", "inizio" : "19/08/2018", "fine" : "", "coefficiente" : "1.28", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "17", "nome": "campionato-sociale-team-italia-doc-girone-17", "descrizione" : "17", "inizio" : "23/08/2018", "fine" : "", "coefficiente" : "1.20", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "18", "nome": "campionato-sociale-team-italia-doc-girone-18", "descrizione" : "18", "inizio" : "23/08/2018", "fine" : "", "coefficiente" : "1.39", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "19", "nome": "campionato-sociale-team-italia-doc-2018-girone-19", "descrizione" : "19", "inizio" : "25/08/2018", "fine" : "", "coefficiente" : "1.35", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "20", "nome": "campionato-sociale-team-italia-doc-2018-girone-20", "descrizione" : "20", "inizio" : "27/08/2018", "fine" : "", "coefficiente" : "1.42", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "21", "nome": "campionato-sociale-team-italia-doc-2018-girone-21", "descrizione" : "21", "inizio" : "28/08/2018", "fine" : "", "coefficiente" : "1.28", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "22", "nome": "campionato-sociale-team-italia-doc-2018-girone-22", "descrizione" : "22", "inizio" : "31/08/2018", "fine" : "", "coefficiente" : "1.42", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "23", "nome": "campionato-sociale-team-italia-doc-2018-girone-23", "descrizione" : "23", "inizio" : "03/09/2018", "fine" : "", "coefficiente" : "1.06", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        //stgironi += ',{"index": "24", "nome": "campionato-sociale-team-italia-doc-2018-girone-24", "descrizione" : "24", "inizio" : "", "fine" : "", "coefficiente" : "1.", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        //stgironi += ',{"index": "", "nome": "campionato-sociale-team-italia-doc-2018-girone-", "descrizione" : "", "inizio" : "", "fine" : "", "coefficiente" : "1.", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ']}';

        CAMPIONATO.gironi = JSON.parse(stgironi);   

//https://api.chess.com/pub/tournament/campionato-sociale-team-italia-doc-girone-3/1/1
        //Carico i dati di tuti i gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Leggo i dati del girone
            $.getJSON('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/1/1',function(dataGirone){
                //Carico dati
                for (var iGirone in CAMPIONATO.gironi.girone) {
                    if ('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[iGirone].nome == dataGirone.games[0].tournament)
                    {
                        CAMPIONATO.gironi.girone[iGirone].risultati = dataGirone;    
                    }
                }
                //Se ho caricato tutti i dati calcolo la classifica
                for (var i in CAMPIONATO.gironi.girone) {
                    if (! CAMPIONATO.gironi.girone[i].risultati.games) {
                        return;
                    }
                }
                //Tutti i gironi caricati
                CAMPIONATO.calcolaClassifica();
            })
            //Attendo altrimenti si potrebbe piantare
            setTimeout(500);
        }
    },

    calcolaClassifica: function()
    {
        var elo = 0;
        var png = '';
        //Per tutti i gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Per tutte le partite
            for (var iGames in CAMPIONATO.gironi.girone[i].risultati.games) {
                //Se non definita turn la partia è ancora finita
                if (! CAMPIONATO.gironi.girone[i].risultati.games[iGames].turn) {
                    //Aggiorno partite finite
                    CAMPIONATO.gironi.girone[i].partiteTernimate ++;
                    //Aggiorno punti bianco
                    //Calcolo punteggio se sono state fatte più di tre mosse.
                    png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                    if (png.indexOf('4.') > -1)
                    {
                        png = png.substring(png.indexOf('WhiteElo')+10);
                        elo = png.substring(0, png.indexOf('"'));
                        CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].white, elo, i);
                    }
                    //Aggiorno punti nero
                    png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                    if (png.indexOf('3.') > -1)
                    {
                        png = png.substring(png.indexOf('BlackElo')+10);
                        elo = png.substring(0, png.indexOf('"'));
                        CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].black, elo, i);
                    }
                }
                //Aggiorno partite del torneo
                CAMPIONATO.gironi.girone[i].partiteTotali ++;
            }
        }

        //Ricerco avatar
        CAMPIONATO.getAvatar();

    },
    getAvatar : function()
    {
        //Cerco il primo giocatore di cui non so ancora il avatar
        //  Potrebbe essere andata in erore l'api di ricerca profilo
        for (var username in CAMPIONATO.giocatori) {
            if (! CAMPIONATO.giocatori[username].avatar) {
                //Cerco rating
                $.getJSON('https://api.chess.com/pub/player/' + username,function(dataAvatar){
                    if (dataAvatar.avatar) {
                        CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = dataAvatar.avatar;
                    } else {
                        CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg ";
                    }
                    //Se non ho caricato tuti gli avatar esengo ancora la funzione
                    for (var username in CAMPIONATO.giocatori) {
                        if (! CAMPIONATO.giocatori[username].avatar) {
                            CAMPIONATO.getAvatar();
                            return;
                        }
                    }
                    //Finito calcolo. Scrivo i risultati 
                    if (! okAvatar)
                    {
                        okAvatar = true;   
                        CAMPIONATO.scriviTabelle();
                    }
                })
                //Ho eseguito il getJSON devo uscire dalla funzione
                return;
            }
        }    
    },
    setPunti : function(risultato, elo, index) {
        //Se eliminato esco
        if (elimiati.indexOf(risultato.username.toLowerCase()) > -1)
            return;
        //Se non ho trovato giocatore lo aggiungo
        if (!CAMPIONATO.giocatori[risultato.username.toLowerCase()])
        {
            CAMPIONATO.creaGiocatore(risultato.username.toLowerCase());
        };
        //Aggiorno sempre elo
        CAMPIONATO.giocatori[risultato.username.toLowerCase()].elo = elo;
        //Calcolo punteggio
        if (risultato.result == 'win')
        {
            //Vinto
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].punteggio += 1 * CAMPIONATO.gironi.girone[index].coefficiente;
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].vinte ++;
        } else {
            if (risultato.result == 'agreed') {
                //Patta
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].punteggio += 0.5 * CAMPIONATO.gironi.girone[index].coefficiente;
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].patte ++;
            } else {
                //Perso      
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].perse ++;
            }   
        }
        if (CAMPIONATO.giocatori[risultato.username.toLowerCase()].gironi.indexOf(CAMPIONATO.gironi.girone[index].nome) < 0)
        {
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].gironi += '<a href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[index].nome + '/pairings/" target=”_blank”>' + CAMPIONATO.gironi.girone[index].index + '</a> - ';
        }
    },
    scriviTabelle: function()
    {
        //Tabella classifica
        while (CAMPIONATO.scriviGiocatore());


        //Tabella gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Se ho terminato tutte le partite scrivo in verde
            var colore = "";
            if (CAMPIONATO.gironi.girone[i].partiteTernimate == CAMPIONATO.gironi.girone[i].partiteTotali)
                colore = 'style="color:green!important"';
            $("#gironi").append('<tr  ' + colore + ' class="gironi-giocatori"> <td class="gironi-col1"><a class="username" href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”> #' +
            CAMPIONATO.gironi.girone[i].descrizione + '</a></td><td class="gironi-col">' + CAMPIONATO.gironi.girone[i].inizio + '</td> <td class="gironi-col">' + CAMPIONATO.gironi.girone[i].fine + '</td> ' +
            '<td class="gironi-col">' + CAMPIONATO.gironi.girone[i].coefficiente + '</td> <td class="gironi-col">' + CAMPIONATO.gironi.girone[i].partiteTernimate + ' / ' +  CAMPIONATO.gironi.girone[i].partiteTotali + '</td> </tr>');
        }
    }
    ,
    scriviGiocatore: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var punteggio = -1;
        for (var i in CAMPIONATO.giocatori) {
            if ((! CAMPIONATO.giocatori[i].stampato) && (CAMPIONATO.giocatori[i].punteggio > punteggio)) {
                punteggio = CAMPIONATO.giocatori[i].punteggio;
                username = i;
            }
        }

        if (username == "")
        {
            return false;
        }

        //Aggiorno posizione
        if (CAMPIONATO.giocatori[username].punteggio == posizione.punti)
        {
            posizione.pari ++;
        } else {
            posizione.N += posizione.pari + 1;
            posizione.punti = CAMPIONATO.giocatori[username].punteggio;
            posizione.pari = 0;
        }
        //stampo riga    
        $("#giocatori").append('<tr class="classifica-giocatori">' +
            '<td class="classifica-col1">#' + posizione.N + '</td>' + 
            '<td class="classifica-col2">' +
            '    <table><tr>' +
            '        <td>' +
            '        <img class="classifica-avatar" src="' + CAMPIONATO.giocatori[username].avatar + '">' +
            '    </td>' +
            '    <td width=7px></td>' +
            '    <td><div>' +
            '            <a class="username" href="' + CAMPIONATO.giocatori[username].id + '" target=”_blank”> ' + CAMPIONATO.giocatori[username].username + '</a>' +
            //'            <img class="classifica-country" src="' + CAMPIONATO.giocatori[username].country + '">' +
            '        </div> <div>  (' + CAMPIONATO.giocatori[username].elo + ') </div>' +
            '        </td>' +    
            '    </tr></table>' +
            '</td>' +
            '<td class="classifica-col3">' + CAMPIONATO.giocatori[username].punteggio.toFixed(2) +'</td>' +
            '<td class="classifica-col4"> <span class="game-win">' +  CAMPIONATO.giocatori[username].vinte + ' W</span> /'+
                '<span class="game-loss">' +  CAMPIONATO.giocatori[username].perse + ' L</span> /' +
                '<span class="game-draw">' +  CAMPIONATO.giocatori[username].patte + ' D</span>' +
            '</td>' +
            '<td class="classifica-col5"></td>' +
            '<td class="classifica-col6">' + CAMPIONATO.giocatori[username].gironi.substr(0, CAMPIONATO.giocatori[username].gironi.length -2)  + '</td>' +
            '</tr>'
            );

            //Flag per non stampare più questo giocatore
            CAMPIONATO.giocatori[username].stampato = true;
            return true;
    },
    creaGiocatore : function(username)
    {
        CAMPIONATO.giocatori[username] = {};
        CAMPIONATO.giocatori[username].username = username;
        CAMPIONATO.giocatori[username].id = 'https://www.chess.com/member/' + username;
        CAMPIONATO.giocatori[username].avatar = '';
        //CAMPIONATO.giocatori[username].country = '';
        CAMPIONATO.giocatori[username].elo = 0;
        CAMPIONATO.giocatori[username].punteggio = 0;
        CAMPIONATO.giocatori[username].vinte = 0;
        CAMPIONATO.giocatori[username].perse = 0;
        CAMPIONATO.giocatori[username].patte = 0;
        CAMPIONATO.giocatori[username].gironi = '';
        CAMPIONATO.giocatori[username].nTimeout = 0;
        CAMPIONATO.giocatori[username].stampato = false;
        $.getJSON('https://api.chess.com/pub/player/' + username,function(dataAvatar){
            if (dataAvatar.avatar) {
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = dataAvatar.avatar;
            } else {
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg ";
            }
        })    

    }
 }


     /*
      CLASSIFICA: MichaelGallo (5,5) punti 7,48. Teate70 (4,5) punti 6,12. TempestaPerfetta87 (4) punti 5,44. Ricordo 
      */
