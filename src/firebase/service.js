import firebase, { db } from "./configFirebase"

export const addDocument = (collection, data) => {
    return new Promise((resolve, reject) => {
        db.collection(collection).add({
            ...data,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(docRef => {
            resolve(docRef.id);
        })
    })

}

export const updateDocument = (collection, doc, data) => {
    const query = db.collection(collection).doc(doc);
    query.update(data)
}