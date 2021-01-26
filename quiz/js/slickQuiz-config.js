// Setup per il quiz domande e risposte

// NOTE: ricordati le virgole, IE ha problemi con i cattivi ragazzi

var quizJSON = {
    "info": {
        "name":    "Quanto ne sai sulla Cannabis?",
        "main":    "<p>Metti alla prova le tue conoscenze!</p>",
        "results": "<h5>Per saperne di più</h5><p>La politica sulla cannabis dovrebbe essere basata su prove. Questo è il motivo per cui <a href='https://twitter.com/search?q=spininelfianco&src=typed_query' target='_blank'><b>#spininelfianco</b></a> ha preparato le seguenti schede informative che evidenziano la scienza pertinente sottoposta a revisione paritaria relativa agli impatti sulla salute e sulla società dell'uso, dell'applicazione e della regolamentazione della cannabis. <a href='https://norml.org/marijuana/fact-sheets' target='_blank'>Schede Informative via NORML</a></p><img src='https://i0.wp.com/norml.org/wp-content/uploads/2020/01/wordmark-green.png' class='img-fluid' alt='Norml facts check'> <br>Nel 2020, i ricercatori di tutto il mondo hanno pubblicato oltre 3.500 articoli scientifici sul tema della cannabis, secondo i dati compilati dalla National Library of Medicine e <a href='https://pubmed.ncbi.nlm.nih.gov/?term=marijuana' target='_blank'>PubMed.gov</a><img src='https://logodix.com/logo/2072024.png'>",
        "level1":  "🏆 Ottimo",
        "level2":  "😏 Buono",
        "level3":  "😐 Nella media",
        "level4":  "😕 Potrebbe andar meglio",
        "level5":  "😡 Meglio studiare..." // no comma here
    },
    "questions": [
  { // Question 1
            "q": "La Cannabis è:",
            "a": [
                {"option": "Una pianta con proprietà allucinogene che dà meno dipendenza del tabacco",      "correct": false},
                {"option": "Una pianta con proprietà psicoattive talora direttamente letale",     "correct": false},
                {"option": "Una pianta con proprietà psicoattive come l'alcol",      "correct": true}
            ],
            "correct": "<p><span>👍 Giusto!</span> La Cannabis è una pianta con proprietà psicoattive, come l'alcol. Anche se poco risaputo, l'alcol è una droga psicoattiva a tutti gli effetti, in quanto capace d'alterare la percezione. Per approfondire le proprietà delle droghe, consulta: <a href='https://www.informationisbeautiful.net/visualizations/drugs-world/' target='_blank'>Infografica a cura di Informationisbeautiful.net</a></p>",
            "incorrect": "<p><span>👎 Sbagliato</span> La Cannabis è una pianta con proprietà psicoattive, come l'alcol. Anche se poco risaputo, l'alcol è una droga psicoattiva a tutti gli effetti, in quanto capace d'alterare la percezione. Per approfondire le proprietà delle droghe, consulta: <a href='https://www.informationisbeautiful.net/visualizations/drugs-world/' target='_blank'>Infografica a cura di Informationisbeautiful.net</a></p>"// no comma here
        },
      
 { // Question 2
            "q": "Secondo le ricerche svolte finora, la pianta di Cannabis ha avuto origine in:",
            "a": [
                {"option": "Sud America",      "correct": false},
                {"option": "Asia centrale",     "correct": true},
                {"option": "Africa centrale",      "correct": false}
            ],
            "correct": "<p><span>👍 Sì!</span> Secondo l'articolo <a href='https://www.researchgate.net/publication/324974651_Cannabis_is_indigenous_to_Europe_and_cultivation_began_during_the_Copper_or_Bronze_age_a_probabilistic_synthesis_of_fossil_pollen_studies' target='_blank'>Cannabis is indigenous to Europe and cultivation began during the Copper or Bronze age: a probabilistic synthesis of fossil pollen studies</a>, di norma la comunità scientifica ha situato la pianta originale in zone di tutta l'Asia. Tuttavia, gli scienziati non erano del tutto certi del punto originale preciso.<br>Secondo l'analisi, il polline di Cannabis fossilizzato più antico si trovava nella provincia di Ningxia, in Cina. Successive ricerche nella regione e il monitoraggio di una pianta chiamata Artemisia, che ha un legame stretto e un modello evolutivo parallelo alla Cannabis, hanno riconosciuto nell'altopiano tibetano nord-orientale il centro originario della Cannabis. <br><br>Approfondimenti per gli appassionati di Archeobotanica:<br><a href='https://www.rxleaf.com/fossilized-cannabis-original-land-race-evolution/' target='_blank'>Fossilized Cannabis Reveals The Plant is 27.8 Million Years Old, Philip Ghezelbash Giugno 12, 2019.</a><br><a href='https://link.springer.com/article/10.1007/s00334-019-00731-8' target='_blank'>Cannabis in Asia: its center of origin and early cultivation, based on a synthesis of subfossil pollen and archaeobotanical studies</a></p>",
            "incorrect": "<p><span>👎 No…</span> Secondo l'articolo <a href='https://www.researchgate.net/publication/324974651_Cannabis_is_indigenous_to_Europe_and_cultivation_began_during_the_Copper_or_Bronze_age_a_probabilistic_synthesis_of_fossil_pollen_studies' target='_blank'>Cannabis is indigenous to Europe and cultivation began during the Copper or Bronze age: a probabilistic synthesis of fossil pollen studies</a>, di norma la comunità scientifica ha situato la pianta originale in zone di tutta l'Asia. Tuttavia, gli scienziati non erano del tutto certi del punto originale preciso.<br>Secondo l'analisi, il polline di Cannabis fossilizzato più antico si trovava nella provincia di Ningxia, in Cina. Successive ricerche nella regione e il monitoraggio di una pianta chiamata Artemisia, che ha un legame stretto e un modello evolutivo parallelo alla Cannabis, hanno riconosciuto nell'altopiano tibetano nord-orientale il centro originario della Cannabis.<br><br>Approfondimenti per gli appassionati di Archeobotanica:<br><a href='https://www.rxleaf.com/fossilized-cannabis-original-land-race-evolution/' target='_blank'>Fossilized Cannabis Reveals The Plant is 27.8 Million Years Old, Philip Ghezelbash Giugno 12, 2019.</a><br><a href='https://link.springer.com/article/10.1007/s00334-019-00731-8' target='_blank'>Cannabis in Asia: its center of origin and early cultivation, based on a synthesis of subfossil pollen and archaeobotanical studies</a></p>"// no comma here
        },

 { // Question 3
            "q": "Quanti principi attivi ha la Cannabis?",
            "a": [
                {"option": "Due: CBD (curativo) e THC (psicoattivo)",      "correct": false},
                {"option": "Finora ne sono stati identificati circa settanta, ma il più famoso è il THC (delta-9-tetraidrocannabinolo)",     "correct": true},
                {"option": "Undici, ma il più importante è il delta-9-tetraidrocannabinolo o THC",      "correct": false}
            ],
            "correct": "<p><span>👍 Bene!</span> Finora sono stati identificati circa 70 principi attivi della Cannabis, ma la ricerca prosegue.<br><b>Fonte</b>:<a href='https://cannabismd.com/basics/cannabinoids/how-many-cannabinoids-does-cannabis-actually-have/' target='_blank'>How Many Cannabinoids Does Cannabis Actually Have?</a></p>",
            "incorrect": "<p><span>👎 Ops... No.</span> Finora sono stati identificati circa 70 principi attivi della Cannabis, ma la ricerca prosegue.<br><b>Fonte</b>:<a href='https://cannabismd.com/basics/cannabinoids/how-many-cannabinoids-does-cannabis-actually-have/' target='_blank'>How Many Cannabinoids Does Cannabis Actually Have?</a></p>"// no comma here
        },


 { // Question 4
            "q": "Per la cura di quali patologie si è dimostrata utile la Cannabis?",
            "a": [
                {"option": "Cancro e depressione, per esempio, ma solo se la Cannabis assunta è light",      "correct": false},
                {"option": "Cancro e depressione",     "correct": true},
                {"option": "Non esistono prove scientifiche per nessuna delle patologie citate",      "correct": false}
            ],
            "correct": "<p><span>👍 Vero!</span> La Cannabis è usata come terapia nelle patologie citate e molte altre.<br>Fonti:<br>Dolcevitaonline.it - <a href='https://www.dolcevitaonline.it/stati-uniti-un-malato-di-cancro-su-cinque-usa-anche-la-cannabis-per-curarsi/' target='_blank'>Stati Uniti, un malato di cancro su cinque usa (anche) la cannabis per curarsi.</a><br>Pubmed.gov - <a href='https://pubmed.ncbi.nlm.nih.gov/30794025/' target='_blank'>Relationship of Cannabis Use to Patient-Reported Symptoms in Cancer Patients Seeking Supportive/Palliative Care.</a><br>Dolcevitaonline.it - <a href='https://www.dolcevitaonline.it/la-cannabis-per-dare-sollievo-immediato-dai-sintomi-della-depressione/' target='_blank'>La cannabis per dare sollievo immediato dai sintomi della depressione.</a><br>Pubmed.gov - <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7309674/' target='_blank'>The Effectiveness of Cannabis Flower for Immediate Relief from Symptoms of Depression.</a></p>",
            "incorrect": "<p><span>👎 No…</span> La Cannabis è usata come terapia nelle patologie citate e molte altre.<br>Fonti:<br>Dolcevitaonline.it - <a href='https://www.dolcevitaonline.it/stati-uniti-un-malato-di-cancro-su-cinque-usa-anche-la-cannabis-per-curarsi/' target='_blank'>Stati Uniti, un malato di cancro su cinque usa (anche) la cannabis per curarsi.</a><br>Pubmed.gov - <a href='https://pubmed.ncbi.nlm.nih.gov/30794025/' target='_blank'>Relationship of Cannabis Use to Patient-Reported Symptoms in Cancer Patients Seeking Supportive/Palliative Care.</a><br>Dolcevitaonline.it - <a href='https://www.dolcevitaonline.it/la-cannabis-per-dare-sollievo-immediato-dai-sintomi-della-depressione/' target='_blank'>La cannabis per dare sollievo immediato dai sintomi della depressione.</a><br>Pubmed.gov - <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7309674/' target='_blank'>The Effectiveness of Cannabis Flower for Immediate Relief from Symptoms of Depression.</a></p>"// no comma here
        },


 { // Question 5
            "q": "Il THC contenuto nella Cannabis è una sostanza:",
            "a": [
                {"option": "Liposolubile",      "correct": true},
                {"option": "Idrosolubile",     "correct": false},
                {"option": "Nessuna delle due, si fuma",      "correct": false}
            ],
            "correct": "<p><span>👍 Oh sì!</span> Come cucinare con i concentrati di Cannabis<br>Una volta decarbossilati gli estratti, potrete usarli per dare una spinta in più a quasi tutti i vostri piatti preferiti. Ricordatevi che il THC è liposolubile, per cui avrete ancora bisogno di usare burro, olio o un'altra forma di grasso alimentare (come ad esempio il ghi, o burro chiarificato). Di solito, consigliamo di mescolare i concentrati in piccole quantità di burro o olio quando sono ancora caldi dal processo di decarbossilazione. Mescolate energicamente la miscela fino a completa dissoluzione del concentrato nel grasso.<b>Fonte</b>: Blog Royal Queen Seeds<a href='https://www.royalqueenseeds.it/blog-come-cucinare-con-concentrati-di-cannabis-come-kief-hashish-e-bho-n1125' target='_blank'> Come Cucinare Con Concentrati Di Cannabis Come Kief, Hashish e BHO.</a></p>",
            "incorrect": "<p><span>👎 Sbagliato, ma questa non era facile…</span> Come cucinare con i concentrati di Cannabis<br>Una volta decarbossilati gli estratti, potrete usarli per dare una spinta in più a quasi tutti i vostri piatti preferiti. Ricordatevi che il THC è liposolubile, per cui avrete ancora bisogno di usare burro, olio o un'altra forma di grasso alimentare (come ad esempio il ghi, o burro chiarificato). Di solito, consigliamo di mescolare i concentrati in piccole quantità di burro o olio quando sono ancora caldi dal processo di decarbossilazione. Mescolate energicamente la miscela fino a completa dissoluzione del concentrato nel grasso.<b>Fonte</b>: Blog Royal Queen Seeds<a href='https://www.royalqueenseeds.it/blog-come-cucinare-con-concentrati-di-cannabis-come-kief-hashish-e-bho-n1125' target='_blank'> Come Cucinare Con Concentrati Di Cannabis Come Kief, Hashish e BHO.</a></p>"// no comma here
        },


 { // Question 6
            "q": "La cosiddetta Cannabis light deve contenere una percentuale di THC:",
            "a": [
                {"option": "Inferiore o pari a 0,5%",      "correct": true},
                {"option": "Inferiore a 1%",     "correct": false},
                {"option": "Non contiene THC",      "correct": false}
            ],
            "correct": "<p><span>👍 Yep</span> Per quanto riguarda la vendita dei fiori di Cannabis, in linea teorica devono contenere una percentuale di THC inferiore o pari allo 0,6; all'atto pratico, c'è un vuoto normativo e la cassazione si è pronunciata fino allo 0,5.<br>Fonti:<br>Altalex.com - <a href='https://www.altalex.com/documents/news/2017/01/05/disposizioni-per-la-promozione-della-coltivazione-e-della-filiera-agroindustriale-della-canapa' target='_blank'>Canapa: disposizioni per la promozione della coltivazione e della filiera agroindustriale</a>, Legge, 02/12/2016 n° 242, G.U. 30/12/2016.<br>Blog Cbdexpress.it - <a href='https://cbdexpress.it/blog/post/cannabis-legale-la-cassazione-si-pronuncia-sui-sequestri-se-il-thc-e-inferiore-al-05' target='_blank'>Cannabis legale, la Cassazione si pronuncia sui sequestri se il THC è inferiore al 0,5%</a><br>Per approfondire le vicissitudini legali della Cannabis light in Italia, guarda il video di Matteo Gracis, direttore di Dolcevita Magazine: <a href='https://www.youtube.com/watch?v=byGL2VxFCT0' target='_blank'>Salvini e la Cannabis: una storia triste.</a></p>",
            "incorrect": "<p><span>👎 Nope </span> Per quanto riguarda la vendita dei fiori di Cannabis, in linea teorica devono contenere una percentuale di THC inferiore o pari allo 0,6; all'atto pratico, c'è un vuoto normativo e la cassazione si è pronunciata fino allo 0,5.<br>Fonti:<br>Altalex.com - <a href='https://www.altalex.com/documents/news/2017/01/05/disposizioni-per-la-promozione-della-coltivazione-e-della-filiera-agroindustriale-della-canapa' target='_blank'>Canapa: disposizioni per la promozione della coltivazione e della filiera agroindustriale</a>, Legge, 02/12/2016 n° 242, G.U. 30/12/2016.<br>Blog Cbdexpress.it - <a href='https://cbdexpress.it/blog/post/cannabis-legale-la-cassazione-si-pronuncia-sui-sequestri-se-il-thc-e-inferiore-al-05' target='_blank'>Cannabis legale, la Cassazione si pronuncia sui sequestri se il THC è inferiore al 0,5%</a><br>Per approfondire le vicissitudini legali della Cannabis light in Italia, guarda il video di Matteo Gracis, direttore di Dolcevita Magazine: <a href='https://www.youtube.com/watch?v=byGL2VxFCT0' target='_blank'>Salvini e la Cannabis: una storia triste.</a></p>"// no comma here
        },

 { // Question 7
            "q": "In Italia, dal 2020, secondo la Cassazione, non costituisce più reato:",
            "a": [
                {"option": "Coltivare un limitato numero di piante di Cannabis, con metodi rudimentali, per uso personale",      "correct": true},
                {"option": "Coltivare un limitato numero di piante per rivenderne il prodotto",     "correct": false},
                {"option": "Coltivare fino a 10 piante di cannabis in grow box",      "correct": false}
            ],
            "correct": "<p><span>👍 Molto bene!</span> Con sentenza depositata il 16 aprile 2020, le Sezioni Unite hanno affermato il seguente principio di diritto: «il reato di coltivazione di stupefacenti è configurabile indipendentemente dalla quantità di principio attivo ricavabile nell'immediatezza, […] devono però ritenersi escluse, in quanto non riconducibili all'ambito di applicazione della norma penale, le attività di coltivazione di minime dimensioni svolte in forma domestica, che per le rudimentali tecniche utilizzate, lo scarso numero di piante, il modestissimo quantitativo di prodotto ricavabile, la mancanza di ulteriori indici di un loro inserimento nell'ambito del mercato degli stupefacenti, appaiono destinate in via esclusiva all'uso personale del coltivatore».<br><b>Fonte</b>: Giurisprudenzapenale.com <a href='https://www.giurisprudenzapenale.com/2020/04/16/coltivazione-di-piante-da-cui-siano-ricavabili-sostanze-stupefacenti-depositata-la-sentenza-delle-sezioni-unite-12348-2020/' target='_blank'>Coltivazione di piante da cui siano ricavabili sostanze stupefacenti: depositata la sentenza delle Sezioni Unite (12348/2020).</a></p>",
            "incorrect": "<p><span>👎 Errato</span> Con sentenza depositata il 16 aprile 2020, le Sezioni Unite hanno affermato il seguente principio di diritto: «il reato di coltivazione di stupefacenti è configurabile indipendentemente dalla quantità di principio attivo ricavabile nell'immediatezza, […] devono però ritenersi escluse, in quanto non riconducibili all'ambito di applicazione della norma penale, le attività di coltivazione di minime dimensioni svolte in forma domestica, che per le rudimentali tecniche utilizzate, lo scarso numero di piante, il modestissimo quantitativo di prodotto ricavabile, la mancanza di ulteriori indici di un loro inserimento nell'ambito del mercato degli stupefacenti, appaiono destinate in via esclusiva all'uso personale del coltivatore».<br><b>Fonte</b>: Giurisprudenzapenale.com <a href='https://www.giurisprudenzapenale.com/2020/04/16/coltivazione-di-piante-da-cui-siano-ricavabili-sostanze-stupefacenti-depositata-la-sentenza-delle-sezioni-unite-12348-2020/' target='_blank'>Coltivazione di piante da cui siano ricavabili sostanze stupefacenti: depositata la sentenza delle Sezioni Unite (12348/2020).</a></p>"// no comma here
        },


 { // Question 8
            "q": "Quanto spendono all'incirca gli italiani in Cannabis?",
            "a": [
                {"option": "1 miliardo/anno",      "correct": false},
                {"option": "3 miliardi/anno",     "correct": false},
                {"option": "6 miliardi/anno",      "correct": true}
            ],
            "correct": "<p><span>👍 Proprio così</span> Secondo le Relazioni al Parlamento sulle dipendenze 2020, il traffico illegale di Cannabis risulta aver generato solo nel 2019 una spesa da parte dei consumatori di 6,3 miliardi di euro. Una cifra enorme che ogni anno finisce nella mani delle mafie.<br>La relazione annuale al Parlamento sul fenomeno delle tossicodipendenze è un documento fondamentale per studiare l'evoluzione del mercato delle sostanze stupefacenti e per legge il dipartimento per le politiche antidroga dovrebbe presentarlo entro il 30 Giugno di ogni anno.⁣ <b>Fonte</b>: <a href='https://www.instagram.com/p/CHYL6DOjMJZ/' target='_blank'>Megliolegale.it</a></p>",
            "incorrect": "<p><span>👎 No, ben di più</span> Secondo le Relazioni al Parlamento sulle dipendenze 2020, il traffico illegale di  Cannabis risulta aver generato solo nel 2019 una spesa da parte dei consumatori di 6,3 miliardi di euro. Una cifra enorme che ogni anno finisce nella mani delle mafie.<br>La relazione annuale al Parlamento sul fenomeno delle tossicodipendenze è un documento fondamentale per studiare l'evoluzione del mercato delle sostanze stupefacenti e per legge il dipartimento per le politiche antidroga dovrebbe presentarlo entro il 30 Giugno di ogni anno.⁣ <b>Fonte</b>: <a href='https://www.instagram.com/p/CHYL6DOjMJZ/' target='_blank'>Megliolegale.it</a></p>"// no comma here
        },


 { // Question 9
            "q": "In Italia riguardano la Cannabis:",
            "a": [
                {"option": "Il 15% di tutte le operazioni antidroga, 25% dei sequestri, 16% delle segnalazioni ai Prefetti per uso e possesso personale, 10% delle denunce alle autorità giudiziarie",      "correct": false},
                {"option": " Il 35% di tutte le operazioni antidroga, 66% dei sequestri, 16% delle segnalazioni ai Prefetti per uso e possesso personale, 20% delle denunce alle autorità giudiziarie",      "correct": false},
                {"option": "Il 58% di tutte le operazioni antidroga, 96% dei sequestri, 80% delle segnalazioni ai Prefetti per uso e possesso personale, 48% delle denunce alle autorità giudiziarie",      "correct": true}
            ],
            "correct": "<p><span>👍 Ebbene sì</span> In Italia riguardano la Cannabis il 58% di tutte le operazioni antidroga, 96% dei sequestri, 80% delle segnalazioni ai Prefetti per uso e possesso personale, 48% delle denunce alle autorità giudiziarie. Il 30% dei detenuti in Italia si trova in carcere per reati legati alla droga. La maggior parte di essi è stato arrestato per lo spaccio della sostanza meno pericolosa: la Cannabis.<br><b>Fonte</b>:<a href='https://megliolegale.it' target='_blank'>Megliolegale.it</a></p>",
            "incorrect": "<p><span>👎 Eh no</span> In Italia riguardano la Cannabis il 58% di tutte le operazioni antidroga, 96% dei sequestri, 80% delle segnalazioni ai Prefetti per uso e possesso personale, 48% delle denunce alle autorità giudiziarie. Il 30% dei detenuti in Italia si trova in carcere per reati legati alla droga. La maggior parte di essi è stato arrestato per lo spaccio della sostanza meno pericolosa: la Cannabis.<br><b>Fonte</b>:<a href='https://megliolegale.it' target='_blank'>Megliolegale.it</a></p>"// no comma here
        },

 { // Question 10
            "q": "In Italia l'uso di Cannabis è direttamente causa di:",
            "a": [
                {"option": "435.000 vittime negli ultimi 10 anni",      "correct": false},
                {"option": "1000 vittime circa all'anno, al 12° posto in Europa",     "correct": false},
                {"option": "0 vittime registrate, come nel resto del mondo ",      "correct": true}
            ],
            "correct": "<p><span>👍 Incredibile ma vero</span> 0 vittime: la Cannabis non è mai stata diretta causa di morte.In Italia è la dipendenza da alcol la più comune e rappresenta il primo fattore di rischio per la salute. Per l'Osservatorio Enpam-Eurispes, in Italia i decessi causati dall'alcol in 10 anni sono circa 430.000, una cifra enorme.⁣<br><b>Fonte</b>:<a href='https://www.instagram.com/p/CEjNnrQjfyn/' target='_blank'>Megliolegale.it</a></p>",
            "incorrect": "<p><span>👎 Sbagliato</span> 0 vittime: la Cannabis non è mai stata diretta causa di morte. In Italia è la dipendenza da alcol la più comune e rappresenta il primo fattore di rischio per la salute. Per l'Osservatorio Enpam-Eurispes, in Italia i decessi causati dall'alcol in 10 anni sono circa 430.000, una cifra enorme.⁣<br><b>Fonte</b>:<a href='https://www.instagram.com/p/CEjNnrQjfyn/' target='_blank'>Megliolegale.it</a></p>"// no comma here
        },


  { // Question 11
            "q": "La legalizzazione della cannabis porta a un aumento del consumo tra i giovani?",
            "a": [
                {"option": "Si, sono aumentati",      "correct": false},
                {"option": "Certo, é risaputo!",     "correct": false},
                {"option": "No, sono diminuiti",      "correct": true}
            ],
            "correct": "<p><span>👍 Risposta esatta!</span> <a href='https://norml.org/marijuana/fact-sheets/marijuana-regulation-and-teen-use-rates/' target='_blank'>Studio e info via NORML.org</a> <br>A seguito dell'emanazione sia delle leggi sull'accesso alla cannabis medica che delle leggi sulla marijuana per l'uso da parte degli adulti, non c'è stato alcun aumento nell'uso di marijuana da parte degli adolescenti.</p>",
            "incorrect": "<p><span>👎 Uhh no.</span> Sono diminuiti! <a href='https://norml.org/marijuana/fact-sheets/marijuana-regulation-and-teen-use-rates/' target='_blank'>Studio e info via NORML.org</a> <br>A seguito dell'emanazione sia delle leggi sull'accesso alla cannabis medica che delle leggi sulla marijuana per l'uso da parte degli adulti, non c'è stato alcun aumento nell'uso di marijuana da parte degli adolescenti.</p>"// no comma here
        },

        { // Question 12
            "q": "La legalizzazione della Cannabis porta a un aumento della criminalità?",
            "a": [
                {"option": "Si, i crimini aumentano",               "correct": false},
                {"option": "No, i crimini diminuiscono",   "correct": true},
                {"option": "Ci sono più spacciatori",               "correct": false}
            ],
            "select_any": true,
            "correct": "<p><span>👍 Giusto!</span> Questo documento studia gli effetti della legalizzazione della marijuana sulla criminalità di quartiere e documenta i modelli nel tempo nelle sedi dei dispensari, utilizzando dati dettagliati da Denver, Colorado etc… I risultati implicano che un dispensario aggiuntivo in un quartiere porta a una riduzione di 17 crimini al mese per 10.000 residenti, che corrisponde a un calo di circa il 19% rispetto al tasso medio di criminalità nel periodo campione. … Nel complesso, i nostri risultati suggeriscono che i dispensari causano una riduzione complessiva della criminalità nei quartieri, senza prove di ricadute nei quartieri circostanti. … I nostri risultati sono coerenti con le teorie che prevedono che la legalizzazione della marijuana rimpiazzerà le organizzazioni criminali illecite e ridurrà la criminalità attraverso cambiamenti nei comportamenti di sicurezza o sostituzione con sostanze più dannose. …<a href='https://www.sciencedirect.com/science/article/pii/S016604621830293X#!' target='_blank'>L'effetto della legalizzazione della marijuana sulla criminalità di quartiere, Regional Science and Urban Economics, 2019</a>,</p>",
            "incorrect": "<p><span>👎 No. Al contrario</span> Questo documento studia gli effetti della legalizzazione della marijuana sulla criminalità di quartiere e documenta i modelli nel tempo nelle sedi dei dispensari, utilizzando dati dettagliati da Denver, Colorado etc… I risultati implicano che un dispensario aggiuntivo in un quartiere porta a una riduzione di 17 crimini al mese per 10.000 residenti, che corrisponde a un calo di circa il 19% rispetto al tasso medio di criminalità nel periodo campione. … Nel complesso, i nostri risultati suggeriscono che i dispensari causano una riduzione complessiva della criminalità nei quartieri, senza prove di ricadute nei quartieri circostanti. … I nostri risultati sono coerenti con le teorie che prevedono che la legalizzazione della marijuana rimpiazzerà le organizzazioni criminali illecite e ridurrà la criminalità attraverso cambiamenti nei comportamenti di sicurezza o sostituzione con sostanze più dannose. …<a href='https://www.sciencedirect.com/science/article/pii/S016604621830293X#!' target='_blank'>L'effetto della legalizzazione della marijuana sulla criminalità di quartiere, Regional Science and Urban Economics, 2019</a> & <a href='http://journals.sagepub.com/doi/full/10.1177/1098611118786255' target='_blank'>Legalizzazione della marijuana e tassi di eliminazione del crimine: test delle affermazioni dei sostenitori in Colorado e nello stato di Washington, Police Quarterly, 2018</a></p>" // no comma here
        }
    ]
};
