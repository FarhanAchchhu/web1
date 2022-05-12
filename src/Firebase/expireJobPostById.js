import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "./index";

let expireJobPostById = async (id) => {
    deleteDoc(doc(firestore, "jobs", id));
};

export default expireJobPostById;
