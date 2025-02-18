import { useState } from "react";
import BackgroundVideo from "../Components/BackgroundVideo";
import { Navbar } from "../Components/Navbar";

import '../css/RandomDrawings.css';

const RandomDrawingsContent = () => {
    const [images] = useState<string[]>([
        "/static/img/drawings/calle_ciudad.jpg",
        "/static/img/drawings/castillo_iluminado.jpg",
        "/static/img/drawings/skull.jpg",
        "/static/img/drawings/hombre_ojo.jpg",
        "/static/img/drawings/tio_raro.jpg",
        "/static/img/drawings/free_guy.jpg",
        "/static/img/drawings/cara_triste.jpg",
        "/static/img/drawings/demonio.jpg",
        "/static/img/drawings/mikasa.jpg",
        "/static/img/drawings/lock.jpg",
    ]);

    return (
        <>
            <Navbar />
            <h1 id="subtitle">Some random drawings</h1>
            <div id="images-container">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index+1}`} />
                ))}
            </div>
        </>
    )
}

const RandomDrawings = () => {
    return (
        <div id="random-drawings-page">
            <BackgroundVideo children={<RandomDrawingsContent />} source="/static/video/redes.mp4"/>
        </div>
    )
}

export default RandomDrawings;