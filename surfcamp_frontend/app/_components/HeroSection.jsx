import Link from "next/link";

const HeroSection = ({ imgSrc, headline, theme = "turquoise" }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={imgSrc || "/assets/hero-home.png"} alt="a surfer on a wave" />
      </div>

      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>Headline missing</h1>}
      </div>

      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">BOOK NOW</Link>
      </button>

      <img
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
        alt="logo"
      />
    </section>
  );
};

export default HeroSection;
