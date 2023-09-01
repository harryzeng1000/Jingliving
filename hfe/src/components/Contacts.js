import "./ContactFormStyles.css";
import Contacts from "./ContactData";
import p1 from "../assets/harry.jpg"

function ContactForm () {
  return (
    <div className="Cont">
      <h1>Our Staff</h1>
      <p>Elegance in Every Endeavor</p>
      <div className="Itemcard">
        <Contacts
          image={p1}
          name="Harry"
          title="Sales Director"
          email="royalsaunas3@gmail.com"
          phone="88888888"
        />
        <Contacts
        image={p1}
        name=""
        title=""
        email=""
        phone=""
        />
        <Contacts
        image={p1}
        name=""
        title=""
        email=""
        phone=""
        />
      </div>
    </div>
  );
}

export default ContactForm;
