import BackgroundVideo from "../Components/BackgroundVideo"
import ContactForm from "../Components/ContactForm"
import { Navbar } from "../Components/Navbar"
import '../css/Contact.css'

const ContactContent = () => {
    return (
        <>
            <Navbar />
            <div id="contact-hero">
                <h1 id="subtitle">Contact with me</h1>
                <ContactForm />
            </div>
        </>
    )
}

export const Contact = () => {
    return (
        <div id="contact-page">
            <BackgroundVideo children={<ContactContent />} source='/static/video/redes.mp4'/>
        </div>
    )
}