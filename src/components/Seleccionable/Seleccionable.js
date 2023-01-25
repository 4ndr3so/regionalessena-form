import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Seleccionable.module.scss';

const Seleccionable = ({opciones,texto,seleccion}) => {

  const [audio,setAudio]=useState(opciones[0].value)

  return (
  
    <div className={"form-group row "+styles.Seleccionable} data-testid="Seleccionable">
            <label htmlFor="selectEvi" className="col-sm-2 col-form-label">{texto} </label>
            <div className="col-sm-10">
              <select id="selectEvi" className="form-control" value={audio} onChange={e=>setAudio(e.target.value)}>
                {
                  opciones.map((item,index)=><option key={item.value}>{item.label}</option>)
                }
              </select>
              <small id="emailHelp" className="form-text text-muted">
                Seleccione el {texto}
              </small>
            </div>
      </div>

)};

Seleccionable.propTypes = {};

Seleccionable.defaultProps = {};

export default Seleccionable;
