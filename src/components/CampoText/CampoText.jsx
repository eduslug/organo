import React from 'react'
import './CampoText.css'

function CampoText(props) {


  function change(event) {
    props.alteredState(event.target.value)
  }
  return (
    <div className='campo-text'>
      <label>{props.label}</label>
      <input value={props.value}
        onChange={change}
        required={props.obrigatorio}
        placeholder={`${props.placeholder}`} />
    </div>
  )
}

export default CampoText