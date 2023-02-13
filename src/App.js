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
const App=()=>{
const [visuForm, setVisuForm] = useState(false)
const [muestraCarga, setMuestraCarga] = useState(false)
const [fetchData, setFetchData] = useState(false)
const [resultOpera, setResultOpera] = useState(false)
const [mensaje, setMensaje] = useState("")

const handleClickCambiaPan=(e)=>{
  setVisuForm(()=>!visuForm)
}
const regresar=()=>{
  setFetchData(false);
  setResultOpera(false);
  setMuestraCarga(false);
  setVisuForm(true);  
}
const handleFetch=()=>{
  setMuestraCarga(true)
  console.debug("fetch data")
}
const handleTerminaSubida = (result,mensaje)=>{
  console.log("empieza valida servidor")
  setMensaje(mensaje)
  setFetchData(true);
  setResultOpera(result)
  console.debug(result)

}
const handleCancel=()=>{
  setVisuForm(false);
  setMuestraCarga(false);
  setFetchData(false);
  setResultOpera(false);
}
  return (
    <div className="App container">

      <StoreProvider >
        
        {visuForm ? !muestraCarga && <FormPrinci handleFetch={handleFetch} handleCancel={handleCancel}></FormPrinci>:<SelecionRegional handleClickCambiaPan={(e)=>handleClickCambiaPan(e)}></SelecionRegional>}
        {muestraCarga && !fetchData && <ControlFetch subida={handleTerminaSubida}></ControlFetch>}  
        {fetchData &&  (resultOpera ?<ExitoSubida></ExitoSubida>:<ErrorSubida mensajeError={mensaje} regresar={regresar}></ErrorSubida>)}     
      </StoreProvider>
    </div>
  );
}

export default App;
