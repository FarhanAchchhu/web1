import {
    collection,
    query,
    limit,
    getDocs,
    orderBy,
    startAfter,
} from "firebase/firestore";
import { firestore } from "./index";

const jobs = collection(firestore, "jobs");
let lastDocument;
let getLastDocument = async () => {
    let documentSnapshots = await getDocs(
        query(jobs, limit(1), orderBy("createdAt", "desc"))
    );
    lastDocument = documentSnapshots.docs[0];
};

export let fetchJobPosts = async (
    setFetchMore,
    currentDocument,
    setCurrentDocument
) => {
    const jobPosts = [];
    if (!lastDocument) {
        await getLastDocument();
    }
    const q = query(
        jobs,
        limit(10),
        orderBy("createdAt"),
        startAfter(currentDocument || 0)
    );
    const documentSnapshots = await getDocs(q);
    setCurrentDocument(
        documentSnapshots.docs[documentSnapshots.docs.length - 1]
    );
    for (let i = 0; i < documentSnapshots.docs.length; i++) {
        let doc = documentSnapshots.docs[i];
        if (doc.id === lastDocument.id) {
            jobPosts.push({ ...doc.data(), id: doc.id });
            setFetchMore(false);
            break;
        }
        jobPosts.push({ ...doc.data(), id: doc.id });
    }
    return jobPosts;
};
