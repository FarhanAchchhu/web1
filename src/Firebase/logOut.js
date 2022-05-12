import { signOut } from "firebase/auth";
import { auth } from "./index";

let logOut = () => {
    signOut(auth);
};

export default logOut;
