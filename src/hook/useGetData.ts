import {useState } from "react"
import { db } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import { SeoData } from "@/helper/type";


export const useGetData = (fbcollection: string) => {
  const [data, setData] = useState<SeoData | null>(null)

  const fetchData = async (id: string): Promise<void> => {
    try {
      const docRef = doc(db, fbcollection, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const dataRes = docSnap.data() as SeoData;
        setData(dataRes);
      } else {
        console.warn("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  return { data, fetchData }
}