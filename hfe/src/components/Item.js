import "./ItemStyles.css";
import ItemData from "./ItemData";
import Item1 from "../assets/1101H.jpg";
import Item2 from "../assets/9101H.jpg";
import Item3 from "../assets/WF9100.jpg";

function Item() {
  return (
    <div className="Item">
      <h1>Our Product</h1>
      <p>You can discover our saunas room using this link.</p>
      <div className="Itemcard">
        <ItemData
          image={Item1}
          heading="1101H"
          title="1-Person EXTENDABLE Indoor FAR Infrared Heating Sauna"
          price="$1100"
          url="https://www.wayfair.com/outdoor/pdp/royal-saunas-hongyuan-hongyuan-saunas-single-person-extendable-indoor-far-infrared-heating-sauna-bluetooth-compatible-w003008295.html"
        />
        <ItemData
          image={Item2}
          heading="9101H"
          price="$1100"
          title="1-Person Indoor Bluetooth Low EMF Far Infrared In Okoume & Hemlock Wood"
          url="https://www.wayfair.com/outdoor/pdp/royal-saunas-hongyuan-hongyuan-single-person-indoor-bluetooth-low-emf-far-infrared-in-okoume-hemlock-wood-rshy1016.html?st=1"
        />
        <ItemData
          image={Item3}
          heading="WF9100"
          price="$1100"
          title="1-Person Indoor Bluetooth Compatible Low EMF Far Infrared In Okoume & Hemlock"
          url="https://www.wayfair.com/outdoor/pdp/royal-saunas-hongyuan-hongyuan-1-person-indoor-bluetooth-compatible-low-emf-far-infrared-in-okoume-hemlock-rshy1017.html"
        />
      </div>
    </div>
  );
}

export default Item;
