import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "./index";

let changeRatingById = async (id, newRating) => {
    await updateDoc(doc(firestore, "applications", id), {
        stars: newRating,
    });
};

export default changeRatingById;
