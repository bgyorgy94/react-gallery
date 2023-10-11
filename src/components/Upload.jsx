import {useState, useEffect, useContext} from 'react';
import {app} from '../firebaseConfig';
import {getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import imagesService from '../services/images-service';
import { Link, useNavigate } from 'react-router-dom';

export default function Upload() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    function fileChange(e) {
        setFile(e.target.files[0]);
    };

    function fileUpload() {
        if (!file) {
            return;
        }

        imagesService.uploadImage(file)
        .then(() => navigate('/'));
    };

    return (
        <>
            <div>
                <h2>Upload new picture</h2>
                <input type='file' name='image' onChange={fileChange} />
                <button type='button' onClick={fileUpload}>Upload</button>
            </div>
            <div style={{marginTop: '10px'}}>
                <Link to='/'>Back to gallery</Link>
            </div>
        </>
    )
}