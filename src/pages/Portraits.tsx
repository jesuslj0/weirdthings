import { useState } from "react";
import { Navbar } from "../Components/Navbar";

import '../css/Portraits.css';
import BackgroundVideo from "../Components/BackgroundVideo";

const PortraitsContent = () => {
    const [images] = useState([
        "/static/img/portraits/pilar.jpg",
        "/static/img/portraits/andres.jpg",
        "/static/img/portraits/retrato_doble.jpg",
        "/static/img/portraits/carmen.jpg",
        "/static/img/portraits/simeone_torres.jpg",
    ])

    return (
        <>
            <Navbar />
            <h1 id="subtitle">Portraits</h1>
            <div id="portraits-container">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index+1}`} />
                ))}
            </div>
        </>
    )
}

const Portraits = () => {
    return (
        <div id="portraits-page">
            <BackgroundVideo children={<PortraitsContent />} source='/static/video/humo-claro.mp4'/>
        </div>
    )
}

export default Portraits;