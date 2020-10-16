const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
    ('sk_test_51HcEQBGscyqK6pDNrcCc4mqGfTwMuOiqcHmYAvDEMEX3y99UM0fQWzvlMcL0RshzeWSGvSi8aBikvoHpTYEwPwba00BApIvRtD');


// API*


// app Config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTE
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieve ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})



// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// example endpoint
// http:localhost:5001/clone-db-f3b16/us-central1/api