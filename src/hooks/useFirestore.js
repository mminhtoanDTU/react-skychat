import { useEffect, useState } from 'react';
import { db } from '../firebase/configFirebase';

function useFirestore(collection, condition, orderField) {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        let collectionRef = db.collection(collection);

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }

            collectionRef = collectionRef.where(
                condition.fieldName,
                condition.operator,
                condition.compareValue
            );
        }

        if (orderField) {
            collectionRef = collectionRef.orderBy(orderField.field, orderField?.isDesc ? 'desc' : 'asc');
        }

        const unsubscribe = collectionRef.onSnapshot(snapshot => {
            const document = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setDocuments(document)
        })

        return () => unsubscribe;
    }, [collection, condition]);
    return documents;
}

export default useFirestore;