import BackgroundVideo from "../Components/BackgroundVideo";
import { Navbar } from "../Components/Navbar";
import "../css/Home.css";


const HomeContent = () => {
    return (
        <>
            <Navbar />
            <div id="home-hero">
                <h1 id="title">Jimmy's Things</h1>
                <p id="intro-text">Wellcome to my personal art gallery.<br />A little bit of darkness and ink.</p>
            </div>
        </>
    );
};

const Home = () => {
    return (
        <div id="home-page">
            <BackgroundVideo children={<HomeContent />} source="/static/video/viaje.mp4"/>
        </div>
    )
}

export default Home;