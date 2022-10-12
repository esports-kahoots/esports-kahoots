//import libraries
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

export let app: express.Express
export let webApi: any
export const fs = admin.firestore();

try {
    //initialize firebase inorder to access its services
    admin.initializeApp(functions.config().firebase);

    //initialize express server
    app = express();
    const main = express();

    //add the path to receive request and set json as bodyParser to process the body 
    main.use('/api/v1', app);
    main.use(bodyParser.json());
    main.use(bodyParser.urlencoded({ extended: false }));

    //define google cloud function name
    webApi = functions.https.onRequest(main);
}
catch (e) {
    console.error("!!", e)
}

export * from "./testapi"
