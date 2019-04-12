const admin = require('firebase-admin')

const SERVICE_ACCOUNT = require('../credentials/firebase-service-account.json')

admin.initializeApp({
    credential: admin.credential.cert(SERVICE_ACCOUNT),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

module.exports = admin
