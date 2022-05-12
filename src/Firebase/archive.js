import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "./index";

let archive = async (id, stages, stage, jobPost) => {
    await updateDoc(doc(firestore, "applications", id), {
        stage: 5,
    });
    let update = {
        archive: jobPost.archive + 1,
    };
    update[`${stages[stage]}`] = jobPost[`${stages[stage]}`] - 1;
    updateDoc(doc(firestore, "jobs", jobPost.id), update);
};

export default archive;
