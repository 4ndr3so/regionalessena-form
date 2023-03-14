import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PantallaIni.module.scss';
import {response} from "../../api/apiRest"
import { StoreContext } from '../../store/StoreProvider';
import { types } from "../../store/StoreReducer";
import propForms from '../FormPrinci/propiedadesForm';




const PantallaIni = ({cambiaestado}) => {


  const handleModificar=(evt)=>{
          cambiaestado(evt.target.name)
    
  }
  const [store, dispatch] = useContext(StoreContext);
  const { Title, Alcance, Cierre_x0020_mensual_x0020_redes, CierreMesualRedes_nuevos_seguido, CierreMesualRedes_Red_social,
    Descripci_x00f3_n, Enfoque_x0020_diferencial, hash_link, PublishingPageImage, link_evidencia, numero_x0020_Impactos,
    PQRS_contestadas, PQRS_contestados_bandejaEntrada, PQRS_pregunta, PQRS_preguntas_bandeja_entrada, PQRS_Sin_contestar_bandeja_entra,
    PQRS_sin_contestar, PQRS_temas, Producto_audiovisual_PA, S_F_T_alcance, S_F_T_comentarios, S_F_T_compartidas,
    S_F_T_conectados, S_F_T_interacciones, S_F_T_Lenguaje_sennas, Tipo_x0020_Evidencia, Regional,
    Fecha_x0020_de_x0020_la_x0020_ev
  } = store;
  const [habilitada, setHabilitada] = useState(false)
  const {meses}=propForms;
useEffect(() => {

    if(Cierre_x0020_mensual_x0020_redes && Cierre_x0020_mensual_x0020_redes!==""){
      console.log(Cierre_x0020_mensual_x0020_redes)
      setHabilitada(true)
    }

  return () => {
   
  }
}, [])


  return (
  <div className={styles.PantallaIni} data-testid="PantallaIni">
    <p>Bienvenido al reporte mensual de indicadores plan de acción 2023</p>
    <p>Para continuar seleccione la acción que desea realizar:</p>

    <div className={styles.stiloCampo+" py-3 my-4 border-top"}>
      <p>En el siguiente espacio puede crear una evidencia en las fechas establecidas</p>
      <button type="button"  className={styles.mrd+" btn btn-success"} name="regular" onClick={e => handleModificar(e)} >
            Crear nueva evidencia en fechas establecidas
          </button>
    </div>
    <div className={styles.espacioDivide}></div>
    <div className={styles.stiloCampo+" py-3 my-4 border-top"}  >
        <p>Si por alguna razón se decide volver a abrir algún espacio general para el recargue de evidencias se habilitará está opción</p>
        <p>{ !habilitada? "La carga de evidencia de meses anteriores no está habilitada":"La carga de evidencia de meses anteriores está habilitada"}</p>
        <button type="button" className="btn btn-warning" onClick={e => handleModificar(e)} name="anteriores" disabled={!habilitada }>
          Crear evidencia para el periodo de {habilitada && meses.filter((val)=>parseInt(val.id) === parseInt(Cierre_x0020_mensual_x0020_redes))[0].mes  }
        </button>
    </div>
   { /*<><div className={styles.espacioDivide}></div>
    <div className={styles.stiloCampo +" py-3 my-4 border-top"}  >
    <span className='text-danger'> En desarrollo.....</span>
        <p>De clic en el siguiente para modificar una evidencia.  <br></br>
        Para que le aparezca la opción de modificación antes debe enviar un correo a {}, con el ID de la evidencia</p>
        <button type="button" className="btn btn-warning" name="modificar" onClick={e => handleModificar(e)} disabled>
          Modificar evidencia
        </button>
    </div></>*/
    }

  </div>
)};

PantallaIni.propTypes = {};

PantallaIni.defaultProps = {};

export default PantallaIni;
