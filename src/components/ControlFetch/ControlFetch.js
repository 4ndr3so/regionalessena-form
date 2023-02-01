import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ControlFetch.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import { createListItem, simulaCarga } from '../../api/apiRest';

const ControlFetch = ({subida}) => {
  const [store, dispatch] = useContext(StoreContext);

  const [procesActual, setProcesActual] = useState("Agregando evidencia a la lista   ");

  useEffect(() => {
    let mounted = true;

    async function fetchMyAPI() {   

  /*  simulaCarga().then(
        (successMessage) => {
          console.log("¡Sí! " , successMessage);
          subida(true,successMessage);
        },
        (fail) => {
          console.log("¡NO! " + fail);
          subida(false,fail);
        }
      )*/
        createListItem(store).then(
                    (successMessage,args) => {
                        console.debug("¡Sí! ");
                        console.debug(successMessage);
                        console.debug(args);
                        subida(true,successMessage);
                      },
                    (fail,mensaje) => {
                      console.debug("¡NO! ");
                      console.debug(fail);
                      console.debug(mensaje);
                      subida(false,mensaje);
                    }
                  );

    }
    fetchMyAPI();
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return(
  <div className={"text-center animate__animated animate__fadeIn "+styles.ControlFetch} data-testid="ControlFetch">
          <div className="alert alert-info mb-0" role="alert">
        <h4 className="alert-heading">Procesando tu solicitud </h4>
        {true ? (
          <div>
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
        ) : (
          <p>
            Evidencia cargada
          </p>
        )}
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

ControlFetch.propTypes = {};

ControlFetch.defaultProps = {};

export default ControlFetch;
