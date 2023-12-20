import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { gsap } from 'gsap';

import SuccessFormSent from '../../success-form-sent/SuccessFormSent';
import ShiningButton from '../../shining-button/ShiningButton';

import './contacts.css';

const Contacts = () => {
  let headerRef = useRef();
  let nameRef = useRef();
  let emailRef = useRef();
  let messageRef = useRef();
  let buttonRef = useRef();

  const [state, handleSubmit] = useForm('xpzvaqdp');

  const onNameChange = (e) => {
    console.log(state);
    e.target.value
      ? e.target.classList.add('filled')
      : e.target.classList.remove('filled');
  };
  const onEmailChange = (e) =>
    e.target.value
      ? e.target.classList.add('filled')
      : e.target.classList.remove('filled');
  const onMessageChange = (e) =>
    e.target.value
      ? e.target.classList.add('filled')
      : e.target.classList.remove('filled');

  useEffect(() => {
    const inputName = nameRef.current.querySelector(`input`);
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, transformOrigin: '0 0', duration: 1 },
        0.25
      )
      .fromTo(
        emailRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, transformOrigin: '0 0', duration: 1 },
        0.25
      )
      .fromTo(
        messageRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, transformOrigin: '0 0', duration: 1 },
        0.25
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 },
        1
      )
      .play()
      .eventCallback(`onComplete`, () => inputName.focus());

    return () => {
      tl.revert();
    };
  });

  if (state.succeeded) {
    return <SuccessFormSent />;
  }

  return (
    <div className="contacts">
      <h1 ref={headerRef} className="contact_form_header">
        Feel free to contact...
      </h1>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="contact_form_top_fields">
          <div ref={nameRef} className="contact_form_field">
            <input
              id="name"
              name="name"
              onChange={onNameChange}
              className="contact_form_input"
            ></input>
            <label className="contact_form_label" htmlFor="name">
              Name
            </label>
            <ValidationError
              className="form_validation_error"
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div ref={emailRef} className="contact_form_field">
            <input
              id="email"
              name="email"
              type="email"
              pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`}
              onChange={onEmailChange}
              className="contact_form_input"
            />
            <label className="contact_form_label" htmlFor="email">
              E-mail
            </label>
            <ValidationError
              className="form_validation_error"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div ref={messageRef} className="contact_form_field">
          <input
            id="message"
            name="message"
            onChange={onMessageChange}
            className="contact_form_input"
          ></input>
          <label className="contact_form_label" htmlFor="message">
            Your message for me
          </label>
          <ValidationError
            className="form_validation_error"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </form>
      <ShiningButton
        ref={buttonRef}
        text="Send"
        className="shining_button"
        type="submit"
        disabled={state.submitting}
      />
    </div>
  );
};

export default Contacts;
