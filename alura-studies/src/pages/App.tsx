import React from 'react';
import logo from './logo.svg';

import style from './style.module.scss';

import Formulario from '../components/formulario';
import Lista from '../components/lista';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
