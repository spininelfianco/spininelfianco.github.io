$(function() {

  var quotes = [{
    quote: '📢 Il proibizionismo in #Italia ha portato un azienda in particolare ha aumentato il suo fatturato e il suo potere: la #mafia! pic.twitter.com/AGx1pxiSHL',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 La #resistenza al #proibizionismo continua: 50 anni di lotte per la legalizzazione della #cannabis, aborto, divorzio, diritti #lgbt+, staminali, eutanasia...Rivendichiamo un valore fondamentale del nostro vivere insieme: la libera scelta delle persone. pic.twitter.com/qwm8pfSEtj',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Un solo punto programmatico legalizzare per ripartire. 🥦 #LegalizeIt #MeglioLegale #Cannabis',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 "Il #proibizionismo genera domanda di #mafia per la gestione del mercato" #Italia #megliolegale #melemarce #GiuLeManiDalReferendum https://pic.twitter.com/1dtHgGRX7r',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 L’insensato #proibizionismo deve finire! La #cannabis può, una volta liberata, svolgere un ruolo fondamentale per il futuro del nostro paese, sul piano economico, sul piano sociale e sul piano di contrasto alla criminalità organizzata. #GiuLeManiDalReferendum https://pic.twitter.com/TRVi6aW5uQ',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 "L’ignoranza uccide!" Soluzione: + Fare informazione per raggiungere più persone possibili e raccontare loro che la #cannabis, che è stata trasformata in un problema, può tornare ad essere una risorsa, per tutti. #GiuLeManiDalReferendum https://pic.twitter.com/bkbx0vzPWs',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 "Per anni il proibizionismo della #cannabis ha gravemente danneggiato la salute pubblica, violato i diritti umani, sovraccaricato il sistema di giustizia penale e sprecato enormi risorse, per una lotta insensata ad una pianta dai mille benefici. #Legalizzatela! #GiuLeManiDalReferendum https://pic.twitter.com/ifQUNtMKj5',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: '“Sarà la cannabis a salvare Taranto dal disastro ambientale dell’Ilva #curioso” by @alanfriedmanit',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '#THC effetti terapeutici. #GiuLeManiDalReferendum #cannabis #manifestocollettivo #legalizeIt https://pic.twitter.com/6OL0otO6Il',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '@graziano_delrio le scriviamo tutti i giorni per avere anche solo una sua risposta.Attendiamo la calendarizzaZione sulla proposta di legalizzare la cannabis, ci sono 40k firme e circa 10 mln di cittadini interessati. O usa Twitter a senso unico per scrivere e mai per rispondere? https://pic.twitter.com/gKPwx8yM62',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'Fumare erba potrebbe effettivamente renderti un autista più sicuro Una sorprendente ricerca, condotta dai professori D. Mark Anderson e Daniel Rees, dimostra che le morti per traffico sono diminuite negli stati in cui la #cannabis è stata legalizzata. https://iza.org/publications/dp/6112… https://pic.twitter.com/Ha6FSfpirX',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'Piantiamola! @GiuseppeConteIT @pdnetwork @Mov5Stelle etc... Facciamo finalmente qualcosa di buono per il nostro pianeta. #cannabis #ambiente #legalizzatela #GiuLeManiDalReferendum https://pic.twitter.com/X2nyps9XJW',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'Quando la #cannabis è usata in modo responsabile, può aiutare le persone a rilassarsi, ad accrescere la loro creatività e migliorare la qualità della loro vita. Criminalizzare e sottoporre i consumatori a dure sanzioni penali e civili è un’ingiustizia terribile. #spininelficanco https://pic.twitter.com/0ODdm2n2TS',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'La regolamentazione dell’#alcol ha consentito la tutela della salute pubblica, e la possibilità di curarne la dipendenza. La #cannabis non da dipendenza, perché lo stato si rifiuta di regolamentarne il consumo? #GiuLeManiDalReferendum https://pic.twitter.com/JR2NNDO0aO',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'Legalizzazione #Cannabis : impatto su salute, sicurezza, economia. https://norml.org/marijuana/fact-sheets/marijuana-regulation-impact-on-health-safety-economy/… #GiuLeManiDalReferendum #LegalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'Campagna informativa a favore dell’autoproduzione di #Cannabis per uso personale by @Italia_Freeweed #manifestocollettivo #GiuLeManiDalReferendum https://pic.twitter.com/iKii9CLeZJ',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: 'Sfruttate al meglio i semi di Canapa Indiana e seminateli ovunque. by George Washington',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Con il proibizionismo un azienda in particolare ha aumentato il suo fatturato: la #mafia! pic.twitter.com/AGx1pxiSHL',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Salvini “Chiuderò uno a uno tutti i negozi di #cannabis legale”. Da venditore di fumo, non tollera la concorrenza',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '#Cannabis: è il materiale del futuro, perfetta per ri-fertilizzare i terreni, fantastica materia prima per realizzare bioplastiche, mattoni, abiti resistenti e sostenibili. Nonostante tutto la politica si rifiuta di vederla come una reale risorsa pic.twitter.com/eAonMtBkPE',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Si chiama civiltà, si chiama legalità, si chiama lavoro, si chiama sviluppo economico #LegalizeIt #Cannabis',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: 'L’illegalità della cannabis è oltraggiosa, un ostacolo al pieno utilizzo di una droga che aiuta a produrre la serenità e l’intuizione, la sensibilità e l’amicizia così disperatamente necessarie in questo mondo sempre più folle e pericoloso". by Carl Sagan',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '#Legalizzare significa, tutelare i consumatori e i produttori, oltre che l’#ambiente. Un arma per combattere la #deforestazione, l’#inquinamento, ridurre gli effetti devastanti dell’uomo sul #clima e, per creare un modello sostenibile di sviluppo economico.',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '“You smoke a joint, you put on some music, you listen to it and you come up with some good ideas…I don’t need pot to write, but it’s kind of cool.” by Quentin Tarantino #cannabis #LegalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: 'https://pbs.twimg.com/media/EeipP2IU0AATezX?format=jpg'
  }, {
    quote: 'Le droghe sono tutte uguali. Ecco perché mio figlio, fra #cannabis e cocaina, ha scelto la seconda. Gli piaceva di più come era incartata. L’unica differenza era la confezione. Dice.',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '«Tira un aria oscurantista e un po’ bigotta» by @vascorossi #Cannabis #LegalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Legalizzare la #cannabis, per sottrarre 10 MILIARDI alle mafie, e garantire almeno 6 MILIARDI di introiti all’anno per lo stato. Inoltre creerebbe 350.000 posti di lavoro, di una industria totalmente green',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Ma, capite il ruolo che potrebbe avere a livello economico, ambientale e medico? @GiuseppeConteIT @pdnetwork @Mov5Stelle @FratellidItalia @LegaSalvini @ItaliaViva etc.. pic.twitter.com/tdYgBD8j0o',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 CHIEDIAMO la discussione in parlamento del Manifesto Collettivo x la #cannabis',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Legalizzare la #cannabis, oggi è soltanto una scelta di buon senso. #LegalizeIt #Cannabis @GiuseppeConteIT @pdnetwork @Mov5Stelle',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '“Per le ragazze è un efficace aiuto per i dolori mestruali, per le donne della mia età è un antidolorifico unico e naturale” by @WhoopiGoldberg #Cannabis #LegalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '“Tra una canna e una sigaretta meglio una canna” by Umberto Veronesi #Cannabis #LegalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '"Se fossero davvero seri riguardo all’economia, ci sarebbe una discussione sensata sulla legalizzazione" by Jack Nicolson #Cannabis #legalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '"La marijuana? La mangio, la bevo, la fumo. È l’unica terapia del dolore che funziona" by @morgan_freeman #Cannabis',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Discutiamo la proposta di legge #s1498 #manifestocollettivo #cannabis #legalizeIt',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Più posti di Lavoro, più certezze per i consumatori!! #manifestocollettivo #liberalizzazione #S1498 #FinoAllaLibertà',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 La nostra libertà è un diritto che dovete garantirci! #liberalizzazione  #FinoAllaLibertà  #cannabis #S1498',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Preferite l’illegalità per la vostra moralità? #s1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Siamo 8 milioni di cittadini onesti e ci fate la guerra! #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Seminiamo pace sotto la tempesta! #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Vogliamo legalità chiediamo Giustizia! #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 1 Pianta 1000 Vantaggi! #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Facciamo RIFIORIRE l’Italia! #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Il mercato illegale è malsano e ci fa male! #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Milioni di consumatori ignorati: tribunali intasati e milioni buttati! #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'
  }, {
    quote: '📢 Liberi di coltivare per uso personale. #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }, {
    quote: '📢 Stop ai regali alle Narcomafie. #S1498 #liberalizzazione #cannabis #manifestocollettivo',
    author: '#GiuLeManiDalReferendum',
    link: '#'    
  }];

  // vars
  var i = 0;
  var x = 0;
  var result = [];
  var $element = $('#quote');
  var $tweet = $('#tweet-wrapper');
  var htmlOutput;
  // IIFE - get array of random numbers
  (function() {

    var minNum = 0;
    var maxNum = quotes.length;
    var randomNum = 0;

    while (result.length < maxNum) {
      randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
      // if random number doesnt exists in array push it to array
      if (result.indexOf(randomNum) > -1) continue;
      result.push(randomNum);
    }
  })();


  function output() {
    // x iterates quotes obj
    if (x < quotes.length) {
      var num = result[x];

      if (quotes[num].link == '#') {
        htmlOutput = '<p>' + quotes[num].quote + '</p>' + '<footer><a href="#" class="brackets author">' + quotes[num].author + '</a><span class="cursor blink">&#9646;</span></footer>';
      } else {
        htmlOutput = '<p>' + quotes[num].quote + '</p>' + '<footer><a href="' + quotes[num].link + '" target="_blank" class="brackets author">' + quotes[num].author + '</a><span class="cursor blink">&#9646;</span></footer>';
      }
      $('#' + num).addClass('opened');
      $tweet.html('<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes[num].quote + '-' + quotes[num].author) + '" class="btn" target="_blank">Tweet Quote</a>');
    } else {
      htmlOutput = '<div class="warning"><span>WARNING</span><p> No more new quotes <span class="cursor blink">&#9646;</span></p></div>';
    }
    //$element.html(htmlOutput);
    x++;
    return render();
  };

  output();


  var isTag, char, text;

  function render() {
    //console.log('i',i);

    text = htmlOutput.slice(0, i++);

    if (text === htmlOutput) return i = 0;

    $element.html(text + '&#9646;');

    char = text.slice(-1);

    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return render();

    return setTimeout(render, 20);
  };

  $('#newQuoteBtn').on('click', output);

});
