import React from 'react';
import PropTypes from 'prop-types';
import styles from './CampoTexto.module.scss';
import ContLabel from '../FormPrinci/ContLabel';

const CampoTexto = ({text, hanldleOnchange,iden, nombreCampo}) => (
  <div className={styles.CampoTexto} data-testid="CampoTexto">
    <ContLabel nombre={text} nombrefor="nombreActi" margin={2}>
    <input
              type="number"
              className="form-control"
              id={`inpt${iden}`}
              placeholder="0"
              name={nombreCampo}
              onChange={(e)=>hanldleOnchange(e)}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
            {text} es obligatorio
          </small>
    </ContLabel>
  </div>
);

CampoTexto.propTypes = {};

CampoTexto.defaultProps = {};

export default CampoTexto;
