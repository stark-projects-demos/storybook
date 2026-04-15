import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <svg width="52" height="37" viewBox="0 0 52 37" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 48}}>
          <path d="M44.5962 0C46.7056 0.000117988 48.6524 0.973902 49.9507 2.59668C51.2491 4.21957 51.6827 6.32913 51.2495 8.38477L47.7329 23.585C46.9755 26.6683 44.2709 28.832 41.0796 28.832H32.7495L29.0171 35.1064C28.3138 36.2966 27.0696 37 25.7173 37C24.3651 36.9999 23.1208 36.2964 22.4175 35.1064L18.6851 28.832H10.354C7.16288 28.8318 4.40405 26.6682 3.70068 23.585L0.185059 8.38477C-0.301677 6.32916 0.185588 4.21956 1.48389 2.59668C2.78222 0.919845 4.72973 0 6.83936 0H44.5962ZM15.1177 11.3594C13.4151 11.3595 12.0349 12.7398 12.0347 14.4424C12.0347 16.1452 13.4149 17.5262 15.1177 17.5264C16.8205 17.5264 18.2017 16.1453 18.2017 14.4424C18.2015 12.7397 16.8204 11.3594 15.1177 11.3594ZM25.7173 11.3594C24.0145 11.3594 22.6345 12.7397 22.6343 14.4424C22.6343 16.1452 24.0144 17.5264 25.7173 17.5264C27.4202 17.5264 28.8013 16.1453 28.8013 14.4424C28.8011 12.7397 27.42 11.3594 25.7173 11.3594ZM36.3208 11.3594C34.6182 11.3595 33.238 12.7398 33.2378 14.4424C33.2378 16.1452 34.6181 17.5262 36.3208 17.5264C38.0237 17.5264 39.4038 16.1453 39.4038 14.4424C39.4036 12.7397 38.0235 11.3594 36.3208 11.3594Z" fill="black"/>
        </svg>

        <h1>TeamSync</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
