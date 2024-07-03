# Sujet de TP Final : Création d'une API RESTful avec Express

## Objectif

Votre objectif est de développer une API RESTful complète sur un thème de votre choix en utilisant Express.js et en respectant l'architecture MVC (Modèle-Vue-Contrôleur). L'API doit comporter plusieurs modules (routers, models, views, controllers), intégrer des middlewares et utiliser des vues EJS pour des fonctionnalités de débogage.

## Instructions générales

1. **Choix du sujet** : Vous êtes libre de choisir le thème de votre API. Quelques exemples de thèmes possibles incluent un système de gestion de bibliothèque, un service de réservation (hôtels, restaurants), ou encore une application de gestion de tâches. Cependant, il est **strictement interdit** de choisir un blog pour ce TP. Tout simplement car nous l'avons déjà fait et que cela ne serait pas très intéressant de refaire la même chose.
2. **Architecture MVC** : Structurez votre application en suivant le modèle MVC. Cela implique de séparer clairement la logique métier dans les modèles, la gestion des routes dans les contrôleurs, et les affichages dans les vues.

3. **Fonctionnalités RESTful** : Votre API doit respecter les principes RESTful. Cela comprend l'utilisation des méthodes HTTP appropriées pour chaque action, le maintien d'un état sans état pour les requêtes et des réponses avec des codes de statut HTTP adéquats, et également une harmonie et une standardisation dans les réponses renvoyées (en gros, il faut que les réponses soient toutes de la même forme).

4. **Multiple modules** : Votre application doit inclure plusieurs modules (au moins quatre de chaque type: modèles, vues, contrôleurs, routes). Il faut également utiliser **toutes** les méthodes HTTP (GET, POST, PUT, DELETE) pour manipuler les données. Il doit donc y avoir **au moins quatre routes différentes pour chaque module**. Si vous êtes solo sur ce projet, vous pouvez vous limiter à deux modules de chaque type.

   **Il faut respecter l'architecture MVC !** A savoir, le model appelé par le controller, appellé dans le router. Un module = un ensemble (model, controller, router). Donc si vous avez 4 modules, vous avez 4 models, 4 controllers, 4 routers. Si vous avez deux modules, vous avez 2 models, 2 controllers, 2 routers.

5. **Middlewares** : Intégrez au moins deux middlewares personnalisés qui traitent des aspects tels que la journalisation des requêtes, la gestion des erreurs, etc.

6. **Vues pour le débogage** : Utilisez EJS pour créer des vues simplifiées permettant de visualiser et de déboguer les données traitées par l'API. Ces vues ne doivent pas être complexes mais doivent fournir une interface basique pour interagir avec votre API. J'attends tout de même un minimum, à savoir des tableaux par exemple. **Sachez que ce n'est pas le point le plus important du TP.** Et n'oubliez pas, les views ont également un controller et un router, mais pas forcément de model.

7. **Documentation** : Documentez (uniquement avec des commentaires) toutes les routes disponibles dans votre API, en spécifiant les méthodes HTTP, les chemins, les paramètres attendus et les formats de réponse.

## Évaluation

Votre projet sera évalué sur les critères suivants :

1. **Respect de l'architecture MVC**
2. **Conformité aux principes RESTful**
3. **Qualité et organisation du code**
4. **Documentation et facilité d'utilisation de l'API**
5. **Fonctionnalités et nombre de modules respectés**
6. **Utilisation de middlewares**
7. **Utilisation de vues EJS pour le débogage**
8. **Toutes les méthodes HTTP utilisées**

## Livrables

- Code source complet de l'application dans un repository Github / Gitlab / Bitbucket..... **Aucun repository Git = 0**. De même pour un commit unique réalisé au dernier moment. Utilisez des commits réguliers pour montrer votre progression.
- Fichier README.md pour expliquer un peu votre projet, comment l'installer et l'utiliser.

## Bonus

- **Frontend** : Si vous souhaitez ajouter un frontend à votre application, vous pouvez le faire. Cela peut être une simple page HTML ou une application React, Angular, Vue, etc.
- **Sanitization et validation des données** : Ajoutez des vérifications de données pour garantir que les données entrantes sont correctes et sécurisées. Dans les controllers ou avec des middlewares.

Ce TP est conçu pour tester votre capacité à créer une application backend bien structurée. Prenez votre temps pour planifier et développer une solution robuste et bien conçue.

N'allez pas trop loin, restez simple et minimaliste. L'objectif est de montrer que vous avez compris les concepts de base et que vous pouvez les appliquer correctement. Je n'attends pas un projet ultra-complexe, mais un projet bien structuré et fonctionnel. Quelque chose de simple et bien construit vaut mieux qu'un début de quelque chose de complexe et mal structuré.

Bonne chance ! ;)
