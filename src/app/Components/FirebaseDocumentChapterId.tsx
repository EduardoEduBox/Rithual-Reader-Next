import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default async function getFirebaseDocumentChapterId(colection: string, fieldKey: string, fieldValue: any) {
    const docQuery = fieldValue ? query(collection(db, colection), where(`${fieldKey}`, "==", fieldValue)) : null;
    let chapterIdFirebaseDocument: string | null = null;
    
    if (docQuery) {
        const querySnapshot = await getDocs(docQuery);
    
        querySnapshot.forEach((doc) => {
            chapterIdFirebaseDocument = doc.id;
        });
    }
    
    return chapterIdFirebaseDocument;
}