import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Online Shop</h1>
      <p>You can discover our saunas room using this link.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Walmart"
          text=""
          url="https://www.walmart.com/ip/Hongyuan-Single-Person-EXTENDABLE-Indoor-FAR-Infrared-Heating-Sauna-Bluetooth-Compatible/2134271801"
        />
        <TripData
          image={Trip2}
          heading="Wayfair"
          text=""
          url="https://www.wayfair.com/outdoor/pdp/royal-saunas-hongyuan-hongyuan-1-person-indoor-bluetooth-compatible-low-emf-far-infrared-in-okoume-hemlock-rshy1017.html"
        />
        <TripData
          image={Trip3}
          heading="Amazon"
          text=""
          url="https://www.amazon.com/s?i=merchant-items&me=A15Y5R1CE0IPTP"
        />
      </div>
    </div>
  );
}

export default Trip;
