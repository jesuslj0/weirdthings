import { Navbar } from "../Components/Navbar";
import { RevealOnScroll } from "../Components/RevealOnScroll";
import BackgroundVideo from "../Components/BackgroundVideo";
import '../css/Arquitecture.css';

const horizontalImages = [
    "/static/img/architecture/villa_saboye.jpg",
    "/static/img/architecture/geisel_library.jpg",
    "/static/img/architecture/elqui_domos.jpg",
];

const verticalImages = [
    "/static/img/architecture/molino.jpg",
    "/static/img/architecture/faro.jpg",
    "/static/img/architecture/upper_lawn.jpg",
    "/static/img/architecture/one_week.jpg",
];

const allImages = [
    ...horizontalImages.map(src => ({ src, cls: "horizontal-img" })),
    ...verticalImages.map(src => ({ src, cls: "vertical-img" })),
];

const ArquitectureContent = () => {
    return (
        <>
            <Navbar />
            <h1 id="subtitle">Arquitecture</h1>
            <div id="arquitecture-container">
                {allImages.map(({ src, cls }, index) => (
                    <RevealOnScroll key={index} delay={index * 80}>
                        <img
                            src={src}
                            alt={`Architecture ${index + 1}`}
                            className={cls}
                            loading="lazy"
                        />
                    </RevealOnScroll>
                ))}
            </div>
        </>
    );
};

const Arquitecture = () => {
    return (
        <div id="arquitecture-page">
            <BackgroundVideo children={<ArquitectureContent />} source='/static/video/bricks.mp4' />
        </div>
    );
};

export default Arquitecture;
