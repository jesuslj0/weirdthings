import { useState } from "react";
import { Navbar } from "../Components/Navbar";

import '../css/Architecture.css';
import BackgroundVideo from "../Components/BackgroundVideo";

const ArquitectureContent = () => {
    const [horizontalImages] = useState([
        "/static/img/architecture/villa_saboye.jpg",
        "/static/img/architecture/geisel_library.jpg",
    ])

    const [verticalImages] = useState([
        "/static/img/architecture/molino.jpg",
        "/static/img/architecture/faro.jpg",
        "/static/img/architecture/upper_lawn.jpg",
        "/static/img/architecture/one_week.jpg",
    ])


    return (
        <>
            <Navbar />
            <h1 id="subtitle">Arquitecture</h1>
            <div id="arquitecture-container">
                {horizontalImages.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index+1}`} className="horizontal-img"/>
                ))}
                {verticalImages.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index+1}`} className="vertical-img"/>
                ))}
            </div>
        </>
    )
}

const Arquitecture = () => {
    return (
        <div id="architecture-page">
            <BackgroundVideo children={<ArquitectureContent />} source='/static/video/bricks.mp4'/>
        </div>
    )
}

export default Arquitecture;