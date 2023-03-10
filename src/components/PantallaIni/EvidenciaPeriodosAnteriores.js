import React from 'react'
import PropTypes from 'prop-types'
import SelecionRegional from '../SelecionRegional/SelecionRegional'

function EvidenciaPeriodosAnteriores(props) {
  return (
    <div>
        <p>Este espacio solo se habilitará, si hay permisos por parte de D.G de agregar evidencias en algun mes especifico</p>
        <SelecionRegional></SelecionRegional>
    </div>
  )
}

EvidenciaPeriodosAnteriores.propTypes = {}

export default EvidenciaPeriodosAnteriores
