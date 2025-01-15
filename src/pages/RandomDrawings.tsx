import { useEffect, useState } from "react";
import BackgroundVideo from "../Components/BackgroundVideo";
import { Navbar } from "../Components/Navbar";
import ImageCarousel from "../Components/ImageCarousel";

import '../css/RandomDrawings.css';

const RandomDrawingsContent = () => {
    const [images, setImages] = useState<string[]>([]);
    useEffect(() => {
        setImages(
            [
            "/static/img/drawings/cara_triste.jpg",
            "/static/img/drawings/calle_ciudad.jpg",
            "/static/img/drawings/tio_raro.jpg",
            "/static/img/drawings/tio_loco.jpg",
            ] 
        )
    }, [])

    return (
        <>
            <Navbar />
            <h1 className="subtitle">Some random drawings</h1>
            <ImageCarousel images={images}/>
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