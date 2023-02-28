import React from "react";

const ErrorSubida = ({mensajeError,regresar}) => {
  return (
    <div className="alert alert-danger animate__animated animate__fadeIn" role="alert">
      <h4 className="alert-heading">❌</h4>
      <p>
        Nos encontramos el siguiente error:<br></br> { mensajeError} <br></br>
        {mensajeError.includes("[hash_link]")
        ?"El enlace adjunto para la evidencia está duplicado, lo cual no está permitido.":"Asegúrese de tener internet e Inténtelo de nuevo"}
      </p>
      <hr />
      <p className="mb-0">
        Por favor ajuste la evidencia e inténtelo de nuevo
      </p>
      <a href="https://sena4.sharepoint.com/sites/comunica/repositorio_comunicaciones/SitePages/regionales_indicadores.aspx"> Ir a la página principal</a><br></br><br></br>
      {
        //<button className="btn btn-primary" onClick={(e)=>regresar(e)}>Regresar a corregir el link</button>
        }
    </div>
  );
};

export default ErrorSubida;
