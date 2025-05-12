
#  Test de connexion à un jeu avec vérification de paiement

Ceci est un petit projet que j’ai fait pour tester comment un joueur peut rejoindre un jeu en fonction du montant qu’il a payé.

## Comment tester

1. **Installer les dépendances**  
   Ouvre un terminal dans le dossier du projet et tape :
   ```bash
   npm install
   
Lancer le Serveur
Une fois les dépendances installées, démarrez le serveur avec la commande suivante :

bash
node Test.js
Le serveur s'exécutera à l'adresse suivante : http://localhost:3000.

Ouvrir la Page HTML
Double-cliquez sur le fichier Test.html pour l'ouvrir dans votre navigateur.

Accéder à la Console Développeur
Appuyez sur F12 ou faites un clic droit → Inspecter → Accédez à l'onglet Console.

Tester avec le Bouton
Cliquez sur le bouton Tester pour envoyer une requête au serveur. Les résultats s'afficheront dans la console.

Modifier le Montant pour Tester les Échecs
Dans le fichier Test.html, modifiez la ligne suivante :

JavaScript
payment_amount: 5
Si le montant est supérieur à 10, la connexion est réussie.
Si le montant est 10 ou moins, le serveur affichera un message d’erreur.
Fichiers du Projet
Test.html : Fichier HTML avec un bouton pour effectuer des tests.
Test.js : Code du serveur Node.js utilisant Express.
README.md : Ce fichier de documentation.
Informations Supplémentaires
Ce projet utilise les modules express et cors. Si vous ne les avez pas encore installés, exécutez les commandes suivantes :
bash
npm init -y
npm install express cors
Résultat Attendu
Si le paiement est supérieur à 10, le serveur permet au joueur de rejoindre.
Si le paiement est égal ou inférieur à 10, le serveur renvoie un message d’échec.
