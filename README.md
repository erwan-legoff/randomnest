# Randomnest

Randomnest est un projet de **choix aléatoire intelligent** : il s’adapte aux préférences des utilisateurs tout en **maximisant la diversité**.

L’objectif est d’éviter l’ennui (trop de répétition) tout en reflétant le comportement réel de l’utilisateur et en respectant ses préférences.

## Cas d’usage

Exemple typique : une **playlist de musique**.

Au lieu de “shuffle” uniforme, Randomnest attribue à chaque morceau un **score**, puis le transforme en **probabilité de tirage**.

## Données suivies (idée)

Pour chaque item (ex: un morceau), on stocke des signaux d’usage, par exemple :

- nombre de lectures
- durée d’écoute totale et/ou moyenne
- dernière date d’écoute
- moyenne des dernières dates d’écoute
- nombre de skips (et “skips récents”)
- notation utilisateur
- nombre de fois où l’utilisateur choisit de l’écouter volontairement (écoute “consciente”)
- (optionnel) une notation “auto” / modèle

Ces signaux alimentent le score.

## Score → probabilité

1. On calcule un **score** $s_i$ pour chaque item $i$.
2. On transforme en proba via normalisation :

$$
p_i = \frac{s_i}{\sum_j s_j}
$$

Ainsi, on garde un tirage aléatoire, mais **orienté**.

## Intuition de scoring

On **augmente** le score des morceaux que l’utilisateur :

- a **peu écoutés récemment**
- écoute davantage de manière **volontaire / consciente**
- n’a **pas skip** récemment
- skip **peu** (globalement)
- a **bien notés**
- a **moins subis** (moins proposés fréquemment)

On **baisse** le score des morceaux que l’utilisateur :

- a **beaucoup skip** récemment
- écoute peu de manière **volontaire**
- s’est vu **beaucoup proposer** récemment (sur-exposition)
- note **bas**

## Statut du repo

Ce dépôt est un **prototype API NestJS** (TypeScript). L’implémentation actuelle sert surtout de base pour itérer sur le modèle de données et la logique de sélection.

## Démarrer en local

```bash
npm install
```

```bash
# dev
npm run start:dev

# prod (build + run)
npm run build
npm run start:prod
```

## Tests

```bash
npm run test
npm run test:e2e
npm run test:cov
```
