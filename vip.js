$(document).ready(function() {
            $('#quoteBtn').on('click', function() {
              var quotes = [{
                'author': '#spininelfianco',
                'quote': "«Tira un aria oscurantista e un po' bigotta» by @vascorossi",
                'img': 'https://gdsit.cdn-immedia.net/2019/10/VASCO-ROSSI.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "La marijuana è, probabilmente, la migliore tra tutte le sostanze inebrianti. È stato scientificamente provato, da decenni, che sia molto meno pericolosa per l'organismo di quanto non lo sia l'alcool, se usato abitudinariamente. by @Nick_Offerman",
                'img': 'https://media1.fdncms.com/ntslo/imager/u/original/8901449/musicartsculture_music1-1-de4b7a7f79e97a1f.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "«Anche vietare #cannabis è come vietare alcool, Mister. Proibizionismo non risolve problemi, ne aggiunge e ne crea di nuovi.» by @civati",
                'img': 'https://www.dolcevitaonline.it/wp-content/uploads/2019/04/apertura-civati.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Sfruttate al meglio i semi di Canapa Indiana e seminateli ovunque. by George Washington",
                'img': 'https://www.scrolldroll.com/wp-content/uploads/2017/06/10-1.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Raphael Mechoulam è stato il primo a isolare ilΔ9-tetraidrocannabinolo, noto come #THC. È grazie al dottor Raphael che la scienza oggi sta finalmente cominciando a capire la relazione incredibilmente stretta tra cannabinoidi e fisiologia umana. Grazie Dottore!",
                'img': 'https://pbs.twimg.com/media/EfnfIlwWAAAV2Jz?format=jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Non si tratta di una droga, ma di una foglia. by @Schwarzenegger",
                'img': 'https://ktla.com/wp-content/uploads/sites/4/2019/05/gettyimages-1134899282.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Quando ero un ragazzo fumavo abitualmente. Questo era il punto. by @BarackObama",
                'img': 'https://media2.s-nbcnews.com/i/newscms/2020_33/3353271/200516-barack-obama-al-1627_24141762104861d156fe8a8306ead220.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Sarà la cannabis a salvare Taranto dal disastro ambientale dell’Ilva #curioso by @alanfriedmanit",
                'img': 'http://www.comune.cividale-del-friuli.ud.it/fileadmin/_processed_/5/9/csm_IMG_4436_233ececf50.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "La marijuana? La mangio, la bevo, la fumo, la sniffo. È l’unica terapia del dolore che funziona by @morgan_freeman",
                'img': 'https://www.kissfm.pt/wp-content/uploads/2019/07/2011-385251134-2011041539759.jpg_20110415.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "«L’illegalità della cannabis è oltraggiosa, un ostacolo al pieno utilizzo di una droga che aiuta a produrre la serenità e l’intuizione, la sensibilità e l’amicizia così disperatamente necessarie in questo mondo sempre più folle e pericoloso» by Carl Sagan",
                'img': 'https://i.imgur.com/24357Qh.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Per le ragazze è un efficace aiuto per i dolori mestruali, per le donne della mia età è un antidolorifico unico e naturale by @WhoopiGoldberg",
                'img': 'https://achievement.org/wp-content/uploads/2016/10/goldberg-Feature-Image-2800x1120.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Tra una canna e una sigaretta meglio una canna by Umberto Veronesi",
                'img': 'https://static.nexilia.it/giornalettismo/2016/11/umberto-veronesi-950x450.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Penso che la marijuana non dovrebbe essere illegale by Jon Stewert",
                'img': 'https://wtop.com/wp-content/uploads/2014/11/367923.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "La marijuana è sempre stata un'alternativa farmacologica… by Bill Gates",
                'img': 'https://s.marketwatch.com/public/resources/images/MW-DO253_gates__ZG_20150617093529.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Fumare erba non è sinonimo di pigrizia. L'erba è sempre stata una sostanza da me giustificata perchè in grado di stimolare il mio cervello by @billmaher",
                'img': 'https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/2019/01/gettyimages-621335950.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Negli Stati Uniti siamo stati terribilmente e sistematicamente ingannati per quasi 70 anni [sulla marijuana], e mi scuso per aver contribuito in qualche modo in tutto ciò by @drsanjaygupta",
                'img': 'https://cms.qz.com/wp-content/uploads/2015/07/h_02352306.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Fumo molte canne quando scrivo musica by @ladygaga",
                'img': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Lady_Gaga_Air_BnB_performance_spotlight.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Ci può scommettere che l'ho fatto. E mi sono anche divertito by @MikeBloomberg",
                'img': 'https://img.huffingtonpost.com/asset/5e5f28d2230000c2160bf916.jpeg'
              }, {
                'author': '#spininelfianco',
                'quote': "Fumare mi ha aiutato a mettermi in contatto con il regno dei sensi by @hughhefner",
                'img': 'https://static.euronews.com/articles/390563/1280x720_390563.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Dovremmo cercare di rendere il tutto legale e la gente dovrebbe avere la libertà di fare le proprie scelte... Se si depenalizza, allora se ne potrà controllare anche la qualità... E vorrei chiedervi se non sareste d'accordo a ridurre il numero di morti by Brad Pitt",
                'img': 'https://www.nj.com/resizer/GlNQytFrmnut_FsS8NK8sfT7YKU=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/entertainment_impact/photo/brad-pittjpg-addd59a14dd9ab18.jpg'				
              }, {
                'author': '#spininelfianco',
                'quote': "Sono andato in Vietnam, e ci sono stato per molto tempo. [Consumare marijuana] faceva la differenza tra rimanere umano, come disse Michael Douglas, o diventare una bestia by @TheOliverStone",
                'img': 'https://miro.medium.com/max/4080/1*A67i8-WwiDBtG1hcAAYpAg.png'
              }, {
                'author': '#spininelfianco',
                'quote': "La prima volta che ho fumato una canna ero a casa con mia madre e il mio patrigno. Sostenevano che 'Se hai intenzione di farlo, preferiamo che tu lo faccia con noi by Matt Damon",
                'img': 'https://www.bioecogeo.com/wp-content/uploads/2017/01/Matt-Damon.jpeg'					
              }, {
                'author': '#spininelfianco',
                'quote': "Mi fa sentire nel modo in cui ho bisogno di sentirmi by @SnoopDogg",
                'img': 'https://moodofsound.files.wordpress.com/2017/02/snoop-dogg-the-interns-net.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Un po' di Kush, il bicchiere pieno… Peferisco sempre le cose migliori! by @rihanna",
                'img': 'https://assets.teenvogue.com/photos/5adf63b4722faa3f528ada25/5:2/w_3835,h_1534,c_limit/irihanna-lingerie-tout.jpeg'				
              }, {
                'author': '#spininelfianco',
                'quote': "Guarda, non ho nulla da nascondere, non sono un grande fumatore di marijuana o di sostanze simili! Ma l'erba è molto, ma molto meno pericolosa dell'alcool by Johnny Depp",
                'img': 'https://4.bp.blogspot.com/-v0dUGeDK9lQ/UbspJQCiDDI/AAAAAAAACYI/E7T_ewT6tpA/w1200-h630-p-k-no-nu/Johnny+Depp+Black+and+White+Photos.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Se si vuole davvero combattere la droga bisogna rilanciare il tema della legalizzazione della #cannabis e dichiarare guerra alle mafie che sono gli unici veri rivenditori di morte. Tutto il resto è Salvini by @orfini",
                'img': 'https://www.interris.it/wp-content/uploads/2020/02/img800-orfini-renzi-si-dimesso-formalmente-132956-1280x720.jpg'
              }, {
                'author': '#spininelfianco',
                'quote': "Se si vuole davvero combattere la droga bisogna rilanciare il tema della legalizzazione della #cannabis e dichiarare guerra alle mafie che sono gli unici veri rivenditori di morte. Tutto il resto è Salvini by @orfini",
                'img': 'https://www.interris.it/wp-content/uploads/2020/02/img800-orfini-renzi-si-dimesso-formalmente-132956-1280x720.jpg'                          
              }, {
                'author': '#spininelfianco',
                'quote': "L'alcol è legale. La droga invece è libera, purtroppo. Legalizzare permetterebbe il controllo di una situazione fuori dal controllo. Chi crede che proibire sia la soluzione non vuole guardare i risultati di decenni di proibizione. Perchè ad oggi la droga è libera, purtroppo. by @CarloCalenda",
                'img': 'https://www.repstatic.it/content/localirep/img/rep/2018/10/15/124257673-cac77634-f685-46f4-b862-7e6bd09c9209.jpg'                          
              }];

              var randomQuote = Math.floor((Math.random() * quotes.length));

              $('.quote').html(quotes[randomQuote]['quote']);
              $('.hero').html(quotes[randomQuote]['author']);
              $('.img-responsive').attr('src', quotes[randomQuote]['img']);

              $("#tweetBtn").on('click', function() {
                $("#tweetBtn").attr('href', "https://twitter.com/intent/tweet?text=" + quotes[randomQuote]['quote'] + quotes[randomQuote]['author']);
              });
            })
          });
