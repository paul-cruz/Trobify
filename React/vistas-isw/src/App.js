import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import PCliente from './components/PerfilCliente';
import PerfilCliente from './components/PerfilCliente'

function App() {

  /*
  const [name, setName] = useState('Your Name');
  const [surname, setSurname] = useState('Your Surname');
  const [email, setEmail] = useState('Your Email');
  const [phone, setPhone] = useState('Your Phone');
  const [address, setAddress] = useState('Your Address');

  <Card name={'Señor'} surname={'del Bigote'} age={'30 años'} email={'srbigote@delicioso.com'} phone={'5512345678'} address={'Cerca de Maribel Guardia'} />

  */

  return (
    <div className='App'>
      <PCliente />
    </div>
  );
}

export default App;
