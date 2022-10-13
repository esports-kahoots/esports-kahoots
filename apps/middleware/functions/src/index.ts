//import libraries
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export let APP: express.Express;
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
    APP = express();
    const main = express();

    //add the path to receive request and set json as bodyParser to process the body
    main.use('/api/v1', APP);
    main.use(bodyParser.json());
    main.use(bodyParser.urlencoded({ extended: false }));

    //define google cloud function name
    webApi = functions.https.onRequest(main);

    APP.get('/', async (req, res) => {
        res.status(200).send('HELLO FROM FIREBASE');
    });
} catch (e) {
    console.error('!!', e);
}

export const FS = admin.firestore();

export * from './user/UserRequest';
// export * from './testapi';
