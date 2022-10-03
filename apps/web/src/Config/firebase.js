// this is just for connecting emulators
export const FIREBASE_LOCAL_URLS = {
    functions: {
        url: 'localhost',
        port: 5001,
    },
    auth: {
        url: 'http://localhost:9099',
    },
    database: {
        url: 'localhost',
        port: 9000,
    },
    storage: {
        url: 'localhost',
        port: 9199,
    },
    firestore: {
        url: 'localhost',
        port: 8080,
    },
};

// export const FIREBASE_PROD_CONFIG = {}
export const FIREBASE_PROD_CONFIG = {
    apiKey: 'AIzaSyAZ2Efl5HApGL9xweuVIO7thWLSZ0Yt_R8',
    authDomain: 'esports-kahoots.firebaseapp.com',
    databaseURL: 'https://esports-kahoots-default-rtdb.firebaseio.com',
    projectId: 'esports-kahoots',
    storageBucket: 'esports-kahoots.appspot.com',
    messagingSenderId: '898325769632',
    appId: '1:898325769632:web:555989d92dc373492348c5',
    measurementId: 'G-HL214XLCT8',
};
