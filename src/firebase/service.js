import firebase, { db } from "./configFirebase"

export const addDocument = (collection, data) => {
    const query = db.collection(collection);

    query.add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const updateDocument = (collection, doc, data) => {
    const query = db.collection(collection).doc(doc);
    query.update(data)
}