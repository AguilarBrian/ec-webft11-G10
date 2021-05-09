// const admin = require('firebase-admin')

// var serviceAccount = require("C:\Users\lucianogabriel\Desktop\proyecto orignal final\ec-webft11-G10\Api\grupo10-node-autenticacion-firebase-adminsdk-mysnm-fe139dfe93.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://grupo10-node-autenticacion-default-rtdb.firebaseio.com/'
// });

// const db = admin.database();

// const { Router}= require('express');
// const router = Router();

// router.get('/', (req, res) => {
//     db.ref('contacts').once('value', (snapshot) => {
//        data = snapshot.val();
//        res.render( {contacts: data}) // te vca mandar la lista de atributos que haya en fierbase (firstname,lastname,email,phone)
//     });
// })

// router.post('/new-contact', (req, res) => {
//     const newContact = {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         phone: req.body.phone
//     }
//     db.ref('contacts').push(newContact);
//     res.redirect('/');
// });

// router.get('/delete-contact/:id', (req, res) => {
//     db.ref('contacts/' + req.params.id).remove();
//     res.redirect('/');
// });

// module.exports = router;