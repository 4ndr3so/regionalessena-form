import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ControlFetchIni.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { response,retrieveListItems } from '../../api/apiRest';
import propForms from '../FormPrinci/propiedadesForm';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

const iniciEs=[
  {ID: '1', Title: 'correo', mes: ''}
  ,
  {ID: '2', Title: 'estado', mes: ''}
  ,
  {ID: '3', Title: 'mes', mes: ''}
]

const ControlFetchIni = ({subida}) => {
  const {meses}=propForms;
  const [store, dispatch] = useContext(StoreContext);
  const [inicial, setInicial] = useState(iniciEs);
  useEffect(() => {
    let mounted = true;

    async function fetchMyAPI() {   
      
      // response().then( //para pruebas
      retrieveListItems().then(
        (args) => {
            console.log(args)
            console.debug("¡Sí! ");
            //console.log(args[1].mes)
            let newArr=[...iniciEs]
            newArr[0]={ID: '1', Title: 'correo', mes: args[0].mes}
            newArr[1]={ID: '2', Title: 'estado', mes: args[1].mes}
            newArr[2]={ID: '3', Title: 'mes', mes: args[2].mes}

            
            setInicial(newArr)
              
           // console.debug(inicial);
            dispatch({
              type:types.change_data,
              payload:{name:"Cierre_x0020_mensual_x0020_redes",value:args[2].mes}
              })

              subida(true,"Datos cargados");
          },
        (fail,mensaje) => {
          console.debug("¡NO! ");
          console.debug(fail);
          console.debug(mensaje);
            subida(false,"Problemas al cargar la App");
        }
      );
    }
    fetchMyAPI();
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const [procesActual, setProcesActual] = useState("Empezando el sistema... ");
  return (
    <div className={"text-center animate__animated animate__fadeIn "+styles.ControlFetch} data-testid="ControlFetch">
            <div className="alert alert-info mb-0" role="alert">
          <h4 className="alert-heading">Cargando datos de la Herramienta </h4>
          {<div>
              <p>
                {procesActual}
                {"  "}
                <br></br>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">  Procesando...</span>
              </p>
            </div>
          }
          <hr />
          <p className="mb-0">Espera un momento</p>
        </div>
        <div className="progress">
          <div
            className="progress-bar-animated progress-bar-striped bg-info progresoU"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
    </div>
  )};

ControlFetchIni.propTypes = {};

ControlFetchIni.defaultProps = {};

export default ControlFetchIni;
