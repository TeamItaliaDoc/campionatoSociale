var elo = [];


function showElo() {
    //Inizializzo array
    elo[0] = 0;
    for (var i = 999; i <= 2001; i++) 
       elo[i] = 0;

    //Imposto sincrono   
    $.ajaxSetup({
        "async": false
    });
 
     //Leggo lista iscritti
    $.getJSON('https://api.chess.com/pub/club/team-italia-doc/members',function(data){

        var index = 0;
        var giocatori = data.all_time;
        giocatori = giocatori.concat(data.weekly);
        giocatori = giocatori.concat(data.monthly);

        for (var i in giocatori) {
            console.log('<br>'  + index + ' ' +  giocatori[i].username);

            //if (giocatori[i].username != 'armandoazzola')
            //    continue;

            //Leggo elo
            $.getJSON('https://api.chess.com/pub/player/' + giocatori[i].username + '/stats',function(dataElo){
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
                    console.log('<br>' + index + ' ' + giocatori[i].username + '---- ELO NON PRESENTE')
                    elo[0]++;
                }            
            });

        }
    });

    //Tolgo sincrono
    $.ajaxSetup({
        "async": true
    });

    //Scrivo risultati   
    for (var i in elo) {
        document.write('<br>' + i + ';' + elo[i]);
    };
}