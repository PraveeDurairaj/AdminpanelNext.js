import { useState } from "react";
import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";

interface UseUpdateDataReturn<T> {
  isUpdated: boolean;
  updateData: (id: string, data: T) => Promise<void>;
}

export const useUpdateData = <T>(fbcollection: string): UseUpdateDataReturn<T> => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const updateData = async (id: string, data: T): Promise<void> => {
    try {
      const updateRef = doc(db, fbcollection, id);
      await updateDoc(updateRef, { ...data });
      setIsUpdated(true);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return { isUpdated, updateData };
};

