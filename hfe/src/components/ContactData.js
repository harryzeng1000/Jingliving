import "./ContactFormStyles.css";

function Contacts(props) {
    return (
      <div className="I-card">
        <div className="I-image">
          <img src={props.image} alt="Item" />
        </div>
        <h1 className="contact-info">{props.name}</h1>
        <h2 className="contact-info">{props.title}</h2>
        <h3 className="contact-info">{props.email}</h3>
        <h3 className="contact-info">{props.phone}</h3>
      </div>
    );
  }
  

export default Contacts;
