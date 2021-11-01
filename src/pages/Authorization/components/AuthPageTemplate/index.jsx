import React from 'react';
import T from 'prop-types';

import './auth-page-template.scss'
import welcomeImage from '../../../../assets/images/auth-page/welcome-art.svg';

const AuthPageTemplate = ({
  children,
}) => {
  return (
    <div className="auth-page">
      <div className="auth-page__left">
        <h1 className="auth-page__logo">
          My Store
        </h1>

        <div className="auth-page__welcome-art">
          <img src={welcomeImage} alt="Welcome to My Store" />
          <h2 className="auth-page__welcome-art-title">Welcome aboard my friend</h2>
          <p className="auth-page__welcome-art-text">just one click and we start</p>
        </div>
      </div>
      <div className="auth-page__right">
        {children}
      </div>
    </div>
  );
};

AuthPageTemplate.propTypes = {
  children: T.node.isRequired,
};

export default AuthPageTemplate;
