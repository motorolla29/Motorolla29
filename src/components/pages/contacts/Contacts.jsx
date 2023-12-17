import React, { useEffect, useState, useRef } from 'react';
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

  const [isFilledName, setFilledName] = useState(false);
  const [isFilledEmail, setFilledEmail] = useState(false);
  const [isFilledMessage, setFilledMessage] = useState(false);

  const onNameChange = (e) =>
    e.target.value ? setFilledName(true) : setFilledName(false);
  const onEmailChange = (e) =>
    e.target.value ? setFilledEmail(true) : setFilledEmail(false);
  const onMessageChange = (e) =>
    e.target.value ? setFilledMessage(true) : setFilledMessage(false);

  const tl = gsap.timeline();

  useEffect(() => {
    const inputName = nameRef.current.querySelector(`input`);
    tl.to(headerRef.current, { opacity: 1, y: 0 })
      .to(
        nameRef.current,
        { opacity: 1, scaleX: 1, transformOrigin: '0 0' },
        0.15
      )
      .to(
        emailRef.current,
        { opacity: 1, scaleX: 1, transformOrigin: '0 0' },
        0.3
      )
      .to(
        messageRef.current,
        { opacity: 1, scaleX: 1, transformOrigin: '0 0' },
        0.45
      )
      .to(buttonRef.current, { opacity: 1, y: 0 }, 0.6)
      .play()
      .eventCallback(`onComplete`, () => inputName.focus());
  }, [tl]);

  if (state.succeeded) {
    return <SuccessFormSent />;
  }

  return (
    <div className="contacts">
      <h1 ref={headerRef} className="contact_form_header slide_down">
        Feel free to contact...
      </h1>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="contact_form_top_fields">
          <div
            ref={nameRef}
            className={`contact_form_field scale-to-right ${
              isFilledName ? 'filled' : ''
            }`}
          >
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
          <div
            ref={emailRef}
            className={`contact_form_field scale-to-right ${
              isFilledEmail ? 'filled' : ''
            }`}
          >
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
        <div
          ref={messageRef}
          className={`contact_form_field scale-to-right ${
            isFilledMessage ? 'filled' : ''
          }`}
        >
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
        className="shining_button slide-down"
        type="submit"
        disabled={state.submitting}
      />
    </div>
  );
};

export default Contacts;
