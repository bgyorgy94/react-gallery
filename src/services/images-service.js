import {useState, useEffect, useContext} from 'react';
import {app} from '../firebaseConfig';
import {getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

function uploadImage(image) {
        const storage = getStorage(app);
        const fileRef = ref(storage, 'images/'+image.name);
        return uploadBytes(fileRef, image)
        .then((uploadResult) => {
            getDownloadURL(uploadResult?.ref)
            .then(url => {
                return url;
            })
        });
};

function getImageList() {
    const storage = getStorage(app);
    const listRef = ref(storage, "images/");
    return listAll(listRef);
};

export default {
    uploadImage: uploadImage,
    getImageList: getImageList
}