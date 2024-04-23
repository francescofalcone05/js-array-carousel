
**********************  TRACCIA *****************************
MILESTONE 1
Per prima cosa, creiamo il markup statico come visto in mattinata. Costruiamo il container e inseriamo le immagini.
Solo una sarà visibile grazie a una sua classe, avremo così la struttura base. Condite con un pò di CSS per dare stile (senza esagerare).
Vi consiglio di rispolvere object-fit :occhiolino:

MILESTONE 2
Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.

**********************  SVOLGIMENTO *****************************

1) Inserisco e stilizzo le immagini ed i bottoni nel file HTML.

2) Sul file JS creo delle variabili che richiamano i miei elementi nel DOM (immagini e bottoni).

3) Selelziono le immagini con la classe .active, alla quale rimuovo la classe stessa.

4) Seleziono l'immagine successiva, alla quale assegno la classe .active

5) Verifico che il tutto funzioni.

6) Tramite il bottone NEXT stabilisco il momento in cui tuto cio` deve avvenire .

7) Ripeto gli stessi passaggi ma al posto di procedere con la successiva, seleziono la precedente e collego il tutto al button PREVIOUS.
