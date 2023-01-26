import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pqrs.module.scss';
import ContLabel from '../FormPrinci/ContLabel';
//se puede optimizar utilizando componen Contlabel
const Pqrs = ({hanldleOnchange}) => (
  <div className={styles.Pqrs} data-testid="Pqrs">
    Caja de comentarios
    <ContLabel nombre={"Preguntas"} nombrefor="inputPre" margin={2} >
      <input type="number" className="form-control" id="inputPre" placeholder="0" name={"PQRS_pregunta"} onChange={(e)=>hanldleOnchange(e)} required/>
    </ContLabel>

    <ContLabel nombre={"Contestados"} nombrefor="inputContes" margin={2} >
      <input type="number" className="form-control" id="inputContes" placeholder="0" name={"PQRS_contestadas"} onChange={(e)=>hanldleOnchange(e)} required/>
    </ContLabel>

    <ContLabel nombre={"Sin contestar"} nombrefor="inputSinCon" margin={2} >
      <input type="number" className="form-control" id="inputSinCon" placeholder="0" name={"PQRS_sin_contestar"} onChange={(e)=>hanldleOnchange(e)} required/>
    </ContLabel>
      Bandeja de entrada
    <ContLabel nombre={"Preguntas"} nombrefor="inputPreguntas" margin={2} >
      <input type="number" className="form-control" id="inputPreguntas" placeholder="0" name={"PQRS_preguntas_bandeja_entrada"}  onChange={(e)=>hanldleOnchange(e)} required/>
    </ContLabel>

    <ContLabel nombre={"Contestados"} nombrefor="inputContesB" margin={2} >
      <input type="number" className="form-control" id="inputContesB" placeholder="0" name={"PQRS_contestados_bandejaEntrada"}  onChange={(e)=>hanldleOnchange(e)} required/>
    </ContLabel>

    <ContLabel nombre={"Sin contestar"} nombrefor="inputsinContesB" margin={2} >
      <input type="number" className="form-control" id="inputsinContesB" placeholder="0" name={"PQRS_Sin_contestar_bandeja_entra"}  onChange={(e)=>hanldleOnchange(e)} required/>
    </ContLabel>
    <small id="emailHelp" className="form-text text-muted">
            Todos los campos son obligatorios, solo acepta numeros
          </small>
   </div>
);

Pqrs.propTypes = {};

Pqrs.defaultProps = {};

export default Pqrs;
