//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
//METTERE SEMPRE MINUSCOLO
var elimiati = ["danieletar", "never_walk_alone", "miki1701", "aracine", "jbg12618", "nr051162", "lieissvi", "mastertom2040", "costadeipirati","ricci888"];
var posizione = {"N": 0, "fasciaB" : 0, "fasciaC" : 0, "pari" : 0,"oldPunti" : 0, "oldVinte" : 0, "oldPerse" : 0, "oldNPartite" : 0}
var fineTorneo = new Date("2019-01-01"); 

CAMPIONATO = {
    gironi: {},
    giocatori: [],
    scriviTabelleRun: false,


    inizializzaGironi: function()
    { 
        stgironi = '{"girone": [';
        stgironi += '{"index": "1", "nome": "campionato-sociale-team-italia-doc-girone-1", "descrizione" : "1", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.41", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "2", "nome": "campionato-sociale-team-italia-doc-girone-2", "descrizione" : "2", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.51", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "3", "nome": "campionato-sociale-team-italia-doc-girone-3", "descrizione" : "3", "inizio" : "19/07/2018", "fine" : "06/08/2018", "coefficiente" : "1.36", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "4", "nome": "campionato-sociale-team-italia-doc-girone-4", "descrizione" : "4", "inizio" : "19/07/2018", "fine" : "", "coefficiente" : "1.37", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "5", "nome": "campionato-sociale-team-italia-doc-girone-5", "descrizione" : "5", "inizio" : "20/07/2018", "fine" : "", "coefficiente" : "1.18", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "6", "nome": "campionato-sociale-team-italia-doc-girone-6", "descrizione" : "6", "inizio" : "19/07/2018", "fine" : "", "coefficiente" : "1.10", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "7", "nome": "campionato-sociale-team-italia-doc-girone-7", "descrizione" : "7", "inizio" : "18/07/2018", "fine" : "12/08/2018", "coefficiente" : "1.24", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "8", "nome": "campionato-sociale-team-italia-doc-girone-8", "descrizione" : "8", "inizio" : "24/07/2018", "fine" : "", "coefficiente" : "1.45", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "9", "nome": "campionato-sociale-team-italia-doc-girone-9", "descrizione" : "9", "inizio" : "25/07/2018", "fine" : "", "coefficiente" : "1.35", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "10", "nome": "campionato-sociale-team-italia-doc-girone-10", "descrizione" : "10", "inizio" : "28/07/2018", "fine" : "13/09/2018", "coefficiente" : "1.17", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "11", "nome": "campionato-sociale-team-italia-doc-girone-11", "descrizione" : "11", "inizio" : "31/07/2018", "fine" : "", "coefficiente" : "1.33", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "12", "nome": "campionato-sociale-team-italia-doc-2018-girone-12", "descrizione" : "12", "inizio" : "06/08/2018", "fine" : "", "coefficiente" : "1.26", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "13", "nome": "campionato-sociale-team-italia-doc-2018-girone-13", "descrizione" : "13", "inizio" : "09/08/2018", "fine" : "", "coefficiente" : "1.39", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "14", "nome": "campionato-sociale-team-italia-doc-2018-girone-14", "descrizione" : "14", "inizio" : "11/08/2018", "fine" : "", "coefficiente" : "1.41", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "15", "nome": "campionato-sociale-team-italia-doc-2018-girone-15", "descrizione" : "15", "inizio" : "17/08/2018", "fine" : "", "coefficiente" : "1.05", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "16", "nome": "campionato-sociale-team-italia-doc-2018-girone-16", "descrizione" : "16", "inizio" : "19/08/2018", "fine" : "", "coefficiente" : "1.28", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "17", "nome": "campionato-sociale-team-italia-doc-girone-17", "descrizione" : "17", "inizio" : "23/08/2018", "fine" : "", "coefficiente" : "1.20", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "18", "nome": "campionato-sociale-team-italia-doc-girone-18", "descrizione" : "18", "inizio" : "23/08/2018", "fine" : "", "coefficiente" : "1.39", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "19", "nome": "campionato-sociale-team-italia-doc-2018-girone-19", "descrizione" : "19", "inizio" : "25/08/2018", "fine" : "", "coefficiente" : "1.35", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "20", "nome": "campionato-sociale-team-italia-doc-2018-girone-20", "descrizione" : "20", "inizio" : "27/08/2018", "fine" : "", "coefficiente" : "1.42", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "21", "nome": "campionato-sociale-team-italia-doc-2018-girone-21", "descrizione" : "21", "inizio" : "28/08/2018", "fine" : "", "coefficiente" : "1.28", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "22", "nome": "campionato-sociale-team-italia-doc-2018-girone-22", "descrizione" : "22", "inizio" : "31/08/2018", "fine" : "", "coefficiente" : "1.42", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "23", "nome": "campionato-sociale-team-italia-doc-2018-girone-23", "descrizione" : "23", "inizio" : "03/09/2018", "fine" : "", "coefficiente" : "1.06", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "24", "nome": "campionato-sociale-team-italia-doc-2018-girone-24", "descrizione" : "24", "inizio" : "04/09/2018", "fine" : "", "coefficiente" : "0.90", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "25", "nome": "campionato-sociale-team-italia-doc-2018-girone-25", "descrizione" : "25", "inizio" : "07/09/2018", "fine" : "", "coefficiente" : "1.44", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "26", "nome": "campionato-sociale-team-italia-doc-2018-girone-26", "descrizione" : "26", "inizio" : "08/09/2018", "fine" : "", "coefficiente" : "1.46", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "27", "nome": "campionato-sociale-team-italia-doc-2018-girone-27", "descrizione" : "27", "inizio" : "11/09/2018", "fine" : "", "coefficiente" : "1.07", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "28", "nome": "campionato-sociale-team-italia-doc-2018-girone-28", "descrizione" : "28", "inizio" : "13/09/2018", "fine" : "", "coefficiente" : "1.23", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "29", "nome": "campionato-sociale-team-italia-doc-2018-girone-29", "descrizione" : "29", "inizio" : "14/09/2018", "fine" : "", "coefficiente" : "1.48", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "30", "nome": "campionato-sociale-team-italia-doc-2018-girone-30", "descrizione" : "30", "inizio" : "16/09/2018", "fine" : "", "coefficiente" : "1.45", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "31", "nome": "campionato-sociale-team-italia-doc-2018-girone-31", "descrizione" : "31", "inizio" : "17/09/2018", "fine" : "", "coefficiente" : "1.40", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "32", "nome": "campionato-sociale-team-italia-doc-2018-girone-32", "descrizione" : "32", "inizio" : "21/09/2018", "fine" : "", "coefficiente" : "1.40", "partiteTernimate" : "0", "risultati" : "{}"}';
        //stgironi += ',{"index": "", "nome": "campionato-sociale-team-italia-doc-2018-girone-", "descrizione" : "", "inizio" : "", "fine" : "", "coefficiente" : "1.", "partiteTernimate" : "0", "risultati" : "{}"}';
        stgironi += ']}';

        CAMPIONATO.gironi = JSON.parse(stgironi);   

//https://api.chess.com/pub/tournament/campionato-sociale-team-italia-doc-girone-1/1/1
        //Carico i dati di tuti i gironi
        for (var i in CAMPIONATO.gironi.girone) {
            CAMPIONATO.caricaDati('https://api.chess.com/pub/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/1/1');
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
                    if (! CAMPIONATO.gironi.girone[i].risultati.games) {
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
                }
            }

            //Per tutte le partite
            for (var iGames in CAMPIONATO.gironi.girone[i].risultati.games) {
                //Se non definita end_time la partita non è finita
                if (! CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time )
                    continue; 
                
                //controllo se non ha superato la data di fine torneo
                var myObj = $.parseJSON('{"date_created":"' + CAMPIONATO.gironi.girone[i].risultati.games[iGames].end_time + '"}'),
                myDate = new Date(1000*myObj.date_created);
                if (myDate > fineTorneo)
                   continue;    
                
                //Aggiorno partite finite
                CAMPIONATO.gironi.girone[i].partiteTernimate ++;
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
                CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].white, elo, i, mosseOk, CAMPIONATO.gironi.girone[i].risultati.games[iGames].black);
                //Aggiorno punti nero
                png = CAMPIONATO.gironi.girone[i].risultati.games[iGames].pgn;
                if (png.indexOf('3.') > -1)
                    mosseOk = true
                else
                    mosseOk = false;
                png = png.substring(png.indexOf('BlackElo')+10);
                elo = png.substring(0, png.indexOf('"'));
                CAMPIONATO.setPunti(CAMPIONATO.gironi.girone[i].risultati.games[iGames].black, elo, i, mosseOk, CAMPIONATO.gironi.girone[i].risultati.games[iGames].white);
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
                CAMPIONATO.giocatori[dataAvatar.username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg ";
            }
            //Se non ho caricato tuti gli avatar esengo ancora la funzione
            for (var username in CAMPIONATO.giocatori) {
                if (! CAMPIONATO.giocatori[username].avatar) {
                    return;
                }
            }
            //Finito calcolo. Scrivo i risultati 
            //   Controllo se è già partita la fase di scrittura
            //      se arrivano contemporaneamente più caricamenti potrebbe succedere
            if (! CAMPIONATO.scriviTabelleRun)
            {
                CAMPIONATO.scriviTabelleRun = true;
                CAMPIONATO.scriviTabelle();
            }
        }).error(function(jqXhr, textStatus, error) {
            //è andato in errore ricarico i dati
            CAMPIONATO.getAvatarUrl(this.url);    
        });

    },
    setPunti : function(risultato, elo, index, mosseOk, avversario) {
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
        //Aggiorno sempre elo
        CAMPIONATO.giocatori[risultato.username.toLowerCase()].elo = elo;
        //Se non sono state fatte le 3 mosse non aggiorno punti
        if (! mosseOk)
            return;
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
    },
    scriviTabelle: function()
    {
        //Tabella classifica
        while (CAMPIONATO.scriviGiocatore());


        //Tabella gironi
        for (var i in CAMPIONATO.gironi.girone) {
            //Se ho terminato tutte le partite scrivo in verde
            var colore = "";
            if (CAMPIONATO.gironi.girone[i].partiteTernimate == 30)
                colore = 'style="color:green!important"';
            $("#gironi").append('<tr  ' + colore + ' class="gironi-giocatori"> <td class="gironi-col1"><a class="username" href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”> #' +
            CAMPIONATO.gironi.girone[i].descrizione + '</a></td><td class="gironi-col">' + CAMPIONATO.gironi.girone[i].inizio + '</td> <td class="gironi-col">' + CAMPIONATO.gironi.girone[i].fine + '</td> ' +
            '<td class="gironi-col">' + CAMPIONATO.gironi.girone[i].coefficiente + '</td> <td class="gironi-col">' + CAMPIONATO.gironi.girone[i].partiteTernimate + ' / 30</td> </tr>');
        }
    }
    ,
    scriviGiocatore: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var newPunteggio = -1;
        var newVinte = -1;
        var newPerse = -1;
        var newNPartite = -1;
        var giocatore;
        for (var i in CAMPIONATO.giocatori) {
            giocatore = CAMPIONATO.giocatori[i];
            if (! giocatore.stampato) {
                if  ((giocatore.punteggio > newPunteggio) |
                     ((giocatore.punteggio == newPunteggio) & (giocatore.vinte > newVinte) ) |
                     ((giocatore.punteggio == newPunteggio) & (giocatore.vinte == newVinte) & (giocatore.perse < newPerse)) |
                     ((giocatore.punteggio == newPunteggio) & (giocatore.vinte == newVinte) & (giocatore.perse == newPerse) & (giocatore.vinte + giocatore.perse + giocatore.patte > newNPartite) )
                    )          
                {
                    newPunteggio = giocatore.punteggio;
                    newVinte = giocatore.vinte;
                    newPerse = giocatore.perse;
                    newNPartite = giocatore.vinte + giocatore.perse + giocatore.patte;
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
            (newVinte == posizione.oldVinte) &
            (newPerse == posizione.oldPerse) &
            (newNPartite == posizione.oldNPartite))
        {
            posizione.pari ++;
        } else {
            posizione.N += posizione.pari + 1;
            posizione.oldPunti = newPunteggio;
            posizione.oldVinte = newVinte;
            posizione.oldPerse = newPerse;
            posizione.oldNPartite = newNPartite;
            //Aggiorno posizioni fascia
            if (CAMPIONATO.giocatori[username].elo > 1299 &  CAMPIONATO.giocatori[username].elo < 1500)
                posizione.fasciaB += posizione.pari + 1;
            if (CAMPIONATO.giocatori[username].elo < 1300)
                posizione.fasciaC += posizione.pari + 1;
            //Azzero pari
            posizione.pari = 0;
        }
        //La posizione potrebbe contenere delle immagini
        var stPosizione = '#' + posizione.N;
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
        //Fascia B
        if (posizione.N > 5 & CAMPIONATO.giocatori[username].elo > 1299 &  CAMPIONATO.giocatori[username].elo < 1500)
        {
            if (posizione.fasciaB < 4)
                stPosizione = '<img class="classifica-podio" src="img/fasciaB' + posizione.fasciaB + '.png"><BR>#' + posizione.fasciaB + ' Fascia B';
            else
                stPosizione += '<span style="font-size: 10px;"><BR>#' + posizione.fasciaB + ' Fascia B</span>';
        }
        //Fascia C
        if (posizione.N > 5 & CAMPIONATO.giocatori[username].elo < 1300)
        { 
            if (posizione.fasciaC  < 4)
                stPosizione = '<img class="classifica-podio" src="img/fasciaC' + posizione.fasciaC + '.png"><BR>#' + posizione.fasciaC + ' Fascia C';
            else
                stPosizione += '<span style="font-size: 10px;"><br>#' + posizione.fasciaC + ' Fascia C</span>';
        }
        //Prepara riga per timeout
        var stTimeout = '';
        if (CAMPIONATO.giocatori[username].nTimeoutLost > 0 || CAMPIONATO.giocatori[username].nTimeoutLost3 > 0 ||
            CAMPIONATO.giocatori[username].nTimeoutWin > 0 || CAMPIONATO.giocatori[username].nTimeoutWin3 > 0)
        {
            stTimeout = '<span class="game-win">' +  CAMPIONATO.giocatori[username].nTimeoutWin + ' - '  + CAMPIONATO.giocatori[username].nTimeoutWin3 + ' W</span> / '+
                        '<span class="game-lost">' +  CAMPIONATO.giocatori[username].nTimeoutLost + ' - '  + CAMPIONATO.giocatori[username].nTimeoutLost3 + ' L</span>';
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
            '<td class="classifica-col7">' + CAMPIONATO.giocatori[username].gironi.substr(0, CAMPIONATO.giocatori[username].gironi.length -2)  + '</td>' +
            '</tr>'
            );

            //Flag per non stampare più questo giocatore
            CAMPIONATO.giocatori[username].stampato = true;
            return true;
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
        CAMPIONATO.giocatori[username].punteggio = 0;
        CAMPIONATO.giocatori[username].vinte = 0;
        CAMPIONATO.giocatori[username].perse = 0;
        CAMPIONATO.giocatori[username].patte = 0;
        CAMPIONATO.giocatori[username].gironi = '';
        CAMPIONATO.giocatori[username].nTimeoutWin = 0;
        CAMPIONATO.giocatori[username].nTimeoutWin3 = 0;
        CAMPIONATO.giocatori[username].nTimeoutLost = 0;
        CAMPIONATO.giocatori[username].nTimeoutLost3 = 0;
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


