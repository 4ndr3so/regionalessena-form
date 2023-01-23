import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormRedes.module.scss';


const FormRedes = ({enfoque,handleChekRedes}) => {
  console.log(enfoque)
  const handleChekRedesChild=(enfoque)=>{
    enfoque=!enfoque;
    handleChekRedes(enfoque,"p1");
  }
  
  return(
  <div className={styles.FormRedes} data-testid="FormRedes">
    Stream live/Facebook/Twitter

      
      <div className="form-group row">
        <label htmlFor="inputAlcance" className="col-sm-2 col-form-label">Alcance</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputAlcance" placeholder="Alcance"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputInter" className="col-sm-2 col-form-label">Interacciones</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputInter" placeholder="Interacciones"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputCompa" className="col-sm-2 col-form-label">Compartidas</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputCompa" placeholder="Compartidas"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputComentarios" className="col-sm-2 col-form-label">Comentarios</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputComentarios" placeholder="Comentarios"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputConecta" className="col-sm-2 col-form-label">Conectados</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputConecta" placeholder="Conectados"/>
        </div>
      </div>
      <div className="form-group row">
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
      </div>
  
  </div>
  
)};

FormRedes.propTypes = {};

FormRedes.defaultProps = {};

export default FormRedes;
