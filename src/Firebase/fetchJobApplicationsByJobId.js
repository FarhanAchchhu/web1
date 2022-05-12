import {
    collection,
    query,
    limit,
    getDocs,
    orderBy,
    startAfter,
    where,
} from "firebase/firestore";
import { firestore } from "./index";

const applications = collection(firestore, "applications");
let lastDocument;
let getLastDocument = async (id) => {
    let documentSnapshots = await getDocs(
        query(
            applications,
            limit(1),
            orderBy("appliedAt", "desc"),
            where("jobId", "==", `${id}`)
        )
    );
    lastDocument = documentSnapshots.docs[0];
};

let fetchJobApplicationsByJobId = async (
    id,
    stage,
    setFetchMore,
    currentDocument,
    setCurrentDocument
) => {
    const jobApplications = [];
    if (!lastDocument) {
        await getLastDocument(id);
    }
    const q = query(
        applications,
        limit(10),
        orderBy("appliedAt"),
        startAfter(currentDocument || 0),
        where("jobId", "==", id),
        where("stage", "==", stage)
    );
    const documentSnapshots = await getDocs(q);
    if (documentSnapshots.docs.length === 0) {
        setFetchMore(false);
    }
    setCurrentDocument(
        documentSnapshots.docs[documentSnapshots.docs.length - 1]
    );
    for (let i = 0; i < documentSnapshots.docs.length; i++) {
        let doc = documentSnapshots.docs[i];
        if (doc.id === lastDocument.id) {
            jobApplications.push({ ...doc.data(), id: doc.id });
            setFetchMore(false);
            break;
        }
        jobApplications.push({ ...doc.data(), id: doc.id });
    }
    return jobApplications;
};

export default fetchJobApplicationsByJobId;
