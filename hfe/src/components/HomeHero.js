import "./HomeHeroStyles.css";

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
          {/* Add another button text beside the existing one */}
          <b className={props.secondBtnClass} href={props.secondUrl}>
            {props.secondButtonText}
          </b>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
