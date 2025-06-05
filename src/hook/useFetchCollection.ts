'use client'
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';


export const useFetchCollection = <T>({ fbCollection, orderData, orderMethod }: {
    fbCollection: string,
    orderData?: string,
    orderMethod?: 'asc' | 'desc'
}): T[] => {
    const [documents, setDocuments] = useState<T[]>([]);

    useEffect(() => {
        const userCollection = collection(db, fbCollection); // get collection from firestore
        let orderDataQuery;
        if (orderData && orderMethod) {
            orderDataQuery = query(userCollection, orderBy(orderData, orderMethod))
        }

        const unsub = onSnapshot(orderDataQuery ?? userCollection, (snapshot) => {
            const res = snapshot.docs.map((docs) => ({ ...docs.data() as T, id: docs.id })) //docs.data() this isthe firebases method is return the actual data
            setDocuments(res)
        })
        return () => unsub()
    }, [fbCollection])

    return documents;
}