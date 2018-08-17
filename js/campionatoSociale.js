var posizione = {"N": 0,"punti" : 0, "pari" : 0}
var okAvatar = false;

CAMPIONATO = {
    gironi: {},
    giocatori: [],

    inizializzaGironi: function()
    { 
        stgironi = '{"girone": [';
        stgironi += '{"index": "1", "nome": "campionato-sociale-team-italia-doc-girone-1", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 1", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}'; 
        stgironi += ',{"index": "2", "nome": "campionato-sociale-team-italia-doc-girone-2", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 2", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "3", "nome": "campionato-sociale-team-italia-doc-girone-3", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 3", "coefficiente" : "1.36", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "4", "nome": "campionato-sociale-team-italia-doc-girone-4", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 4", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "5", "nome": "campionato-sociale-team-italia-doc-girone-5", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 5", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "6", "nome": "campionato-sociale-team-italia-doc-girone-6", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 6", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "7", "nome": "campionato-sociale-team-italia-doc-girone-7", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 7", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "8", "nome": "campionato-sociale-team-italia-doc-girone-8", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 8", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "9", "nome": "campionato-sociale-team-italia-doc-girone-9", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 9", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "10", "nome": "campionato-sociale-team-italia-doc-girone-10", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 10", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "11", "nome": "campionato-sociale-team-italia-doc-girone-11", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 11", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "12", "nome": "campionato-sociale-team-italia-doc-2018-girone-12", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 12", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "13", "nome": "campionato-sociale-team-italia-doc-2018-girone-13", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 13", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "14", "nome": "campionato-sociale-team-italia-doc-2018-girone-14", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 14", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
        stgironi += ',{"index": "15", "nome": "campionato-sociale-team-italia-doc-2018-girone-15", "descrizione" : "Campionato Sociale Team Italia DOC - Girone 15", "coefficiente" : "1", "partiteTernimate" : "0", "partiteTotali" : "0", "risultati" : "{}"}';
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
            setTimeout(300);
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
        //Se non ho trovato giocatore lo aggiungo
        if (!CAMPIONATO.giocatori[risultato.username.toLowerCase()])
        {
            CAMPIONATO.creaGiocatore(risultato.username.toLowerCase());
        };
        //Aggiorno sempre elo
        CAMPIONATO.giocatori[risultato.username.toLowerCase()].elo = elo;
        //Se perdo due volte per timeout lo elimino
        if (risultato.result == "timeout")
        {
            //Se l'avversario è già stato inserito
            CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeout ++;
            //Se secondo timeout lo elimino    
            if (CAMPIONATO.giocatori[risultato.username.toLowerCase()].nTimeout > 1)
            {
                CAMPIONATO.giocatori[risultato.username.toLowerCase()].eliminato = true;
            }
        }
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
            $("#gironi").append('<tr  ' + colore + ' class="gironi-giocatori"> <td class="gironi-col1"><a class="username" href="https://www.chess.com/tournament/' + CAMPIONATO.gironi.girone[i].nome + '/pairings/" target=”_blank”>' +
            CAMPIONATO.gironi.girone[i].descrizione + '</a></td> <td class="gironi-col2">' + CAMPIONATO.gironi.girone[i].coefficiente + '</td> <td class="gironi-col3"></td> <td class="gironi-col4">' + CAMPIONATO.gironi.girone[i].partiteTernimate + ' / ' +  CAMPIONATO.gironi.girone[i].partiteTotali + '</td> </tr>');
        }
    }
    ,
    scriviGiocatore: function()
    {
        //Cerco giocatore con punteggio più alto
        var username = "";
        var punteggio = -1;
        for (var i in CAMPIONATO.giocatori) {
            if ((! CAMPIONATO.giocatori[i].eliminato) && (! CAMPIONATO.giocatori[i].stampato) && (CAMPIONATO.giocatori[i].punteggio > punteggio)) {
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
        CAMPIONATO.giocatori[username].eliminato = false;
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
