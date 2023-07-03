import React from 'react';
import { WelcomeTitle } from './PhoneBookView.styled';
const PhoneBookView = () => {
  return (
    <div>
      <WelcomeTitle>
        Welcome to your PhoneBook
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </WelcomeTitle>
    </div>
  );
};

export default PhoneBookView;
