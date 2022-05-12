export { initializeApp } from "firebase/app";
export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    setPersistence,
    browserLocalPersistence,
    sendPasswordResetEmail,
    confirmPasswordReset,
} from "firebase/auth";
export { getAnalytics } from "firebase/analytics";
export {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    getDocs,
} from "firebase/firestore";
export { getStorage } from "firebase/storage";
