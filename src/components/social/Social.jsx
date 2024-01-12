import React from 'react';

import { ReactComponent as MailIcon } from '../../images/icons/icons8-gmail.svg';
import { ReactComponent as GithubIcon } from '../../images/icons/icons8-github.svg';
import { ReactComponent as HabrIcon } from './../../images/icons/habr_logo_icon_248126.svg';
import { ReactComponent as VkIcon } from './../../images/icons/icons8-vk.svg';
import { ReactComponent as TelegramIcon } from './../../images/icons/icons8-telegram.svg';

import './social.css';

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a
        href="https://github.com/motorolla29"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="GitHub"
      >
        <GithubIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://career.habr.com/motorolla29"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="Habr"
      >
        <HabrIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://vk.com/esogmile"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="Vk"
      >
        <VkIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://t.me/motorolla29"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="Telegram"
      >
        <TelegramIcon />
      </a>
    </li>
    <li className="social__item">
      <a
        href="mailto:eutyou@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="Mail"
      >
        <MailIcon />
      </a>
    </li>
  </ul>
);

export default Social;
