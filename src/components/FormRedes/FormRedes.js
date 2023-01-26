import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormRedes.module.scss';
import ContLabel from '../FormPrinci/ContLabel';


const FormRedes = ({enfoque,handleChekRedes,hanldleOnchange}) => {

  const handleChekRedesChild=(enfoque)=>{
    enfoque=!enfoque;
    handleChekRedes(enfoque,"p1");
  }
  
  return(
  <div className={styles.FormRedes} data-testid="FormRedes">
    Stream live/Facebook/Twitter

    <ContLabel nombre={"Alcance"} nombrefor="inputAlcance" margin={2}>
      <input type="number" className="form-control" id="inputAlcance" placeholder="0" name={"Alcance"} onChange={e=>hanldleOnchange(e)} required/>
    </ContLabel>
    <ContLabel nombre={"Interacciones"} nombrefor="inputInter" margin={2}>
    <input type="number" className="form-control" id="inputInter" placeholder="0"  name={"Interacciones"} onChange={e=>hanldleOnchange(e)} required/>
    </ContLabel>
    <ContLabel nombre={"Compartidas"} nombrefor="inputCompa" margin={2}>
    <input type="number" className="form-control" id="inputCompa" placeholder="0"  name={"Compartidas"}  onChange={e=>hanldleOnchange(e)} required/>
    </ContLabel>
    <ContLabel nombre={"Comentarios"} nombrefor="inputComentarios" margin={2}>
    <input type="number" className="form-control" id="inputComentarios" placeholder="0"  name={"Comentarios"}  onChange={e=>hanldleOnchange(e)} required/>
    </ContLabel>
    <ContLabel nombre={"Conectados"} nombrefor="inputConecta" margin={2}>
    <input type="number" className="form-control" id="inputConecta" placeholder="0"  name={"Conectados"}  onChange={e=>hanldleOnchange(e)} required/>
    </ContLabel>
    <small id="emailHelp" className="form-text text-muted">
             Todos los campos son obligatorios, si no tiene la información de alguno de ellos debe dejarlo en 0, solo acepta numeros
     </small>
      {/*<div className="form-group mb-2 row">
      <label className="col-sm-2 col-form-label" htmlFor="check1">
            Lenguaje de señas
          </label>
        <div className="form-check col-sm-10">
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            checked={enfoque}
            onChange={(e)=>handleChekRedesChild(enfoque)}
          />   
        </div>
  </div>*/}
  
  </div>
  
)};

FormRedes.propTypes = {};

FormRedes.defaultProps = {};

export default FormRedes;
