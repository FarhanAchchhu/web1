import { collection, addDoc } from "firebase/firestore";
import getUserIfAuthenticated from "../Helpers/getUserIfAuthenticated";
import { firestore } from "./index";

const jobs = collection(firestore, "jobs");

let publishJobPost = async (formData) => {
    let document = {
        admin: await getUserIfAuthenticated().uid,
        candidates: 0,
        city: formData.city,
        country: formData.country,
        desc: formData.desc,
        requirements: formData.requirements,
        responsibilities: formData.responsibilities,
        "emp-type": formData["emp-type"],
        remote: formData.remote,
        title: formData.title,
        createdAt: new Date().valueOf(),
        applied: 0,
        screening: 0,
        evaluation: 0,
        offer: 0,
        hired: 0,
        archive: 0,
    };
    await addDoc(jobs, document);
};

export default publishJobPost;
