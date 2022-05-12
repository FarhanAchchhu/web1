import {
    initializeApp,
    getAuth,
    setPersistence,
    browserLocalPersistence,
    getAnalytics,
    getFirestore,
    getStorage,
} from "./imports.js";
const firebaseConfig = {
    apiKey: "AIzaSyDf51JOeVY5veGrUJPMAKYfKueIKVOAwg8",
    authDomain: "usmart-careers-b0179.firebaseapp.com",
    projectId: "usmart-careers-b0179",
    storageBucket: "usmart-careers-b0179.appspot.com",
    messagingSenderId: "226226408408",
    appId: "1:226226408408:web:aa0e7d09805ddca7e580ad",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
const analytics = getAnalytics();
export const firestore = getFirestore(app);
export const storage = getStorage(app, "usmart-careers-b0179.appspot.com");
