import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './VistaIntermedia.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import propForms from '../FormPrinci/propiedadesForm';

const VistaIntermedia = () =>{ 
  const [store, dispatch] = useContext(StoreContext);
  const {Regional,Cierre_x0020_mensual_x0020_redes:mes} = store;
  const {meses,regionalesAr}=propForms;

  return(
  <div className={styles.VistaIntermedia} data-testid="VistaIntermedia">
    <h5>
    {`Evidencias de ${Regional && regionalesAr.find(x=>parseInt(x.Id) === parseInt(Regional)).Title } para el mes de ${mes && meses.find(x=>parseInt(x.id) === parseInt(mes)).mes}`}
    </h5>
    <div>
      <p>Descripción del tema de tema...</p>
    </div>
  </div>
)};

VistaIntermedia.propTypes = {};

VistaIntermedia.defaultProps = {};

export default VistaIntermedia;
