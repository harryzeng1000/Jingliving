import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Welcome to Jingliving Saunas"
        text="Steam Your Dreams: Experience Tranquility."
        btnClass="show"
        buttonText="Wayfair"
        url="/https://www.wayfair.com/brand/bnd/royal-saunas-hongyuan-b55239.html"
        secondBtnClass="show"  
        secondButtonText="Walmart" 
        secondUrl="/https://www.walmart.com/ip/Jingliving-Single-Person-EXTENDABLE-Indoor-FAR-Infrared-Heating-Sauna-Bluetooth-Compatible/2134271801?from=/search"  
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
