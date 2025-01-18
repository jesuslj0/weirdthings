import BackgroundVideo from "../Components/BackgroundVideo";
import { Navbar } from "../Components/Navbar";
import "../css/Home.css";

const HomeContent = () => {
    return (
        <>
            <Navbar />
            <h1	id="title">Weird Things</h1>
            <div id="intro-text">Wellcome to my personal art gallery. A little bit of darkness and ink.</div>
        </>
    )
}

const Home = () => {
    return (
        <div id="home-page">
            <BackgroundVideo children={<HomeContent />} source="/static/video/viaje.mp4"/>
        </div>
    )
}

export default Home;