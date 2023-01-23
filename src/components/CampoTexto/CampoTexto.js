import React from 'react';
import PropTypes from 'prop-types';
import styles from './CampoTexto.module.scss';

const CampoTexto = ({text}) => (
  <div className={styles.CampoTexto} data-testid="CampoTexto">
    <div className="form-group row">
        <label htmlFor="nombreActi" className="col-sm-2 col-form-label">{text}</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nombreActi"
              placeholder="Nombre de la actividad"
            />
            <small id="emailHelp" className="form-text text-muted">
            Escriba el {text}
          </small>
          </div>
      </div>
  </div>
);

CampoTexto.propTypes = {};

CampoTexto.defaultProps = {};

export default CampoTexto;
