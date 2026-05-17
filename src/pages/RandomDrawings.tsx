import { useState, useEffect, useCallback } from "react";
import BackgroundVideo from "../Components/BackgroundVideo";
import { Navbar } from "../Components/Navbar";
import { RevealOnScroll } from "../Components/RevealOnScroll";
import '../css/RandomDrawings.css';

const images: string[] = [
    "/static/img/drawings/calle_ciudad.jpg",
    "/static/img/drawings/el_aquelarre.jpg",
    "/static/img/drawings/castillo_iluminado.jpg",
    "/static/img/drawings/free_guy.jpg",
    "/static/img/drawings/tio_raro.jpg",
    "/static/img/drawings/mikasa.jpg",
    "/static/img/drawings/hombre_ojo.jpg",
    "/static/img/drawings/skull.jpg",
    "/static/img/drawings/cara_triste.jpg",
    "/static/img/drawings/demonio.jpg",
];

const RandomDrawingsContent = () => {
    const [modalIndex, setModalIndex] = useState<number | null>(null);

    const closeModal = useCallback(() => setModalIndex(null), []);
    const prevImage = useCallback(() => {
        setModalIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
    }, []);
    const nextImage = useCallback(() => {
        setModalIndex(i => i !== null ? (i + 1) % images.length : null);
    }, []);

    useEffect(() => {
        if (modalIndex === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [modalIndex, closeModal, prevImage, nextImage]);

    return (
        <>
            <Navbar />
            <h1 id="subtitle">Some random drawings</h1>
            <div id="images-container">
                {images.map((src, index) => (
                    <RevealOnScroll key={index} delay={index * 60}>
                        <img
                            src={src}
                            alt={`Drawing ${index + 1}`}
                            loading="lazy"
                            className="drawing-thumb"
                            onClick={() => setModalIndex(index)}
                        />
                    </RevealOnScroll>
                ))}
            </div>

            {modalIndex !== null && (
                <div id="modal" onClick={closeModal}>
                    <div id="modal-inner" onClick={e => e.stopPropagation()}>
                        <img src={images[modalIndex]} alt="Modal" />
                        <button id="modal-prev" onClick={prevImage}>&#8249;</button>
                        <button id="modal-next" onClick={nextImage}>&#8250;</button>
                        <button id="close-modal" onClick={closeModal}>✕</button>
                        <span id="modal-counter">{modalIndex + 1} / {images.length}</span>
                    </div>
                </div>
            )}
        </>
    );
};

const RandomDrawings = () => {
    return (
        <div id="random-drawings-page">
            <BackgroundVideo children={<RandomDrawingsContent />} source="/static/video/redes.mp4" />
        </div>
    );
};

export default RandomDrawings;
