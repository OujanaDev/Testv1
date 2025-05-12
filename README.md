
````markdown
# 🎮 Test de connexion à un jeu avec vérification de paiement

Ceci est un petit projet que j’ai fait pour tester comment un joueur peut rejoindre un jeu en fonction du montant qu’il a payé.

## 🛠️ Comment tester

1. **Installer les dépendances**  
   Ouvre un terminal dans le dossier du projet et tape :
   ```bash
   npm install
````

2. **Lancer le serveur**
   Une fois que c’est installé, lance le serveur avec :

   ```bash
   node Test.js
   ```

   Le serveur va démarrer sur `http://localhost:3000`.

3. **Ouvrir la page HTML**
   Ouvre le fichier `Test.html` dans ton navigateur (double-clique dessus).

4. **Ouvrir la console développeur**
   Appuie sur **F12** ou fais clic droit → **Inspecter** → va dans l’onglet **Console**.

5. **Tester en cliquant sur le bouton**
   Clique sur le bouton **Tester** pour envoyer une requête au serveur. Le résultat va s’afficher dans la console.

6. **Changer le montant pour tester l’échec**
   Dans le fichier `Test.html`, modifie cette ligne :

   ```js
   payment_amount: 5
   ```

   Si tu mets une valeur **plus grande que 10**, ça fonctionne.
   Si tu mets **10 ou moins**, tu verras un message d’erreur.

---

## 📁 Fichiers du projet

* `Test.html` : Un fichier HTML avec un bouton pour faire le test.
* `Test.js` : Le code du serveur Node.js avec Express.
* `README.md` : Ce fichier.

---

## ℹ️ Infos en plus

Le projet utilise les modules **express** et **cors**.  :

```bash
npm init -y
npm install express cors
```

---

## ✅ Résultat attendu

* Si le paiement est **plus grand que 10** → le joueur peut rejoindre.
* Si le paiement est **10 ou moins** → le serveur dit que le paiement a échoué.

````

---
