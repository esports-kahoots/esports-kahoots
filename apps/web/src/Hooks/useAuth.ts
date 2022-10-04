import { FirebaseApp, initializeApp } from 'firebase/app';
import {
    connectAuthEmulator,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { FIREBASE_LOCAL_URLS, FIREBASE_PROD_CONFIG } from '../Config/firebase';
import { useUserStore } from '../State/store';

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
    const setUser = useUserStore((state) => state.setUser);

    const signInGoogle = async () => {
        try {
            const signInResult = await signInWithPopup(auth, provider);
            const user = signInResult.user;
            setUser(user);
        } catch (e) {}
    };

    return { signInGoogle };
};
// 3. ?? misc ??
