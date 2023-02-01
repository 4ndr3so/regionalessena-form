import React from "react";

const ExitoSubida = () => {
  return (
    <div className="alert alert-success animate__animated animate__fadeIn" role="alert">
      <h4 className="alert-heading">Tu evidencia se ha recibido</h4>
      <p>
        La evidencia se ha cargado correctamente
      </p>
      <hr />
      <p className="mb-0">
            Puede revisarla en la vista de evidencias
      </p>
      <a href="https://sena4.sharepoint.com/sites/comunica/repositorio_comunicaciones/">Regresar</a><br></br>
      <a href="https://sena4.sharepoint.com/sites/comunica/repositorio_comunicaciones/SitePages/regionales_indicadores.aspx">Publicar otra evidencia</a>
    </div>
  );
};

export default ExitoSubida;
