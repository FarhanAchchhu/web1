import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./index";

let fetchJobPostById = async (id) => {
    const jobPost = await getDoc(doc(firestore, "jobs", id));
    return { ...jobPost.data(), id: id };
};

export default fetchJobPostById;
