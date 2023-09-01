import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="trip" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <a href={props.url} className="more-info-btn" target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
}

export default TripData;
