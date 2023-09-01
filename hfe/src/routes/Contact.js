import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/Contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/Contacts";

function Contact() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        secondBtnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
