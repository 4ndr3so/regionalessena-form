import React from 'react';
import PropTypes from 'prop-types';
import styles from './CierreRedes.module.scss';
import ContLabel from '../FormPrinci/ContLabel';
let redesSoci=[
  {  value:"", label:""},
  {  value:"Facebook", label:"Facebook"},
  {  value:"Twitter", label:"Twitter"},
  {  value:"Youtube", label:"Youtube"},
  {  value:"Instagram", label:"Instagram"},
]
//se puede optimizar utilizando componen Contlabel
const CierreRedes = ({hanldleOnchange}) => (
  <div className={styles.CierreRedes} data-testid="CierreRedes">
    Cierre mensual de redes Sociales
    <ContLabel nombre={"Selecione la red social"} nombrefor="selectEviRedes" margin={2} >
      <select id="selectEviRedes" className="form-control" name={"CierreMesualRedes_Red_social"} onChange={(e)=>hanldleOnchange(e)} required>
              {
                redesSoci.map((item,index)=><option>{item.label}</option>)
              }
            </select>
            
      </ContLabel>
      <ContLabel nombre={"Nuevos seguidores"} nombrefor="inputInter" margin={2} >   
        <input type="number" className="form-control" id="inputInter" placeholder="0" name={"CierreMesualRedes_nuevos_seguido"} onChange={(e)=>hanldleOnchange(e)} required/>
       </ContLabel>  
       <small id="emailHelp" className="form-text text-muted">
              Los campos son obligatorios, el campo Seguidores solo acepta numeros
            </small>     
  </div>
);

CierreRedes.propTypes = {};

CierreRedes.defaultProps = {};

export default CierreRedes;
