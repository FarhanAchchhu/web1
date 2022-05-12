import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./index";

let fetchJobApplicationById = async (id) => {
    const jobApplication = await getDoc(doc(firestore, "applications", id));
    return { ...jobApplication.data(), id: id };
};

export default fetchJobApplicationById;
