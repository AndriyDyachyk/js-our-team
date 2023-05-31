PROBLEMA:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0 : Creare l’array di oggetti con le informazioni fornite (file informazioni team).
    SOLUZIONE: Creare l'array 'teamArray' = [] contenente le properties per ogni membro, quindi 'nome', 'ruolo' e 'foto'

MILESTONE 1 : Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    SOLUZIONE: Creare un ciclo for in che permette di stampare in console l'index dell'array creato

MILESTONE 2 : Stampare le stesse informazioni su DOM sottoforma di stringhe
    SOLUZIONE: 
                1 - Mediante lo stesso ciclo for, creare la costante che conterrà l'html della card da inseririre.
                2 - Recuperare il contenitore dal dom
                3 - inserire l'html della card creata nel container recuperato
                4 - Stilizzare le classi in css