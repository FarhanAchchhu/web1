import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "./index";

let unArchive = async (id, jobPost) => {
    await updateDoc(doc(firestore, "applications", id), {
        stage: 0,
    });
    updateDoc(doc(firestore, "jobs", jobPost.id), {
        applied: jobPost.applied + 1,
        archive: jobPost.archive - 1,
    });
};

export default unArchive;
