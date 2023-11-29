import './promo.css';

const Promo = () => (
  <div className="promo_container">
    <div className="promo">
      <h1 className="promo_greeting">Hello.</h1>
      <p className="promo_name">
        My name is{' '}
        <span
          style={{
            backgroundColor: 'rgba(87, 87, 87, 0.1)',
            color: 'rgb(94, 93, 92)',
          }}
        >
          Vitaliy
        </span>
      </p>
      <p className="promo_role">
        I'm a{' '}
        <span
          style={{
            color: 'rgb(94, 93, 92)',
            backgroundColor: 'rgba(99, 99, 99, 0.2)',
          }}
        >
          Frontend developer
        </span>{' '}
        with over 2 years of experience with HTML, CSS and native JavaScript, as
        well as development in React and Redux.
      </p>
      <p className="promo_details">
        I enjoy working on both large scale and small, challenging projects,
        solving complex problems. Like to create UI's which are beautiful,
        responsive, esthetically pleasing and comfortable to use.
      </p>
    </div>
  </div>
);

export default Promo;
