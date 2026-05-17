import { Navbar } from "../Components/Navbar";
import { RevealOnScroll } from "../Components/RevealOnScroll";
import BackgroundVideo from "../Components/BackgroundVideo";
import '../css/Portraits.css';

const portraitData = [
    { src: "/static/img/portraits/pilar.jpg", name: "Pilar" },
    { src: "/static/img/portraits/andres.jpg", name: "Andrés" },
    { src: "/static/img/portraits/retrato_doble.jpg", name: "Retrato Doble" },
    { src: "/static/img/portraits/carmen.jpg", name: "Carmen" },
    { src: "/static/img/portraits/simeone_torres.jpg", name: "Simeone Torres" },
];

const PortraitsContent = () => {
    return (
        <>
            <Navbar />
            <h1 id="subtitle">Portraits</h1>
            <div id="portraits-container">
                {portraitData.map((portrait, index) => (
                    <RevealOnScroll key={index} delay={index * 80}>
                        <div className="portrait-item">
                            <img
                                src={portrait.src}
                                alt={portrait.name}
                                loading="lazy"
                            />
                            <div className="portrait-overlay">
                                <span className="portrait-name">{portrait.name}</span>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </>
    );
};

const Portraits = () => {
    return (
        <div id="portraits-page">
            <BackgroundVideo children={<PortraitsContent />} source='/static/video/humo-claro.mp4' />
        </div>
    );
};

export default Portraits;
