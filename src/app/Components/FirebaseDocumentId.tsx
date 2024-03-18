import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default async function getFirebaseDocumentId(collectionName: string, fieldKey: string, fieldValue: any) {
    const docQuery = query(collection(db, collectionName), where(`${fieldKey}`, "==", fieldValue));
    let firebaseDocumentId: any = null;

    const querySnapshot = await getDocs(docQuery);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      firebaseDocumentId = doc.id
    });
    
    return firebaseDocumentId;
}