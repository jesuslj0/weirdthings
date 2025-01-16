import { useState } from "react";
import BackgroundVideo from "../Components/BackgroundVideo";
import { Navbar } from "../Components/Navbar";

import '../css/RandomDrawings.css';

const RandomDrawingsContent = () => {
    const [images] = useState<string[]>([
        "/static/img/drawings/cara_triste.jpg",
        "/static/img/drawings/calle_ciudad.jpg",
        "/static/img/drawings/free_guy.jpg",
        "/static/img/drawings/hombre_ojo.jpg",
        "/static/img/drawings/tio_raro.jpg",
        "/static/img/drawings/black_hole.jpg",
        "/static/img/drawings/tatto_coleccion.jpg",
    ]);

    return (
        <>
            <Navbar />
            <h1 className="subtitle">Some random drawings</h1>
            <div id="images-container">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index}`} />
                ))}
            </div>
        </>
    )
}

const RandomDrawings = () => {
    return (
        <div id="random-drawings-page">
            <BackgroundVideo children={<RandomDrawingsContent />}/>
        </div>
    )
}

export default RandomDrawings;