import React from 'react';
import PropTypes from 'prop-types';
import styles from './CierreRedes.module.scss';
import ContLabel from '../FormPrinci/ContLabel';
import propForms from '../FormPrinci/propiedadesForm';
const { alcanceDigital} = propForms;
//se puede optimizar utilizando componen Contlabel
const CierreRedes = ({hanldleOnchange}) => (
  <div className={styles.CierreRedes} data-testid="CierreRedes">
    Tácticas en vivo por redes sociales 
    <ContLabel nombre={"Selecione la red social"} nombrefor="selectEviRedes" margin={2} >
      <select id="selectEviRedes" className="form-control" name={"CierreMesualRedes_Red_social"} onChange={(e)=>hanldleOnchange(e)} required>
              {
                alcanceDigital.map((item,index)=><option key={item.value}>{item.label}</option>)
              }
            </select>
            
      </ContLabel>
      <ContLabel nombre={"alcance"} nombrefor="inputInter" margin={2} >   
        <input type="number" className="form-control" id="inputInter" placeholder="0" name={"CierreMesualRedes_nuevos_seguido"} onChange={(e)=>hanldleOnchange(e)} min="0" required/>
       </ContLabel>  
       <small id="emailHelp" className="form-text text-muted">
              Los campos son obligatorios, el campo alcance solo acepta numeros
            </small>     
  </div>
);

CierreRedes.propTypes = {};

CierreRedes.defaultProps = {};

export default CierreRedes;
