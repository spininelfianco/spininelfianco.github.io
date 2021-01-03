// Setup per il quiz domande e risposte

// NOTE: ricordati le virgole, IE ha problemi con i cattivi ragazzi

var quizJSON = {
    "info": {
        "name":    "Testa le tue conoscenze sulla cannabis!!",
        "main":    "<p>Pensi di saperne abbastanza sulla cannabis? Scopri le tue conoscenze con questo semplice quiz!</p>",
        "results": "<h5>Per saperne di più</h5><p>La politica sulla cannabis dovrebbe essere basata su prove. Questo è il motivo per cui <a href='https://twitter.com/search?q=spininelfianco&src=typed_query'><b>#spininelfianco</b></a> ha preparato le seguenti schede informative che evidenziano la scienza pertinente sottoposta a revisione paritaria relativa agli impatti sulla salute e sulla società dell'uso, dell'applicazione e della regolamentazione della cannabis. <a href='https://norml.org/marijuana/fact-sheets'>Schede Informative via NORML</a></p> <br>Nel 2020, i ricercatori di tutto il mondo hanno pubblicato oltre 3.500 articoli scientifici sul tema della cannabis, secondo i dati compilati dalla National Library of Medicine e <a href='https://pubmed.ncbi.nlm.nih.gov/?term=marijuana'>PubMed.gov</a>",
        "level1":  "🏆 Informato",
        "level2":  "😏 Abbastanza Informato",
        "level3":  "😐 Poco informato",
        "level4":  "😕 Disinformato",
        "level5":  "😡 Devi assolutamente studiare..." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "La legalizzazione della cannabis porta ad un aumento del consumo tra i giovani?",
            "a": [
                {"option": "Si, sono aumentati",      "correct": false},
                {"option": "Certo, é risaputo!",     "correct": false},
                {"option": "No, sono diminuiti",      "correct": true}
            ],
            "correct": "<p><span>👍 Risposta esatta!</span> <a href='https://norml.org/marijuana/fact-sheets/marijuana-regulation-and-teen-use-rates/'>Studio e info via NORML.org!</a> <br>A seguito dell'emanazione sia delle leggi sull'accesso alla cannabis medica che delle leggi sulla marijuana per l'uso da parte degli adulti, non c'è stato alcun aumento nell'uso di marijuana da parte degli adolescenti.</p>",
            "incorrect": "<p><span>👎 Uhh no.</span> Sono diminuiti! <a href='https://norml.org/marijuana/fact-sheets/marijuana-regulation-and-teen-use-rates/'>Studio e info via NORML.org!</a> <br>A seguito dell'emanazione sia delle leggi sull'accesso alla cannabis medica che delle leggi sulla marijuana per l'uso da parte degli adulti, non c'è stato alcun aumento nell'uso di marijuana da parte degli adolescenti.</p>"// no comma here
        },
        { // Question 2
            "q": "La legalizzazione della cannabis porta ad un aumento della criminalità?",
            "a": [
                {"option": "Si, sono aumentati i crimini",               "correct": false},
                {"option": "No, sono diminuiti",   "correct": true},
                {"option": "Ci sono piú spacciatori",               "correct": false}
            ],
            "select_any": true,
            "correct": "<p><span>👍 Giusto!</span> Questo documento studia gli effetti della legalizzazione della marijuana sulla criminalità di quartiere e documenta i modelli nel tempo nelle sedi dei dispensari, utilizzando dati dettagliati da Denver, Colorado etc… I risultati implicano che un dispensario aggiuntivo in un quartiere porta a una riduzione di 17 crimini al mese per 10.000 residenti, che corrisponde a un calo di circa il 19% rispetto al tasso medio di criminalità nel periodo campione. … Nel complesso, i nostri risultati suggeriscono che i dispensari causano una riduzione complessiva della criminalità nei quartieri, senza prove di ricadute nei quartieri circostanti. … I nostri risultati sono coerenti con le teorie che prevedono che la legalizzazione della marijuana rimpiazzerà le organizzazioni criminali illecite e ridurrà la criminalità attraverso cambiamenti nei comportamenti di sicurezza o sostituzione con sostanze più dannose. …<a href='https://www.sciencedirect.com/science/article/pii/S016604621830293X#!'>L'effetto della legalizzazione della marijuana sulla criminalità di quartiere, Regional Science and Urban Economics, 2019</a>,</p>",
            "incorrect": "<p><span>👎 No. al contrario</span> Questo documento studia gli effetti della legalizzazione della marijuana sulla criminalità di quartiere e documenta i modelli nel tempo nelle sedi dei dispensari, utilizzando dati dettagliati da Denver, Colorado etc… I risultati implicano che un dispensario aggiuntivo in un quartiere porta a una riduzione di 17 crimini al mese per 10.000 residenti, che corrisponde a un calo di circa il 19% rispetto al tasso medio di criminalità nel periodo campione. … Nel complesso, i nostri risultati suggeriscono che i dispensari causano una riduzione complessiva della criminalità nei quartieri, senza prove di ricadute nei quartieri circostanti. … I nostri risultati sono coerenti con le teorie che prevedono che la legalizzazione della marijuana rimpiazzerà le organizzazioni criminali illecite e ridurrà la criminalità attraverso cambiamenti nei comportamenti di sicurezza o sostituzione con sostanze più dannose. …<a href='https://www.sciencedirect.com/science/article/pii/S016604621830293X#!'>L'effetto della legalizzazione della marijuana sulla criminalità di quartiere, Regional Science and Urban Economics, 2019</a>& <a href='http://journals.sagepub.com/doi/full/10.1177/1098611118786255'>Legalizzazione della marijuana e tassi di eliminazione del crimine: test delle affermazioni dei sostenitori in Colorado e nello stato di Washington, Police Quarterly, 2018</a></p>" // no comma here
        },
        { // Question 3 
            "q": "Le leggi sulla legalizzazione della cannabis ricreativa sono associate ad effetti negativi sulla sicurezza del traffico?",
            "a": [
                {"option": "No",           "correct": true},
                {"option": "Si, aumentano gli incidenti stradali",                  "correct": false},
                {"option": "No, diminuiscono",          "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>👍 Esatto!</span> Uno studio ha esaminato l'associazione tra la legalizzazione della cannabis (uso medico, ricreativo e vendita ricreativa) e le percentuali di incidenti mortali di veicoli a motore. ¨… Non abbiamo trovato differenze negli incidenti mortali di veicoli a motore tra gli stati che hanno legalizzato la cannabis¨. <a href='https://pubmed.ncbi.nlm.nih.gov/32856949/'>Esame delle relazioni tra la legalizzazione della cannabis e gli incidenti mortali di veicoli a motore</a><br>In California la legalizzazione della cannabis ha portato a una riduzione sostenuta in tutto lo stato di vittime di incidenti stradali...<a href='https://link.springer.com/article/10.1007/s11292-018-9345-3'>Info</a></p>",
            "incorrect": "<p><span>👎 No! risposta sbagliata!</span> Uno studio ha esaminato l'associazione tra la legalizzazione della cannabis (uso medico, ricreativo e vendita ricreativa) e le percentuali di incidenti mortali di veicoli a motore. ¨… Non abbiamo trovato differenze negli incidenti mortali di veicoli a motore tra gli stati che hanno legalizzato la cannabis¨. <a href='https://pubmed.ncbi.nlm.nih.gov/32856949/'>Esame delle relazioni tra la legalizzazione della cannabis e gli incidenti mortali di veicoli a motore</a><br>In California la legalizzazione della cannabis ha portato a una riduzione sostenuta in tutto lo stato di vittime di incidenti stradali...<a href='https://link.springer.com/article/10.1007/s11292-018-9345-3'>Info</a></p>" // no comma here
        },
        { // Question 4
            "q": "La regolamentazione della cannabis è associata ad un calo del consumo di alcol?",
            "a": [
                {"option": "No",    "correct": false},
                {"option": "Si",     "correct": true},
                {"option": "Non ci sono studi",      "correct": false}
            ],
            "correct": "<p><span>👍 Vero!</span> <br>Gli Stati che legalizzano l'uso di marijuana medica registrano una significativa diminuzione delle vendite complessive di alcol, birra e vino. Inoltre, gli effetti non sono di breve durata, con riduzioni significative osservate fino a 24 mesi dopo l'approvazione della legge. <a href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3063288'>INFO</a></p>",
            "incorrect": "<p><span>👎 Falso!</span> La regolamentazione della cannabis è associata al calo del consumo di alcol. <a href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3063288'>INFO</a></p>" // no comma here
        },
        { // Question 5
            "q": "☠️ Esiste una dose letale?",
            "a": [
                {"option": "Si",    "correct": false},
                {"option": "No, non esiste dose letale",    "correct": true},                
                {"option": "Si, se viene ingerita",     "correct": false} // no comma here
            ],
            "correct": "<p><span>👍 Esatto!</span> Non esiste dose mortale</p>",
            "incorrect": "<p><span>👎 Assolutamente no!</span> Non esiste dose mortale!</p>" // no comma here
        } // no comma here
    ]
};
