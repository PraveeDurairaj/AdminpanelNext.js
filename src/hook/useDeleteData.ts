import { useState } from "react"
import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";


export const useDeleteData = (fbcollection: string) => {
    const [deleteState, setDeleteState] = useState<boolean>(false);

    const deleteData = async (id: string): Promise<void> => {
        const docRef = doc(db, fbcollection, id);
        try {
            await deleteDoc(docRef)
            setDeleteState(true)
        } catch (error) {
            console.error("Error fetching document:", error);
        }
    };
    return { deleteState, setDeleteState, deleteData }
}
