import React from 'react'
import './Botao.css'
function Botao(props) {
  return (
    <div >
        <button className='botao'>{props.children}</button>
    </div>
  )
}

export default Botao