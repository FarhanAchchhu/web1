import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./index.js";

const signin = (loginData, setStatus) => {
    return signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((userCredential) => {
            if (!userCredential.user.emailVerified) {
                setStatus("Email not verified. Please verify it!");
                return;
            }
        })
        .catch((error) => {
            if (
                error.code === "auth/wrong-password" ||
                error.code === "auth/user-not-found"
            ) {
                setStatus("Invalid login details!");
            } else if (error.code === "auth/too-many-requests") {
                setStatus("Too many requests! Try again after some time.");
            } else {
                setStatus(
                    "Some internal error occured. Please contact us for more assistance."
                );
            }
        });
};

export default signin;
