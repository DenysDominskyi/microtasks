import React, { MouseEvent, useState } from 'react'
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './NewComponent';
import { Button } from './components/Button';
import { SecondNewComponent } from './SecondNewComponent';

export type ObjType = {
  banknots: string
  value: number
  number: string
}

function App() {

  const [money, setMoney] = useState([
    { banknots: 'Dollar', value: 100, number: ' a1234567890' },
    { banknots: 'Dollar', value: 50, number: ' z1234567890' },
    { banknots: 'Euro', value: 100, number: ' w1234567890' },
    { banknots: 'Dollar', value: 100, number: ' e1234567890' },
    { banknots: 'Dollar', value: 50, number: ' c1234567890' },
    { banknots: 'Euro', value: 100, number: ' r1234567890' },
    { banknots: 'Dollar', value: 50, number: ' x1234567890' },
    { banknots: 'Euro', value: 50, number: ' v1234567890' },
  ])

  return (
    <>
      <SecondNewComponent filteredMoney={money}/>
    </>
  );
}

export default App;
