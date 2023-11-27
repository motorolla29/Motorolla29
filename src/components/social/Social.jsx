import React from 'react';

import { ReactComponent as MailIcon } from '../../images/icons/icons8-gmail.svg';
import { ReactComponent as GithubIcon } from '../../images/icons/icons8-github.svg';
import { ReactComponent as HabrIcon } from './../../images/icons/habr_logo_icon_248126.svg';
import { ReactComponent as LinkedInIcon } from './../../images/icons/icons8-linkedin.svg';
import { ReactComponent as VkIcon } from './../../images/icons/icons8-vk.svg';
import { ReactComponent as TelegramIcon } from './../../images/icons/icons8-telegram.svg';

import './social.css';

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a
        href="."
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Github"
      >
        <GithubIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="."
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Habr Career"
      >
        <HabrIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="."
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Linked In"
      >
        <LinkedInIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="."
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Vk"
      >
        <VkIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="."
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Telegram"
      >
        <TelegramIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="."
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="Mail Me"
      >
        <MailIcon />
      </a>
    </li>
  </ul>
);

export default Social;
