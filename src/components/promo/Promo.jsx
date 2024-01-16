import { ReactComponent as DownloadIcon } from '../../images/icons/file-download.svg';
import './promo.css';

const Promo = () => {
  return (
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
      <div className="download_cv_container">
        <a href="/Ryzhov_Vitaliy_CV.pdf" download className="download_cv">
          <DownloadIcon className="download_cv_icon" />
          <span className="download_cv_text">Download C.V.</span>
          <span className="download_cv_info">(pdf 348kb)</span>
        </a>
      </div>
    </div>
  );
};

export default Promo;
