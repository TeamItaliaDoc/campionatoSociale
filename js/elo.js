var elo = [];
var index = 0;
var totGiocatori = 0;

function showElo() {
    //Inizializzo array
    elo[0] = 0;
    for (var i = 999; i <= 2001; i++) 
       elo[i] = 0;

     //Leggo lista iscritti
    $.getJSON('https://api.chess.com/pub/club/team-italia-doc/members',function(data){

        var giocatori = data.all_time;
        giocatori = giocatori.concat(data.weekly);
        giocatori = giocatori.concat(data.monthly);

        totGiocatori = giocatori.length;
        console.log('totGiocatori: ' + totGiocatori);
        for (var i in giocatori) {
            //Leggo elo
            getEloUrl('https://api.chess.com/pub/player/' + giocatori[i].username + '/stats');

        }
    });

}

function getEloUrl(url)
{
    //Eseguo funzione per ricercare un avatar
    $.getJSON(url,function(dataElo){
        index++;
        if (dataElo.chess_daily) {
            if (dataElo.chess_daily.last.rating < 1000) {
                 elo[999]++;
            } else if (dataElo.chess_daily.last.rating  > 2000) {
                 elo[2001]++;
            } else  {
                  elo[dataElo.chess_daily.last.rating]++;
            }
        } else {
            elo[0]++;
        }            

        console.log('totGiocatori: ' + totGiocatori + ' index: ' + index);
        if (totGiocatori > index)
            return;

        //Scrivo risultati   
        for (var i in elo) {
            document.write('<br>' + i + ';' + elo[i]);
        };
 
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        getEloUrl(this.url);    
    });

}
