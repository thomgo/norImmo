# Agence immobilière NorImmo

Il s'agit d'une application développée dans le cadre de mon activité de formateur en développement web. L'objectif avec ce projet est que les étudiants, en équipe, pratiquent la manipulation du DOM en JavaScript sur une interface HTML/CSS réalisée sous le framework Bootstrap 4.

Au travers de cet exercice, ils apprennent à :
- Manipuler l’arbre HTML (récupérer, créer et modifier des éléments)
- Manipuler les propriétés physiques des éléments
- Modifier le CSS
- Gérer le temps
- Détecter des événements
- Traiter les données de formulaires
- Intégrer et utiliser le framework Bootstrap 4 dans son projet
- Travailler en équipe agile

## Consignes

NorImmo est le leader de la construction et de la rénovation de maisons individuelles en Normandie. Pourquoi notre entreprise est-elle la première sur son marché ? Car elle propose aussi bien des prestations de rénovation que de construction. En intervenant autant sur le neuf que sur l’ancien NorImmo a ainsi acquis une expertise globale qui lui a valu la confiance de ses clients. Avec un taux de satisfaction de 90 % nos clients sont les plus satisfaits de Normandie. C’est pourquoi nous avons remporté le grand prix BestBuilder 2015, 2016 et 2019 qui récompense les meilleurs entrepreneurs.

Dans le cadre de cette démarche qualité constante, notre entreprise souhaite moderniser son site vitrine. L’objectif étant de le rendre plus dynamique et de permettre une meilleure interaction avec l’utilisateur.

Spécifications fonctionnelles :

- Sur la page d’accueil un carousel fait défiler des projets. Pour chaque projet l’utilisateur voit une photo et une description. Il peut s’il le souhaite faire défiler les projets lui-même à l’aide de boutons. Sous le carousel il trouve un texte présentant l’entreprise.

- Une page permet d’accéder aux questions fréquemment posées. Les questions sont d’abord visibles de l’utilisateur mais pas les réponses. Quand l’utilisateur clique sur une question alors la réponse s’affiche en dessous. S’il clique à nouveau sur la question alors la réponse disparaît.

- Une page permet de contacter l’entreprise via un formulaire de contact. Ce formulaire contient les éléments suivants :
Nom : entre 2 et 50 caractères, pas de chiffres
Prénom : entre 2 et 50 caractères, pas de chiffres
Téléphone : un numéro valide au format français vérifié par regex
Motif du contact (devis, information ou réclamation)
Message : 400 caractères maximum, le nombre de caractères restant est affiché en temps réel sous la zone de saisie. Il est également vérifié que le message ne contient pas les termes suivant : sexe, sex, con, connard
Si la saisie utilisateur est valide, alors l’input passe au vert. Si ce n’est pas le cas il passe au rouge et un message lui indique son erreur (géré en JS et non CSS).

- Une page permet aux clients de réaliser une estimation approximative du coup de leur projet immobilier. Sur cette page, via un formulaire, le client peut rentrer :
la surface en m²
le nombre de chambres
le matériau de construction (parpaing, bois ou brique).
Le coût est calculé de la manière suivante : le coût de base est de 1000€/m², chaque chambre rajoute 10 000€ au coût total, le matériau choisi rajoute un surcoût au coût total (parpaing : 20 %, brique : 30 %, bois : 15%).  Ainsi une maison de 50m2 avec deux chambres en brique est normalement estimée à : 91€

Spécifications techniques :
- HTML5
- CSS3
- Framework Boostrap4
- Base Boilerplate
- JavaScript avec respect des normes ES6
