import logo from './logo.svg';
import './App.css';
import FormPrinci from "./components/FormPrinci/FormPrinci"
import SelecionRegional from "./components/SelecionRegional/SelecionRegional"
import StoreProvider from './store/StoreProvider';
import VistaIntermedia from './components/VistaIntermedia/VistaIntermedia';
import { useState } from 'react';
import ControlFetch from './components/ControlFetch/ControlFetch';
import ExitoSubida from './components/ControlFetch/ExitoSubida';
import ErrorSubida from './components/ControlFetch/Errorsubida';
import PantallaIni from './components/PantallaIni/PantallaIni';
import ControlFetchIni from './components/ControlFetchIni/ControlFetchIni';
const App=()=>{
const [visuForm, setVisuForm] = useState()

const [visuElemen, setVisuElemen] = useState({cargaInicial:true,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:false,
errorSubida:false,exitoSubida:false})
const [muestraCarga, setMuestraCarga] = useState(false)
const [fetchData, setFetchData] = useState(false)
const [resultOpera, setResultOpera] = useState(false)
const [mensaje, setMensaje] = useState("Problemas con el Sharepoint, intentelo más tardes")
const [cargaInicial, setCargaInicial] = useState(true)
const [modifica, setModifica] = useState(false)


const handleClickCambiaPan=(e)=>{
 let updateVisual={cargaInicial:false,pantallaInicial:false,formulario:true,fetchDataForm:false,seleccionRegional:false,
    errorSubida:false,exitoSubida:false}
  setVisuElemen(updateVisual)
}
const regresar=()=>{
  setFetchData(false);
  setResultOpera(false);
  setMuestraCarga(false);
  setVisuForm(true);  
}
const handleFetch=()=>{
  let updateVisual={cargaInicial:false,pantallaInicial:false,formulario:false,fetchDataForm:true,seleccionRegional:false,
    errorSubida:false,exitoSubida:false}
  setVisuElemen(updateVisual)
  console.debug("fetch data")
}
const handleTerminaSubida = (result,mensaje)=>{
  let updateVisual;
  if(result){
     updateVisual={cargaInicial:false,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:false,
      errorSubida:false,exitoSubida:true}
      setVisuElemen(updateVisual)
  }else{
    updateVisual={cargaInicial:false,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:false,
      errorSubida:true,exitoSubida:false}
      setMensaje("El elemento de lista no se pudo agregar ni actualizar porque se encontraron valores duplicados en los siguientes campos de la lista: [hash_link].")
      setVisuElemen(updateVisual)
  }
  console.log("empieza valida servidor")
}
const handleTerminaCargaInicial=(result)=>{
  let updateVisual={cargaInicial:false,pantallaInicial:true}
  setVisuElemen(visuElemen=>({
    ...visuElemen,
    ...updateVisual
  }))
  if(!result){
    setMensaje("Problemas al intentar cargar datos iniciales")
    //para pruebas poner pantalla inicial true
    updateVisual={cargaInicial:false,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:false,
      errorSubida:true,exitoSubida:false}
 }

}
const handleCancel=()=>{
  let updateVisual={cargaInicial:true,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:false,
    errorSubida:false,exitoSubida:false}
  setVisuElemen(updateVisual)
  setModifica(false);
}
const handleCambiaEstadoIni=(target)=>{
  let updateVisual;
  console.debug(target)
  switch (target) {
    case "regular":
       updateVisual={cargaInicial:false,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:true,
        errorSubida:false,exitoSubida:false}
      setVisuElemen(updateVisual)
      break;
    case "modificar":
       updateVisual={cargaInicial:false,pantallaInicial:true}
      setVisuElemen(visuElemen=>({
        ...visuElemen,
        ...updateVisual
      }))
      break;
    case "anteriores":
      updateVisual={cargaInicial:false,pantallaInicial:false,formulario:false,fetchDataForm:false,seleccionRegional:true,
        errorSubida:false,exitoSubida:false}
      setVisuElemen(visuElemen=>({
        ...visuElemen,
        ...updateVisual
      }))
      setModifica(true);
      break;
  
    default:
      break;
  }
}

  return (
    <div className="App container">

      <StoreProvider >

          { visuElemen.cargaInicial && <ControlFetchIni subida={handleTerminaCargaInicial}></ControlFetchIni> }
          { visuElemen.pantallaInicial && <PantallaIni cambiaestado={handleCambiaEstadoIni}></PantallaIni>}
          { visuElemen.seleccionRegional && <SelecionRegional handleClickCambiaPan={(e)=>handleClickCambiaPan(e)} selecMes={modifica}></SelecionRegional>}
          { visuElemen.formulario &&  <FormPrinci handleFetch={handleFetch} handleCancel={handleCancel}></FormPrinci>}
          { visuElemen.fetchDataForm &&  <ControlFetch subida={handleTerminaSubida}></ControlFetch>}
          { visuElemen.exitoSubida &&  <ExitoSubida></ExitoSubida>}
          { visuElemen.errorSubida &&  <ErrorSubida mensajeError={mensaje} regresar={regresar}></ErrorSubida>}
      </StoreProvider>
      
    </div>
  );
}
/*
{visuForm ? !muestraCarga && <FormPrinci handleFetch={handleFetch} handleCancel={handleCancel}></FormPrinci>:<SelecionRegional handleClickCambiaPan={(e)=>handleClickCambiaPan(e)}></SelecionRegional>}
        {muestraCarga && !fetchData && <ControlFetch subida={handleTerminaSubida}></ControlFetch>}  
        {fetchData &&  (resultOpera ?<ExitoSubida></ExitoSubida>:<ErrorSubida mensajeError={mensaje} regresar={regresar}></ErrorSubida>)}  

*/
export default App;
