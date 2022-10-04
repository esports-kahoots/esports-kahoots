import { FirebaseApp, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { FIREBASE_LOCAL_URLS, FIREBASE_PROD_CONFIG } from '../Config/firebase';


// 1. Connect the app the emulators
export let app: FirebaseApp;
app = initializeApp(FIREBASE_PROD_CONFIG);

// 1.5 Connect emulators
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

connectAuthEmulator(auth, FIREBASE_LOCAL_URLS.auth.url);
connectFirestoreEmulator(
    firestore,
    FIREBASE_LOCAL_URLS.firestore.url,
    FIREBASE_LOCAL_URLS.firestore.port
);
connectDatabaseEmulator(
    database,
    FIREBASE_LOCAL_URLS.database.url,
    FIREBASE_LOCAL_URLS.database.port
);
connectFunctionsEmulator(
    functions,
    FIREBASE_LOCAL_URLS.functions.url,
    FIREBASE_LOCAL_URLS.functions.port
);
connectStorageEmulator(
    storage,
    FIREBASE_LOCAL_URLS.storage.url,
    FIREBASE_LOCAL_URLS.storage.port
);

// 2. create some auth hooks for signing in / getting firebase user

const provider = new GoogleAuthProvider();
export const useAuth = () => {
    const signInGoogle = async () => {
        try {
            const signInResult = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(signInResult);
            // const token = credential.accessToken;
            // const user = signInResult.user;
            // console.log(token)


        }
        catch (e) {

        }

    }

    return { signInGoogle }
}
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// 3. ?? misc ??