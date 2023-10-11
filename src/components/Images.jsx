import {useState, useEffect, useContext} from 'react';
import {getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import imagesService from '../services/images-service';
import { Link } from 'react-router-dom';
import '../style/images.css';

export default function Images() {
    const [imageList, setImageList] = useState([]);
    const [showPopup, setshowPopup] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        imagesService.getImageList()
        .then(result => {
            result.items.forEach(item => {
                getDownloadURL(item)
                .then(url => {
                    setImageList(prevState => {
                        return [...prevState, url]
                    })
                })
            })
        })
    }, []);

    function showPopupImg(imgIndex) {
        setshowPopup(true);
        setCurrentImg(imgIndex)
    };

    function hidePopupImg() {
        setshowPopup(false);
    };

    return (
        <div>
            <h2><Link to='upload'>Upload new picture</Link></h2>
            <div className='imagesContainer'>
            {imageList.length > 0 && imageList.map((imageUrl, index) => {
                    return <div className='image'><img key={index} src={imageUrl} alt='' onClick={() => showPopupImg(index)}/></div>
                })}
            </div>
            {
                showPopup
                ?
                <div className='popup-image'>
                    <span onClick={hidePopupImg}>&times;</span>
                    <img src={imageList[currentImg]} alt='' />
                </div>
                :
                <div></div>
            }
        </div>
    )
}

