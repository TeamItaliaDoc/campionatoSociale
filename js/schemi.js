var giocatori = [];
var giocatoriMTP = [];
var totEsami = 0;
var glbPosizione = 0;
var glbRisultato = 0;
var glbPari = 0;

function setClassifica()
{
//https://api.chess.com/pub/player/    
    //Inizializzo giocatori 
    stGiocatori = '[';
    stGiocatori += '{"username": "sandro2116", "displayName": "Sandro2116", "avatar" : "https://images.chesscomfiles.com/uploads/v1/user/27079370.e61d29fa.200x200o.b28c4cf7e12b.jpeg"}';
    stGiocatori += ',{"username": "saurosol", "displayName": "saurosol", "avatar" : "https://images.chesscomfiles.com/uploads/v1/user/13080926.71ad03d2.200x200o.b63307f180eb.png"}';
    stGiocatori += ',{"username": "themoonlightknight", "displayName": "TheMoonlightKnight", "avatar" : "https://images.chesscomfiles.com/uploads/v1/user/32393080.9415c629.200x200o.3bdc83ec6ced.jpeg"}';

    stGiocatori += ']';
    giocatoriTMP = JSON.parse(stGiocatori);

    //Inizializzo esami
    stEsami = '[';
    stEsami += '{"esame" : 1, "username": "sandro2116", "voto": 8}';
    stEsami += ',{"esame" : 1, "username": "saurosol", "voto": 8}';
    stEsami += ',{"esame" : 2, "username": "saurosol", "voto": 8}';
    stEsami += ',{"esame" : 3, "username": "saurosol", "voto": 8}';
    stEsami += ',{"esame" : 1, "username": "themoonlightknight", "voto": 8}';
    stEsami += ',{"esame" : 2, "username": "themoonlightknight", "voto": 8}';
    stEsami += ',{"esame" : 6, "username": "themoonlightknight", "voto": 7.5}';
    stEsami += ']';
    esami = JSON.parse(stEsami);

    //Assegno voti
    for (var i in esami) {
        var username = esami[i].username;
        if (! giocatori[username])
            creaGiocatore (username);
        giocatori[username].totaleVoti += esami[i].voto;
        giocatori[username].nEsami ++;
        giocatori[username].votiEsami += '<br> Esame: ' + esami[i].esame + '  - voto: ' + esami[i].voto;
        //Aggiorno n. totale di esami
        if (esami[i].esame > totEsami)
            totEsami = esami[i].esame
    }    
    //Calcolo pagella
    for (var i in giocatori) {
        giocatori[i].pagella = giocatori[i].totaleVoti / giocatori[i].nEsami;
        giocatori[i].percentoSvolti = giocatori[i].nEsami * 100 / totEsami;
    }
    //Aggiorno label totale esami
    $("#esamiTot").html(totEsami);


    //Scrivo classifica
    while (stampaClassifica());
}

//Creo un nuovo giocatore
function creaGiocatore (username)
{
    for (var i in giocatoriTMP)
    {
        if (giocatoriTMP[i].username == username)
        {
            giocatori[username] = {};
            giocatori[username].avatar = giocatoriTMP[i].avatar;
            giocatori[username].displayName = giocatoriTMP[i].displayName;
            giocatori[username].totaleVoti = 0;
            giocatori[username].nEsami = 0;
            giocatori[username].votiEsami = '';
            giocatori[username].pagella = 0;
            giocatori[username].percentoSvolti = 0;  
            giocatori[username].stampato = false;  

            return;
        }
    }
}    

//Stampa la classivia
function stampaClassifica()
{
    //Cerco giocatore con punteggio più alto
    var maxRisultato = 0;
    var risultato = 0;
    var maxUsername = '';
    var giocatore;

    //Calcolo classifica 
    for (var username in giocatori) {
        giocatore = giocatori[username];
        //Calcolo risultato
        // deve avere almeno un 20% di esami svolti, a parita di pagella contano i nEsami
        //Prima quelli con percentuale svolti >= 20
        if (giocatore.percentoSvolti >= 20)
            risultato = 10000000000;
        else 
            risultato = 0;
        risultato += Math.round(giocatore.pagella * 100) * 1000000;
        risultato += giocatore.nEsami;
        //Calcolo vincitore    
        if ((!giocatore.stampato) & (risultato > maxRisultato))
        {
            maxRisultato = risultato;
            maxUsername = username;
        }
    }

    if (maxUsername == "")
    {
        return false;
    }

    //Controllo se sono pari
    if (maxRisultato == glbRisultato)
    {
         glbPari ++;
    } else {
        glbPosizione += glbPari + 1;
        glbRisultato = maxRisultato;
        //Azzero pari
        glbPari = 0;
    }

    //Scrivo giocatore
    //Se non ha raggiunto il 20% non è in classifica
    var stPosizione = '';
    if (giocatori[maxUsername].percentoSvolti >= 20)
        stPosizione = '#' + glbPosizione;
    else
        stPosizione = '';
    //Punteggio con tooltip
    var myPunteggio =  giocatori[maxUsername].pagella.toFixed(2);
    myPunteggio = '<div class="tooltip">' + myPunteggio;
    myPunteggio += '  <span class="tooltiptext">' + giocatori[maxUsername].votiEsami.substr(5,1000) + '</span>';
    myPunteggio += '</div>';
    //stampo        
    $("#classifica").append('<tr class="classifica-giocatori">' +
     '<td class="classifica-col1">' + stPosizione + '</td>' +  
        '<td class="classifica-col1SEP"></td>' + 
        '<td class="classifica-col2">' +
        '    <table><tr>' +
        '        <td>' +
        '        <img class="classifica-avatar" src="' + giocatori[maxUsername].avatar + '">' +
        '    </td>' +
        '    <td width=7px></td>' +
        '    <td><div>' +
        '            <a class="username" href="' + 'https://api.chess.com/pub/player/' + giocatori[maxUsername].displayName + '" target=”_blank”> ' + giocatori[maxUsername].displayName + '</a>' +
        '        </div>  </td>' +    
        '    </tr></table>' +
        '</td>' +
        '<td class="classifica-col3">' +  myPunteggio +'</td>' +
        '<td class="classifica-col4">' +  giocatori[maxUsername].nEsami +'</td>' +
        '<td class="classifica-col5">' +  giocatori[maxUsername].percentoSvolti.toFixed(2) +' %</td>' +
        '</tr>'
        );
    
    //Flag per non farlo più scriver
    giocatori[maxUsername].stampato = true;

    return true;
}
