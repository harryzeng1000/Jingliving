import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Item from "../components/Item";

function Product() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Product"
        btnClass="hide"
        secondBtnClass="hide"
      />
      <Item />
      <Footer />
    </>
  );
}

export default Product;
