$(function() {

  var quotes = [{
    quote: 'Il proibizionismo in #Italia ha portato un azienda in particolare ha aumentato il suo fatturato e il suo potere la #mafia! pic.twitter.com/AGx1pxiSHL',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: 'Un solo punto programmatico legalizzare per ripartire. 🥦 #LegalizeIt #MeglioLegale #Cannabis',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '“Sarà la cannabis a salvare Taranto dal disastro ambientale dell’Ilva #curioso” by @alanfriedmanit',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: 'Sfruttate al meglio i semi di Canapa Indiana e seminateli ovunque. by George Washington',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: 'Con il proibizionismo un azienda in particolare ha aumentato il suo fatturato la #mafia! pic.twitter.com/AGx1pxiSHL',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '📢 Salvini “Chiuderò uno a uno tutti i negozi di #cannabis legale”. Da venditore di fumo, non tollera la concorrenza',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '#Cannabis: è il materiale del futuro, perfetta per ri-fertilizzare i terreni, fantastica materia prima per realizzare bioplastiche, mattoni, abiti resistenti e sostenibili. Nonostante tutto la politica si rifiuta di vederla come una reale risorsa pic.twitter.com/eAonMtBkPE',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: 'Si chiama civiltà, si chiama legalità, si chiama lavoro, si chiama sviluppo economico #LegalizeIt #Cannabis',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: 'L&rsquo;illegalità della cannabis è oltraggiosa, un ostacolo al pieno utilizzo di una droga che aiuta a produrre la serenità e l&rsquo;intuizione, la sensibilità e l&rsquo;amicizia così disperatamente necessarie in questo mondo sempre più folle e pericoloso". by Carl Sagan',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '#Legalizzare significa, tutelare i consumatori e i produttori, oltre che l’#ambiente. Un arma per combattere la #deforestazione, l’#inquinamento, ridurre gli effetti devastanti dell’uomo sul #clima e, per creare un modello sostenibile di sviluppo economico.',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '“You smoke a joint, you put on some music, you listen to it and you come up with some good ideas…I don’t need pot to write, but it’s kind of cool.” by Quentin Tarantino #cannabis #LegalizeIt',
    author: '~#spininelfianco',
    link: 'https://pbs.twimg.com/media/EeipP2IU0AATezX?format=jpg'
  }, {
    quote: 'Le droghe sono tutte uguali. Ecco perché mio figlio, fra #cannabis e cocaina, ha scelto la seconda. Gli piaceva di più come era incartata. L’unica differenza era la confezione. Dice.',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '«Tira un aria oscurantista e un po’ bigotta» by @vascorossi #Cannabis #LegalizeIt',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '📢 Legalizzare la #cannabis, per sottrarre 10 MILIARDI alle mafie, e garantire almeno 6 MILIARDI di introiti all’anno per lo stato. Inoltre creerebbe 350.000 posti di lavoro, di una industria totalmente green',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '📢 Ma, capite il ruolo che potrebbe avere a livello economico, ambientale e medico? @GiuseppeConteIT @pdnetwork @Mov5Stelle @FratellidItalia @LegaSalvini @ItaliaViva etc.. pic.twitter.com/tdYgBD8j0o',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '@msgelmini @meb @MolinariRik @Fornaro62 @crippa5stelle @graziano_delrio @AndreaOstellari @matteorenzi @matteosalvinimi @GiorgiaMeloni @vitocrimi @ale_dibattista @nzingaretti @Am_Parente CHIEDIAMO la discussione in parlamento del Manifesto Collettivo x la #cannabis',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: 'Legalizzare la #cannabis, oggi è soltanto una scelta di buon senso. #LegalizeIt #Cannabis @GiuseppeConteIT @pdnetwork @Mov5Stelle',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '“Per le ragazze è un efficace aiuto per i dolori mestruali, per le donne della mia età è un antidolorifico unico e naturale” #Cannabis #LegalizeIt by @WhoopiGoldberg ',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '“Tra una canna e una sigaretta meglio una canna” by Umberto Veronesi #Cannabis #LegalizeIt',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '"Se fossero davvero seri riguardo all’economia, ci sarebbe una discussione sensata sulla legalizzazione" by Jack Nicolson #Cannabis #legalizeIt',
    author: '#spininelfianco',
    link: '#'
  }, {
    quote: '"La marijuana? La mangio, la bevo, la fumo. È l’unica terapia del dolore che funziona" by @morgan_freeman #Cannabis',
    author: '#spininelfianco',
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
      $tweet.html('<a href="https://twitter.com/intent/tweet?text=' + quotes[num].quote + '-' + quotes[num].author + '" class="btn" target="_blank">Tweet Quote</a>');
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

  $('#newQuoteBtn').on('click', function() {

    output();

  });


});
