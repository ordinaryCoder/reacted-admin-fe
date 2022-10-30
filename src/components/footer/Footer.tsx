import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
    <div>
      © Copyright {new Date().getFullYear()} {AppConfig.title}.{' '}
      <a href="https://github.com/ordinaryCoder/reacted-admin-fe">OVAA Tech</a>
    </div>
  );
};

export default Footer;
