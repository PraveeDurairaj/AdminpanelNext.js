import { useState } from "react"
import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { SeoData } from "@/helper/type";

export const useUpdateData = ( fbcollection: string) => {
    const [update,setUpdate] = useState<boolean>(false)

    const updateData = async (id: string, updatedData:SeoData ): Promise<void> => {
        try {
            const updateRef = doc(db, fbcollection, id);
            await updateDoc(updateRef, { ...updatedData });
            setUpdate(true)
        } catch (error) {
            console.error("Error update document:", error);
        }
    }
    return {update, updateData,setUpdate }
}
