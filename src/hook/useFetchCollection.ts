'use client'
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import { db } from '../firebase/config';

export const useFetchCollection = (fbCollection:string) => {
    const [documents, setDocuments] = useState<any>();

    useEffect(() => {
        const userCollection = collection(db, fbCollection); // get collection from firestore
        const unsub = onSnapshot(userCollection, (snapshot) => {
            let res = snapshot.docs.map((docs) =>({...docs.data(),id:docs.id} )) //docs.data() this isthe firebases method is return the actual data
            setDocuments(res)
        })
        return () => unsub()
    },[fbCollection])

    return documents;
}