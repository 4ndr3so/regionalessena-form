import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./FormPrinci.module.scss";
import FormRedes from "../FormRedes/FormRedes";
import Pqrs from "../Pqrs/Pqrs";
import CierreRedes from "../CierreRedes/CierreRedes";
import Seleccionable from "../Seleccionable/Seleccionable";
import CampoTexto from "../CampoTexto/CampoTexto";
import ContNuevo from "../ContNuevo/ContNuevo";
let alcance=[
  {  value:"", label:""},
  {  value:"comExterna", label:"comunicación Externa"},
  {  value:"comInterna", label:"comunicación Interna"},
]
let dataSelec = [
  {  value:"", label:""},
  {  value:"audiovisuales", label:"Producto audiovisual"},
  {  value:"boletines", label:"Boletin"},
  {  value:"redesSociales", label:"Red social"},
  {  value:"SENAtv", label:"SENA al aire TV"},
  {  value:"Podcast", label:"Podcast"},
  {  value:"SENAradio", label:"SENA al aire Radio"},
  {  value:"Eventos", label:"Evento"},
  {  value:"SENAapp", label:"Publicación SENA app"},
  {  value:"streaming", label:"Streaming live"},
  {  value:"facebook", label:"Facebook"},
  {  value:"twiter", label:"Twitter"},
  {  value:"impacto", label:"Impacto en medios de comunicacion regionales (Medios tradicionales, digitales y redes)"},
  {  value:"redesImpacto", label:"Cierre mensual de redes"},
  {  value:"pqrs", label:"PQRS"},
  {  value:"newsletter", label:"Newsletter"},
  {  value:"notas", label:"Nota nube"},
  {  value:"fotogaleroa", label:"Fotogalería"},
  {  value:"notiSENA", label:"NotiSENA"},
  {  value:"correoMasivo", label:"Correo Masivo"},
  {  value:"video", label:"Video"}
]
let tipoAudiovisual=[
  {  value:"senaMinuto", label:"SENA en un minuto"},
  {  value:"senaTrans", label:"SENA transforma"},
  {  value:"senaVitrinas", label:"Vitrinas"},
]
let enfoqueDife=[
  {  value:"p1", label:"Productos audiovisuales con LS o subtitulos"},
  {  value:"p2", label:"Notas internas, boletines de prensa, enfoque diferenciañ, política de discapacidad"},
  {  value:"p3", label:"Publicaciones SENA incluyente en redes sociales nacionales y regionales"},
  {  value:"p4", label:"Productos SENa al aire"},
  {  value:"p5", label:"Eventos virtuales presenciales- leguas de señas y/o tácticas en vivo"},
]
let cierreMensual=0;
let numeroImpactos=0;

const retornaNuevoCon=(valor,checkdiferen,handleChekRedes)=>{

  console.log(valor)
  let retorNo="";
  switch (valor) {
    case "audiovisuales":
        retorNo=<Seleccionable opciones={tipoAudiovisual} texto={dataSelec[1].label}></Seleccionable>;
      break;
    case "streaming": case "facebook": case "twiter":
      retorNo=<FormRedes enfoque={checkdiferen} handleChekRedes={handleChekRedes}></FormRedes>
      break;
    case "pqrs":
      retorNo=<Pqrs></Pqrs>
      break;
    case "redesImpacto":
      retorNo= <CierreRedes></CierreRedes>
      break;
    case "impacto":
      retorNo= <CampoTexto text={"Numero de impactos"}></CampoTexto>
      break;
    default:
      break;
  }
  return(retorNo!=="" ?<ContNuevo>
      {retorNo}
  </ContNuevo>:"")
}
const FormPrinci = ({ regional }) => {
 const [eviden,setEvidencia] =useState(dataSelec[0].value)
 const [checkdiferen,setCheckdiferen] =useState(false);
const [selecDife,setSelecDife]= useState("");
 const handleChekRedes=(v1,v2)=>{
    if(v2==="p1"){
      
    }
  setCheckdiferen(!checkdiferen)
}

   return(
  <div className={styles.FormPrinci} data-testid="FormPrinci">
    <form>
      <div className="form-group row">
        <label htmlFor="selectEvi" className="col-sm-2 col-form-label">Tipo evidencia </label>
        <div className="col-sm-10">
          <select id="selectEvi" className="form-control form-control-lg" value={eviden} onChange={e=>setEvidencia(e.target.value)}>
            {
              dataSelec.map((item,index)=><option key={item.value} value={item.value}>{item.label}</option>)
            }
          </select>
          <small id="emailHelp" className="form-text text-muted">
           Selecione el tipo de evidencia
          </small>
        </div>
      </div>
      { eviden && retornaNuevoCon(eviden,checkdiferen,handleChekRedes) }
      <div className="form-group row">
        <label htmlFor="nombreActi" className="col-sm-2 col-form-label">Nombre actividad</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nombreActi"
              placeholder="Nombre de la actividad"
            />
            <small id="emailHelp" className="form-text text-muted">
            Escriba el tipo de actividad
          </small>
          </div>
      </div>
      <div className="form-group row">
        <label htmlFor="selectAlcance" className="col-sm-2 col-form-label">Alcance </label>
          <div className="col-sm-10">
            <select id="selectAlcance" className="form-control form-control-lg">
              {
                alcance.map((item,index)=><option key={item.value} >{item.label}</option>)
              }
            </select>
            <small id="emailHelp" className="form-text text-muted">
              Seleccione el alcance
            </small>
          </div>
      </div>

      <div className="form-group row">
        <label htmlFor="nombreActi" className="col-sm-2 col-form-label">Descripción</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="nombreActi"
            placeholder="Nombre de la actividad"
          />
          <small id="emailHelp" className="form-text text-muted">
              Descripción
            </small>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="nombreActi" className="col-sm-2 col-form-label">Link</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="nombreActi"
            placeholder="Nombre de la actividad"
          />
          <small id="emailHelp" className="form-text text-muted">
              Link de la evidencia, un link por evidencia
            </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="imagenUpload" className="col-sm-2 col-form-label">Imagen de la evidencia</label>
        <div className="col-sm-10">
          <input type="file" className="form-control-file" id="imagenUpload"/>
        </div>
    </div>
    <div className="form-group row">
        <label htmlFor="fechaEvi" className="col-sm-2 col-form-label">Fecha de la evidencia</label>
        <div className="col-sm-10">
          <input type="date" className="form-control-file" id="fechaEvi"/>
        </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="check1">
            Enfoque Diferencial
          </label>
        <div className="form-check col-sm-10">
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            checked={checkdiferen}
            onChange={(e)=> handleChekRedes()}
          />
          
        </div>
      </div>
      {
         checkdiferen?<Seleccionable opciones={enfoqueDife} seleccion={selecDife} texto={"Enfoque diferencial"}></Seleccionable>:""
      }
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
)};

FormPrinci.propTypes = {};

FormPrinci.defaultProps = {};

export default FormPrinci;
