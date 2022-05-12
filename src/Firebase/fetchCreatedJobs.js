import {
    collection,
    query,
    limit,
    getDocs,
    orderBy,
    startAfter,
    where,
} from "firebase/firestore";
import getUserIfAuthenticated from "../Helpers/getUserIfAuthenticated";
import { firestore } from "./index";

const jobs = collection(firestore, "jobs");
let lastDocument;
let getLastDocument = async () => {
    let documentSnapshots = await getDocs(
        query(
            jobs,
            limit(1),
            orderBy("createdAt", "desc"),
            where("admin", "==", await getUserIfAuthenticated().uid)
        )
    );
    lastDocument = documentSnapshots.docs[0];
};

let fetchCreatedJobs = async (
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
        startAfter(currentDocument || 0),
        where("admin", "==", await getUserIfAuthenticated().uid)
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

export default fetchCreatedJobs;
