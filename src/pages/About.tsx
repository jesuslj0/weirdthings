import { Navbar } from "../Components/Navbar";
import BackgroundVideo from "../Components/BackgroundVideo";
import '../css/About.css';

const AboutContent = () => {

    return (
        <>
            <Navbar />
            <h1 id="subtitle">Hi, I'm Jesús López.</h1>
            <p id="description">The shadows tell stories that the light sometimes does not dare to reveal. 
                My art is immersed in the dark, in the textures of the pencil and in the powerful black. 
                I am inspired by the hidden structure of the world, from the lines of a building to the 
                details of an expressive face. Through graphite and the contrast of ink, 
                I seek to create pieces that speak for themselves.
            </p>
        </>
    )
}

const About = () => {
    return (
        <div id="about-page">
            <BackgroundVideo children={<AboutContent />} source='/static/video/redes.mp4'/>
        </div>
    )
}

export default About;