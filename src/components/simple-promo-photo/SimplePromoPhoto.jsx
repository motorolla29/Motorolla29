import photo from '../../images/Layer1.png';
import './simple-promo-photo.css';

const SimplePromoPhoto = () => {
  return (
    <div className="promo_photo_container">
      <img alt="my_photo" src={photo} className="promo_photo" />
    </div>
  );
};

export default SimplePromoPhoto;
