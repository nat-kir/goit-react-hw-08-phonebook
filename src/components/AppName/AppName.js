import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './AppName.css';

const AppName = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames="AppName-slideIn"
      unmountOnExit
    >
      <h2>Phonebook</h2>
    </CSSTransition>
  );
};

export default AppName;
