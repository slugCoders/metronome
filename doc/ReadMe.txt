
Detalls del codi Modificar tempo. 
View:
Al disparar l'event s'executen dues funcions Un count i timeout
La clau es que el time out dona un marge per no disparar l'event inmediatament cada cop que es prem el botó,
sinó que espera 1 segon a llençar-lo i així es dona temps a l'usuari que premi tants cops com
vulgui el botó, sense que la liï massa.


Manager:
hi ha la funció modTempo que modifca el tempo en funció de la view i dispara el ritme.

Observacions:

Resulta que per fer el ritme del metrònom vaig haver de fer una història una mica rara però és 
l'única manera que he trobat que funcioni. La clau és el setInterval que et perment executar una
funció cada x temps, jo executo el ritme a cada compas. Però alhora això està lliga amb el context
del webAudio, que és don treiem el temps de partida.

I aquesta història provoco molts mals de caps, però sembla que ara ja esta quasi solucionat.