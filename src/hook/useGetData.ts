import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';  // Adjust based on your project structure

interface UseGetDataReturn<T> {
  data: T | undefined;
  fetchData: (id: string) => Promise<void>;
}

export const useGetData = <T>(fbcollection: string): UseGetDataReturn<T> => {
  const [data, setData] = useState<T | undefined>(undefined);

  const fetchData = async (id: string): Promise<void> => {
    try {
      const docRef = doc(db, fbcollection, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const dataRes = docSnap.data() as T;
        setData(dataRes);
      } else {
        console.warn('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  return { data, fetchData };
};
