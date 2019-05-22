function controllaTematici() {

    var tornei = [];
    var giocatori = [];
    tornei['Siciliana'] = {};
    tornei['Siciliana'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-1-siciliana-najdorf';
    tornei['Francese'] = {};
    tornei['Francese'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-2-francese-winawer';
    tornei['Semislava'] = {};
    tornei['Semislava'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-3-semislava';
    tornei['Difesa moderna'] = {};
    tornei['Difesa moderna'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-4-difesa-moderna';
    tornei['Benoni'] = {};
    tornei['Benoni'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-5-benoni-moderna';
    tornei['Olandese'] = {};
    tornei['Olandese'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-6-olandese-leningrado';
    tornei['Ruy-Lopez'] = {};
    tornei['Ruy-Lopez'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-7-ruy-lopez';
    tornei['Pirc'] = {};
    tornei['Pirc'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-8-difesa-pirc-classica';
    tornei['Est Indiana'] = {};
    tornei['Est Indiana'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-9-est-indiana';
    tornei['Caro-Kann'] = {};
    tornei['Caro-Kann'].url = 'https://api.chess.com/pub/tournament/torneo-tematico-n-10-caro-kann-panov';

    for (var nomeTorneo in tornei) {
        $.ajaxSetup({
            "async": false
        });
        $.getJSON(tornei[nomeTorneo].url,function(data){
            document.write('<br> <br> -------- ' + nomeTorneo + ' --------');
            for (var iGiocatore in data.players) {
               if (data.players[iGiocatore].status == 'registered') {
                    var username = data.players[iGiocatore].username;
                    if (! giocatori[username])  {
                        //Creo giocatore
                        giocatori[username] = {};
                        giocatori[username].torneo = [];
                        giocatori[username].lista = '';
                        giocatori[username].nTornei = 0;
                    }
                    giocatori[username].torneo[nomeTorneo] = 'OK';
                    giocatori[username].lista += nomeTorneo + ' - ';
                    giocatori[username].nTornei ++;
                    document.write('<br>' + giocatori[username].nTornei + ' - ' + username);
               }
            }

        });
        $.ajaxSetup({
            "async": true
        });
    }
    //Segnalo giocatori con più di 4 tornei
    document.write('<br> <br> --------  Giocatori con più di 4 tornei  --------');
    for (var username in giocatori) {
        if (giocatori[username].nTornei > 4)
            document.write('<br>' + giocatori[username].nTornei + ' - ' + username + ' - ' + giocatori[username].lista);
    }

    //Segnalo giocatori non doc
    document.write('<br> <br> --------  Giocatori non DOC  --------');
    $.ajaxSetup({
        "async": false
    });
    for (var username in giocatori) {
        $.getJSON('https://api.chess.com/pub/player/' + username + '/clubs',function(data){
            var trovato = false;
            for (var iClubs in data.clubs) {
                if (data.clubs[iClubs].name == 'Team Italia DOC')
                    trovato = true;
            }
            if (! trovato)
                document.write('<br>' + giocatori[username].nTornei + ' - ' + username + ' - ' + giocatori[username].lista);
        });
    }
    $.ajaxSetup({
        "async": true
    });

    document.write('<br> <br>');
}
