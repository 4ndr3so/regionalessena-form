import React from 'react'
import ContLabel from '../FormPrinci/ContLabel'

function ModificarItem() {
    const handleChange=()=>{

    }
  return (
    <div>
        <p>Escriba el Id del item para ver si tiene autorización de modificación</p> 
        <form action="submit" className="needs-validation was-validated bordeFor animate__animated animate__fadeIn">
        <ContLabel nombre={"Descripción u observación"} nombrefor="decrip" margin={4}>
          <input rows="3"
            type="text"
            className="form-control"
            id="id"
            placeholder="ID evidencia"
            name="Id"
            maxLength="9999"
            onChange={e => handleChange(e)}
          />
          <small id="emailHelp" className="form-text text-muted">
           Escriba el id de la evidencia
          </small>
        </ContLabel>
        <button type="submit"  className={" btn btn-success"} >
          buscar evidencia
        </button>
        </form>
    </div>

  )
}

export default ModificarItem