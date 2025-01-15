import BackgroundVideo from "../Components/BackgroundVideo";
import { Dashboard } from "../Dashboard";

const Home = () => {
    return (
        <div id="home-page">
            <BackgroundVideo children={<Dashboard />}/>
        </div>
    )
}

export default Home;