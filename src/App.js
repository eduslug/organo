import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import './App.css'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  function addColaborador(colocaborador) {
    console.log(colocaborador)
    setColaboradores([...colaboradores, colocaborador])
  }
  return (
    <div>
      <Banner />
      <Formulario nomeTime={times.map(time => time.nome)} aoColaboradorCadasstrado={colocaborador => addColaborador(colocaborador)} />
      {times.map((time) => {
        return <Time nome={time.nome}
          key={time.nome}
          corPrimaria={time.corSecundaria}
          corSecundaria={time.corPrimaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      })}
    </div>
  );
}

export default App;
