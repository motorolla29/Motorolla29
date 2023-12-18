import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import ShiningButton from '../shining-button/ShiningButton';

import './success-form-sent.css';

const SuccessFormSent = () => {
  let successHeaderRef = useRef();
  let successTextRef = useRef();
  let buttonHomeRef = useRef();

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(successHeaderRef.current, { opacity: 1, y: 0 }, 0.2)
      .to(successTextRef.current, { opacity: 1, y: 0 }, 0.4)
      .to(buttonHomeRef.current, { opacity: 1, y: 0 }, 0.6)
      .play();
  });

  return (
    <div className="contact_form_success">
      <h1
        ref={successHeaderRef}
        className="contact_form_success_header slide-down"
      >
        Successfully sent
      </h1>
      <p
        ref={successTextRef}
        className="contact_form_success_message slide-down"
      >
        Your message has been successfully sent, thank you for your attention to
        my person. I will contact you soon.
      </p>
      <div
        className="contacts_success_button_home slide-down"
        ref={buttonHomeRef}
      >
        <ShiningButton
          ref={buttonHomeRef}
          className="shining_button slide-down"
          text="Back Home"
        >
          <Link to={`/`} />
        </ShiningButton>
      </div>
    </div>
  );
};

export default SuccessFormSent;
