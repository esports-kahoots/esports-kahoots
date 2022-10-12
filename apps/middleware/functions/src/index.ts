//import libraries
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export let app: express.Express;
export let webApi: any;

const projectConfig = {
    projectId: 'esports-kahoots',
    storageBucket: 'esports-kahoots.appspot.com',
    databaseURL: 'http://localhost:9001/?ns=esports-kahoots-default-rtdb',
};
//initialize firebase inorder to access its services
admin.initializeApp(projectConfig);

try {
    //initialize express server
    app = express();
    const main = express();

    //add the path to receive request and set json as bodyParser to process the body
    main.use('/api/v1', app);
    main.use(bodyParser.json());
    main.use(bodyParser.urlencoded({ extended: false }));

    //define google cloud function name
    webApi = functions.https.onRequest(main);

    app.get('/', async (req, res) => {
        res.status(200).send('HELLO FROM FIREBASE');
    });
} catch (e) {
    console.error('!!', e);
}

export const fs = admin.firestore();

export * from './testapi';
