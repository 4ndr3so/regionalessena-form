import React from 'react';
import PropTypes from 'prop-types';
import styles from './CierreRedes.module.scss';
let redesSoci=[
  {  value:"facebook", label:"Facebook"},
  {  value:"twitter", label:"Twitter"},
  {  value:"senaapp", label:"SENA App"},
  {  value:"youtube", label:"Youtube"},
  {  value:"instagram", label:"Instagram"},
]

const CierreRedes = () => (
  <div className={styles.CierreRedes} data-testid="CierreRedes">
    Cierre mensual de redes Sociales
    <form>
    <div className="form-group mb-2 row">
        <label htmlFor="selectEvi" className="col-sm-2 col-form-label">Selecione la red social</label>
        <div className="col-sm-10">
          <select id="selectEvi" className="form-control">
            {
              redesSoci.map((item,index)=><option>{item.label}</option>)
            }
          </select>
          <small id="emailHelp" className="form-text text-muted">
            Agregue la información según la red social seleccionada
          </small>
        </div>
      </div>
      <div className="form-group mb-2 row">
        <label htmlFor="inputInter" className="col-sm-2 col-form-label">Nuevos seguidores</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputInter" placeholder="Interacciones"/>
        </div>
      </div>
      
    </form>
  </div>
);

CierreRedes.propTypes = {};

CierreRedes.defaultProps = {};

export default CierreRedes;
