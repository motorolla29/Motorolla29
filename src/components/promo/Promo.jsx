import './promo.css';

const Promo = () => {
  return (
    <div className="promo_container">
      <div className="promo">
        <p className="promo_greeting">Hello.</p>
        <p className="promo_name">
          My name is <span>Vitaliy.</span>
        </p>
        <p className="promo_role">
          I'm a <span>Frontend developer</span> with over 2 years of experience
          with HTML, CSS and JavaScript.
        </p>
        <p className="promo_details">
          I enjoy working on both large scale and small, challenging projects,
          solving complex problems. Like to create UI's which are beautiful,
          responsive, esthetically pleasing and comfortable to use.
        </p>
      </div>
    </div>
  );
};

export default Promo;
