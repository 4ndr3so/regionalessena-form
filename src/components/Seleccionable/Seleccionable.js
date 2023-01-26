import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Seleccionable.module.scss';
import ContLabel from '../FormPrinci/ContLabel';

const Seleccionable = ({opciones,texto,hanldleOnchange,iden}) => {

  const [audio,setAudio]=useState(opciones[0].value)
  const changeVar=(e)=>{
    setAudio(e.target.value)
    hanldleOnchange(e,e.target.value)
  }
  return (
    <ContLabel nombre={texto} nombrefor="selec" margin={2} className={styles.Seleccionable} iden={iden}>
                <select id={`select${iden}`} className="form-control" value={audio} name={audio} onChange={e=>changeVar(e)} required>
                  {
                    opciones.map((item,index)=><option key={item.value}>{item.value}</option>)
                  }
                </select>
                <small id="emailHelp" className="form-text text-muted">
                  Seleccione el {texto}
                </small>
      </ContLabel>           
)};

Seleccionable.propTypes = {};

Seleccionable.defaultProps = {};

export default Seleccionable;