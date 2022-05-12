import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "./index";
import { v4 as uuidv4 } from "uuid";
import fetchJobPostById from "./fetchJobPostById";

const applications = collection(firestore, "applications");

export let applyToJob = async (formData, id) => {
    let { resume } = formData;
    let fileBuffer = await resume.target.files[0].arrayBuffer();
    const filePathArr = resume.target.value.split("\\");
    const fileName = `${uuidv4()}-${filePathArr[filePathArr.length - 1]}`;
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, fileBuffer, {
        contentType: "application/pdf",
        size: fileBuffer.length,
    });
    let document = {
        phoneNum: formData.phoneNum,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        linkedin: formData.linkedin,
        resume: await getDownloadURL(storageRef),
        appliedAt: new Date().valueOf(),
        jobId: id,
        stage: 0,
    };
    await addDoc(applications, document);
    const { candidates, applied } = await fetchJobPostById(id);
    updateDoc(doc(firestore, "jobs", id), {
        candidates: candidates + 1,
        applied: applied ? applied + 1 : 1,
    });
};
