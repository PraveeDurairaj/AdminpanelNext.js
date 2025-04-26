'use client'
import { useState, useEffect } from 'react';
import { collection, onSnapshot} from 'firebase/firestore';
import { db } from '../firebase/config';
import { manageEnquiryData } from '@/helper/type';

export const useFetchCollection = (fbCollection:string) => {
    const [documents, setDocuments] = useState<manageEnquiryData[]>();

    useEffect(() => {
        const userCollection = collection(db, fbCollection); // get collection from firestore
        const unsub = onSnapshot(userCollection, (snapshot) => {
            const res = snapshot.docs.map((docs) =>({...docs.data(),id:docs.id} )) //docs.data() this isthe firebases method is return the actual data
            setDocuments(res)
        })
        return () => unsub()
    },[fbCollection])

    return documents;
}