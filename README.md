# Randomnest

Randomnest est un projet de **choix aléatoire intelligent** : il s’adapte aux préférences des utilisateurs tout en **maximisant la diversité**.

L’objectif est d’éviter l’ennui (trop de répétition) tout en reflétant le comportement réel de l’utilisateur et en respectant ses préférences.

## 🎯 Cas d’usage

Exemple typique : une **playlist de musique**.

Au lieu de “shuffle” uniforme, Randomnest attribue à chaque morceau un **score**, puis le transforme en **probabilité de tirage**.

## 🏗 Architecture du Domaine

Le cœur de Randomnest s'appuie sur une architecture modulaire décrite dans le diagramme de classes suivant :

![Diagramme de classes du domaine](src/diagramme.png)

> _Note : Le diagramme est défini dans `src/diagramme.puml`._

### Concepts Clés

Le domaine est structuré autour d'interfaces flexibles permettant d'étendre facilement les règles de scoring :

- **`IItem`** : L'unité de base identifiée par un ID et un nom.
- **`IScorable`** : Interface définissant la capacité à être évalué (`calculateScore`) et à exposer ses dépendances de score.
- **`IScorableItem`** : La fusion d'un item et de sa capacité à être scoré (ex: `Music`, `Artist`, `Style`).
- **`ScoreAttribute`** : Représente un critère atomique de notation (ex: `RecencyAttribute`, `PlayCountAttribute`, `LikeAttribute`).

### Relations et Composition

Le modèle privilégie la composition pour construire le score final :

- Une **`Music`** est composée d'un `Artist`, d'un `Style`, et d'une liste de `ScoreAttribute`.
- Un **`Artist`** ou un **`Style`** sont eux-mêmes des `IScorableItem` possédant leurs propres attributs.

Ainsi, le score d'une musique peut être influencé non seulement par ses propres signaux (ex: dernière écoute), mais aussi par ceux de son artiste ou de son style, permettant une recommandation riche et contextuelle.

## 📊 Données suivies (Signaux)

Pour chaque item (ex: un morceau), on stocke des signaux d’usage qui alimentent les `ScoreAttribute`. Exemples :

- **Récence** : Dernière date d’écoute, moyenne des dates.
- **Volume** : Nombre de lectures, durée d'écoute.
- **Engagement** : Notation (Likes), écoutes "conscientes".
- **Rejet** : Nombre de skips, skips récents.

## 🧮 Score → Probabilité

1. On calcule un **score** $s_i$ pour chaque item $i$.
2. On transforme en probabilité via normalisation :

$$
p_i = \frac{s_i}{\sum_j s_j}
$$

Ainsi, on garde un tirage aléatoire, mais **orienté**.

## 🧠 Intuition de scoring

On **augmente** le score des morceaux que l’utilisateur :

- a **peu écoutés récemment**
- écoute davantage de manière **volontaire / consciente**
- n’a **pas skip** récemment
- skip **peu** (globalement)
- a **bien notés**
- a **moins subis** (moins proposés fréquemment)

On **baisse** le score des morceaux avec des signaux inverses (trop écoutés, souvent skippés).
