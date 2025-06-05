import { useState } from "react"
import { db } from "@/firebase/config";
import { addDoc, collection,serverTimestamp } from "firebase/firestore";

export const useAddDos = (fbCollection: string) => {
    const [added, setAdded] = useState<boolean>(false)
    
    const addData = async <T>(doc: T): Promise<void> => {
        const userCollection = collection(db, fbCollection)
        try {
            await addDoc(userCollection, {... doc, createdDate: serverTimestamp() })
            setAdded(true)
            console.log('sucess', doc)
        }
        catch (err) {
            console.log(err)
        }

    }
    return { added, setAdded, addData }
}