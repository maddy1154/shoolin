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
        {/* <h1>Enrich Your Wealth</h1>
        <p>Shoolin Analytica is an firm that employs mathematical and statistical methods in the design and execution of its investment programs</p>
        <a href="index.html">Explore</a> */}
      </div>
    </>
  );
}

export default HomeHero;
