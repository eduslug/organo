import React, { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoText from '../CampoText/CampoText'
import ListaSuspesa from '../ListaSuspensa/ListaSuspesa'
import './Formulario.css'

function Formulario(props) {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, seImagem] = useState('');
    const [time, setTime] = useState('');

    const Submit = (event) => {

        event.preventDefault();
        props.aoColaboradorCadasstrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        seImagem('')
        setTime('')
    }

    return (
            <section className='formulario'>
                <form onSubmit={Submit} >
                    <h2>Adicione gênero e músicas favoritas</h2>
                    <CampoText
                        obrigatorio={true}
                        label={'Nome'}
                        placeholder='Digite seu nome'
                        value={nome}
                        alteredState={value => setNome(value)}
                    />
                    <CampoText
                        obrigatorio={true}
                        label={'Cargo'}
                        placeholder='Digite seu cargo'
                        value={cargo}
                        alteredState={value => setCargo(value)}
                    />
                    <CampoText
                        label={'Imagem'}
                        placeholder='coloque sua imagem'
                        value={imagem}
                        alteredState={value => seImagem(value)}
                    />
                    <ListaSuspesa
                        obrigatorio={true}
                        label={'Time'}
                        itens={props.nomeTime}
                        value={time}
                        alteredState={value => setTime(value)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
            </section>
    )
}

export default Formulario