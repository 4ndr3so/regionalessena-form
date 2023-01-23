import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './ContNuevo.module.scss';

const ContNuevo = ({children}) => (
  <div className={styles.ContNuevo} data-testid="ContNuevo">
    {children}
  </div>
);

ContNuevo.propTypes = {};

ContNuevo.defaultProps = {};

export default ContNuevo;
