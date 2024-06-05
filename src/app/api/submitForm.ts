import { MongoClient } from 'mongodb';

const express = require('express');
const body = require('body-parser');

async function start () {
    try{

        const app = express();

        const mongo = await MongoClient.connect('mongodb://localhost:27017/prowash');

        await mongo.connect();

        app.db = mongo.db('prowash');

        // body parser

        app.use(body.json({
        limit:'500kb'
    }));

    // routes

    app.use('/api/submit', require('./api/submit'));

    // start server

    app.listen(3001, () => {
        console.log('Server is running on http://localhost:3001');
    });

    }
    catch (error) {
        console.error(error);
    }
}
start();
