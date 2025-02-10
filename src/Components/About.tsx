import { Navbar } from "./Navbar";

const AboutContent = () => {
    return (
        <>
            <Navbar />
            <h2>Hi, i'm Jesús López.</h2>
            <p>Information about me</p>
        </>
    )
}

const About = () => {
    return (
        <div id="about-page">
            <AboutContent />
        </div>
    )
}

export default About;