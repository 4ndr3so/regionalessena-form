import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SelecionRegional.module.scss';
import propForms from '../FormPrinci/propiedadesForm';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

const SelecionRegional = () => {
  const [store, dispatch] = useContext(StoreContext);
const {Regional,Cierre_x0020_mensual_x0020_redes:mes} = store;
  const [seleccionado, setSeleccionado] = useState(true)
  const [seleccionado2, setSeleccionado2] = useState(true)
  const {meses,regionalesAr}=propForms;


  const handleChange=(e)=>{
    setSeleccionado(false)
  //  console.log(e.target.value);
    dispatch({
      type:types.change_data,
      payload:{name:"Regional",value:e.target.value}
      })
  }

  const handleChangeMes=(e)=>{
    setSeleccionado2(false)
   // console.log(e.target.value);
    dispatch({
      type:types.change_data,
      payload:{name:"Cierre_x0020_mensual_x0020_redes",value:e.target.value}
      })
  }
  //cierre mensual redes se usara con el numero del mes
  return (
    <div className={"row mt-4 mb-3"+styles.SelecionRegional} data-testid="SelecionRegional">
        <p>Selecione la regional</p>
      <select className="form-select" size="6" aria-label="size 6 select example" name={"Regional"} onChange={e => handleChange(e)}>
          {
              regionalesAr.map((item,index)=><option value={item.Id} key={item.Id}>{item.Title}</option>)
          }    
      </select>
      <p>Para selecionar el mes, debe seleccionar primero la regional</p>
      <select className="form-select" size="6" aria-label="size 6 select example" name={"Cierre_x0020_mensual_x0020_redes"} disabled={seleccionado} onChange={e => handleChangeMes(e)}>
        {
            meses.map((item,index)=><option value={item.id} key={item.id}>{item.mes}</option>)
        }   
      </select>
      <p>Para continuar agregando evidencia debe selecionar el mes</p>
      <button type="button" className="btn btn-primary mt-2" disabled={seleccionado2}>{`Continuar evidencia con: ${Regional && regionalesAr.find(x=>parseInt(x.Id) === parseInt(Regional)).Title } ${mes && meses.find(x=>parseInt(x.id) === parseInt(mes)).mes}`} </button>
  </div>
  )
};

SelecionRegional.propTypes = {};

SelecionRegional.defaultProps = {};

export default SelecionRegional;
