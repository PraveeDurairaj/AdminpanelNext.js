'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import { db } from '../firebase/config';

export const useFetchCollection = (fbCollection) => {
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        const userCollection = collection(db, fbCollection); // get collection from firestore
        const orderDataQuery = query(userCollection, orderBy("blogCreatedDate", "desc")) //order the data bases on the created date
        const unsub = onSnapshot(orderDataQuery, (snapshot) => {
            let res = snapshot.docs.map((docs) =>({...docs.data(),id:docs.id} )) //docs.data() this isthe firebases method is return the actual data
            setDocuments(res)
           
        })
        return () => unsub()
    },[fbCollection])

    return documents;
}