import { BrowserRouter, Link, Routes,  } from 'react-router-dom';
import './NotFoundComponent.css';

export default function NotFoundComponent( ){

    return(
        <>

        <div className='NotFoundContainer'>

        <div className='TextOverposted'>
        <p>ERROR 404: PAGE NOT FOUND</p>
        <p>Dont Worry, the best skater fail's too</p>
        </div>
        
        <video src="https://videos.pexels.com/video-files/4824120/4824120-uhd_2560_1440_30fps.mp4" autoPlay muted loop ></video>
        
        
        
        </div>
        

        </>
    )
};