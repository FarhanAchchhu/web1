import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "./index";

let moveToNextStage = async (id, nextStage, stages, jobPost) => {
    await updateDoc(doc(firestore, "applications", id), {
        stage: nextStage,
    });
    let update = {};
    update[`${stages[nextStage - 1]}`] =
        jobPost[`${stages[nextStage - 1]}`] - 1;
    update[`${stages[nextStage]}`] = jobPost[`${stages[nextStage]}`] + 1;
    await updateDoc(doc(firestore, "jobs", jobPost.id), update);
};

export default moveToNextStage;
