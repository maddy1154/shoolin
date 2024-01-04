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
        </div>
        {/* <h1>Enrich Your Wealth With Us</h1>
        <p>We Solve Complex Financial Problems.</p>
        <a href="index.html">Explore</a> */}
      </div>
    </>
  );
}

export default HomeHero;
