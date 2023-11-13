<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weihnachtsangebote</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Weihnachtsangebote</h1>
        <nav>
            <ul>
                <li><a href="#">Startseite</a></li>
                <li><a href="#">Produkte</a></li>
                <li><a href="#">Warenkorb</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <!-- Hier kommen die Produkte und Angebote -->
        <!-- Beispiel: -->
        <div class="product">
            <img src="weihnachtsangebot.jpg" alt="Weihnachtsangebot">
            <h2>Weihnachtsgeschenkset</h2>
            <p>Perfektes Geschenk für die Feiertage.</p>
            <p class="price">$19.99</p>
            <button>In den Warenkorb</button>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Weihnachtsangebote</p>
    </footer>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

main {
    padding: 1em;
}

.product {
    border: 1px solid #ccc;
    padding: 1em;
    margin-bottom: 20px;
}

.product img {
    max-width: 100%;
    height: auto;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 0.5em;
}
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Beispiel-Datenbank
const products = [
    { id: 1, name: 'Weihnachtsgeschenkset', price: 19.99 },
    // Weitere Produkte hier hinzufügen
];

// Routen für Produkte
app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/checkout', (req, res) => {
    // Hier würde die Logik für die Zahlungsabwicklung stehen
    // Zum Beispiel: Erhalt der Produktinformationen aus req.body und Verarbeitung der Zahlung mit einem Zahlungsabwicklungsdienst
    // Nach erfolgreicher Zahlung könnten die Bestelldaten in einer Datenbank gespeichert werden
    // Da dies jedoch stark von der verwendeten Zahlungsmethode abhängt, ist dies nur ein grundlegendes Beispiel.

    // Hier nur eine einfache Bestätigung, dass die Bestellung erhalten wurde
    res.json({ success: true, message: 'Vielen Dank für Ihre Bestellung!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
