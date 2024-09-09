import React, { MouseEvent, useState } from 'react'
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './NewComponent';
import { Button } from './components/Button';
import { SecondNewComponent } from './SecondNewComponent';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';

export type ObjType = {
  banknots: string
  value: number
  number: string
}

function App() {

  const [messages, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ])

  const [localInputState, setLocalInputState] = useState('')

  const addMessageWithValue = () => {
    const newMassage = { message: localInputState }
    setMessage([newMassage, ...messages])
    setLocalInputState('')
  }

  // const addMessage = (newMessageText: string) => {
  //   const newMassage = { message: newMessageText }
  //   setMessage([newMassage, ...messages])
  // }

  return (
    <>
      {/* <FullInput addMessage={addMessage} /> */}
      <Input value={localInputState} setValue={setLocalInputState} />
      <Button title='+' callBack={addMessageWithValue} />
      {messages.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </>
  );
}

export default App;
