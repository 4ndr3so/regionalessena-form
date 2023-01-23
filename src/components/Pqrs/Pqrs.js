import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pqrs.module.scss';

const Pqrs = () => (
  <div className={styles.Pqrs} data-testid="Pqrs">
    Caja de comentarios

      <div className="form-group row">
        <label for="inputPre" className="col-sm-2 col-form-label">Preguntas</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputPre" placeholder="Preguntas"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputContes" className="col-sm-2 col-form-label">Contestados</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputContes" placeholder="Contestados"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputSinCon" className="col-sm-2 col-form-label">Sin contestados</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputSinCon" placeholder="Sin contestados"/>
        </div>
      </div>
      Bandeja de entrada
      <div className="form-group row">
        <label htmlFor="inputPreguntas" className="col-sm-2 col-form-label">Preguntas</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputPreguntas" placeholder="Preguntas"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputContesB" className="col-sm-2 col-form-label">Contestados</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputContesB" placeholder="Contestados"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputsinContesB" className="col-sm-2 col-form-label">Sin contestar</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputsinContesB" placeholder="Sin contestar"/>
        </div>
      </div>
   </div>
);

Pqrs.propTypes = {};

Pqrs.defaultProps = {};

export default Pqrs;
