# Implémentation du calcul du score

On a un Score Engine qui vient "orchestrer" le scoring : il va notamment parcourir la playlist et lancer les calculs, peut-être devra-t-il calculer le "Next Song" ?

Chaque scorable entité est responsable de son score. On aura le "Fast Score" et le "Deep Score". Le Fast Score est plus simple et permettra de calculer le Deep Score plus tard.

## Fast Score

Le fast score c'est le calcul du score en partant de l'item dont on veut calculer le score (la musique) et en faisant appel aux scores de ces différents attributs.

Pour une musique par exemple, on va utiliser son nombre d'écoute, la note de l'utilisateur, le nombre de fois que l'utilisateur l'a passée, a cliqué consciemment dessus, le % moyen écouté de la musique...

Ces attributs peuvent avoir des scores directement calculés en utilisant le contexte fourni par le moteur.

### Le contexte

Le contexte donne des informations utiles pour calculer les différents scores. En effet, pour calculer le score d'un attribut donné, la valeur unique de l'item ne suffit pas, il faut la mettre en correspondance avec la globalité de la collection pour avoir une échelle et normalizer les scores

Exemple :

Je calcule le score de nombre d'écoute d'une musique, je sais qu'elle a 2 écoutes, ok, mais est-ce beaucoup ? A priori non, mais peut-être que si si il y a que 2 écoutes au total dans la playlist, ou que l'écoute moyenne est autour de 0 par morceau.

Donc on va ajouter dans MusicScoreContext le nombre d'écoute min, le nombre d'écoute max ainsi que la moyenne, et pourquoi pas l'écart type. Avec ça on peut faire un score sympa qui sera normalisé pour tout le monde.

### Un attribut

Un attribut est Scorable mais il est aussi atomique : il ne peut pas avoir d'autres attributs et ne dépendant donc que du contexte. Exemples d'attributs.

### L'architecture en arbre

Pour calculer le score de la musique, en plus des simples attributs, on a aussi d'autres IScorableItem, comme L'artiste, qui lui aussi peut potentiellement avoir ses propres attributs, ou avoir d'autres IScorableItem comme par exemple Style.

On pourrait imaginer qu'à chaque écoute d'une musique on update aussi les attributs respectifs de Style et Artist.

Et donc une fois que le style de l'artiste a calculé son score par rapport à ses attributs, l'artiste lui calcule son score par rapport à ses attributs et son style, et la musique calcule son score par rapport à ses attributs, son style et son artiste.

Cependant, il peut potentiellement y avoir des données manquantes qui pourrait améliorer grandement l'algo.

## Deep Score

Dans le cas du fast score tout se faisait en une passe, alors qu'ici nous procéderons par itération récursive.
Les attributs d'un artistes ne sont pas forcément les plus simples à calculer, on devrait aussi prendre la moyenne de tous les artistes etc, ce qui pourrait être fait, mais est-ce que cela ne viendrait pas perturber l'algo ? En effet un artiste qui a beaucoup de musique a potentiellement bien plus d'écoute, mais cela ne veut pas dire qu'il est davantage aimer par l'utilisateur, simplement il est sur-représenté.

### La récursivité inversée

Une fois qu'on a calculé les fast scores, potentiellement sans vraiment prendre en compte les artistes ou les styles vu qu'ils auraient pas d'attributs a proprement parlé (à part une notation de l'utilisateur par exemple) et bien on inverse le calcul : l'item qu'on "consomme" est utilisé pour calculer le score de ses sous items. Ce qui permet d'avoir un score plus "naturel" et qui est parfaitement représenté par les items qui les composent.

Exemple :

On a calculé déjà le fast score des musiques de Radiohead qui font partie du style Alternative. Le fast score est donc une "approximation" dans notre cas du vrai score (itération 0) car Radiohead n'a pas vraiment de score à proprement parlé, et de même pour le style Alternative.

On va ensuite lancer l'itération 1 :
On va utiliser les notes de Creep, No Surprises et Fake Plastic Trees pour faire au final un score moyen de l'artiste Radiohead. Ces morceaux vont aussi aider au score du style Alternative.
Ces nouveaux scores de Radiohead et Alternative vont être utilisé pour recalculer le score des morceaux en question (car maintenant le score de raiohead/alternative est plus précis), mais aussi le score de Radiohead sera reclaculé par rapport au score de son style.

Dans l'absolu ces scores "agglomérés" (qui devront sûrement avoir leur propre type) auront un système de cache pour que même dans le fast score on ait un score exploitable, même si non à jour.

On pourrait aussi imaginer que les itérations se fassent de manière très lentes c'est à dire que en dessous de 100 écoutes on ne calcule pas le score des artistes, ensuite à la 100ème écoute on calcule le score de l'artiste qu'on vient d'écouter mais juste sur 10 morceaux aléatoires, puis on recalcule pas forcément directement le score de tous les morceaux tout le temps, juste celui qu'on vient d'écouter et les 10% les moins probable qu'on écoute, on pourrait aussi décider d'avoir un very dirty calcule qui passe pas par les enfants. Puis l'utilisateur pourrait avoir un bouton "Actualiser Aléatoire" qui lance le calcul total sur une itération voire "Améliorer Aléatoire" qui va du coup demander à l'utilisateurs'il est d'accord sur les morceaux qu'il veut écouter le plus ou non, genre "je veux plus écouter" ou "je veux moins écouter" ou "ok" et ça vient donc incrémenter l'aléatoire. On aurait ça aussi dans l'interface, un bouton "Je veux moins écouter", "je veux plus écouter", "je veux faire une pause sur ce morceau"

### Eviter les boucles infinies

#### Double relation

Comme on voudra sûrement avoir une double relation : Un artiste a des musiques, on risque d'avoir un eboucle, donc cette relation devra être d'un type différent pour éviter les boucles, peut-être un type supplémentaire de type LazyScorable qui pourrait avoir un score Lazy. Ou autre nom du genre Recursive (mais moins claire)

#### Non convergence

Le score est par définition non convergent c'est ce qui en fait sa force, donc il faut faire en sorte que ça s'arrête de calculer à un moment.

##### S'arrêter au bout d'un seuil minimum de changement

Quand rien ne bouge vraiment on arrête les itérations.

##### Ne pas démarrer avant un seuil de modif

Tant qu'on a eu peu d'écoute par rapport au total récent, ou au nombre de musique dans la playlist (genre 1% depuis une semaine) alors on touche pas au deep score

##### Eviter l'emballement

Peut-être que le score va s'emballer au bout de chaque itération, il faudra sonc prévoire au bout de chaque itération de réduire l'influence des enfants sur le score final (mais ça me semble pas forcément obligatoire car tout n'est que moyenne)

## Particularité du scoring

Le système de score devrait avoir une notion de "véto", c'est à dire pas juste de pondération mais aussi de "court-circuit" où on dit : peut importe les autres score, ce morceau ne sera pas lu. Potentiellement ce skipping devrait avoir une date d'expiration. On devrait quand même essayer de privilégier les pondérations pour avoir quelque chose de plus "intelligent" et dynamique et varié.
