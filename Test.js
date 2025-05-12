const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());

const PAYMENT_THRESHOLD = 10.0; // Seuil de 10 USDT

app.post('/join-game', (req, res) => {
    const { user_id, game_id, payment_amount } = req.body;

    // Validation des données requises
    if (!user_id || !game_id || payment_amount === undefined) {
        return res.status(400).json({
            status: 'error',
            message: 'Champs manquants dans la requête'
        });
    }

    // Conversion et validation numérique
    const amount = parseFloat(payment_amount);
    if (isNaN(amount)) {
        return res.status(400).json({
            status: 'error',
            message: 'Format de paiement invalide; Georges ne peut pas joué :('
        });
    }

    // Validation du montant
    if (amount > PAYMENT_THRESHOLD) {
        res.json({
            status: 'success',
            message: 'Vous avez bien rejoint le jeu! ; Georges peut joué :)',
        });
    } else {
        res.status(400).json({
            status: 'error',
            message: 'Le paiement a échoué. Veuillez vérifier les frais d\'entrée.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});