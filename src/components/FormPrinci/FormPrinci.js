import React, { useCallback, useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./FormPrinci.module.scss";
import Seleccionable from "../Seleccionable/Seleccionable";
import propForms from "./propiedadesForm";
import retornaNuevoCon from "./retornaNuevoCon";
import ContLabel from "./ContLabel";
import { StoreContext } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";
let cierreMensual = 0;
let numeroImpactos = 0;



const FormPrinci = ({ handleFetch,handleCancel }) => {
  const refTextArea= useRef();
  const [store, dispatch] = useContext(StoreContext);
  const { Title, Alcance, Cierre_x0020_mensual_x0020_redes, CierreMesualRedes_nuevos_seguido, CierreMesualRedes_Red_social,
    Descripci_x00f3_n, Enfoque_x0020_diferencial, hash_link, PublishingPageImage, link_evidencia, numero_x0020_Impactos,
    PQRS_contestadas, PQRS_contestados_bandejaEntrada, PQRS_pregunta, PQRS_preguntas_bandeja_entrada, PQRS_Sin_contestar_bandeja_entra,
    PQRS_sin_contestar, PQRS_temas, Producto_audiovisual_PA, S_F_T_alcance, S_F_T_comentarios, S_F_T_compartidas,
    S_F_T_conectados, S_F_T_interacciones, S_F_T_Lenguaje_sennas, Tipo_x0020_Evidencia, Regional,
    Fecha_x0020_de_x0020_la_x0020_ev
  } = store;
  const {meses,regionalesAr}=propForms;
  //console.log(store.state)
  const { alcanceComu, dataSelec, dataSelec2 } = propForms;
  const [eviden, setEvidencia] = useState(dataSelec[0].value)
  const [validaText, setValidaText] = useState(true)
  const [checkdiferen, setCheckdiferen] = useState(false);
  const [alcance, setAlcance] = useState("");
  const dataImpactos = [].concat(dataSelec).concat({  value:"Impactos Noticias SENA", label:"Impactos Noticias SENA"}) 

  const handleChekRedes = (e, v2) => {
   /* dispatch({
      type:types.change_data,
      payload:{name:e.target.name,value:e.target.checked}
      })*/
    setCheckdiferen(!checkdiferen)
  }

  const handleChange = useCallback (evt => {
     // console.log(e.target.value)
     /* dispatch({
        type:types.change_data,
        payload:{name:e.target.name,value:e.target.value}
        })*/
        switch (evt.target.name) {
          case "Alcance":
            setAlcance(evt.target.value)
            //para edvolverse y arreglar el link se debe poner el value....
          /*  dispatch({
              type:types.change_data,
              payload:{name:evt.target.name,value:evt.target.value}
              })*/
            break;
          case "Tipo_x0020_Evidencia":
            setEvidencia(evt.target.value)
            //para edvolverse y arreglar el link se debe poner el value....
          /*  dispatch({
              type:types.change_data,
              payload:{name:evt.target.name,value:evt.target.value}
              })*/
            break;
        case "Enfoque_x0020_diferencial":
        /*  dispatch({
            type:types.change_data,
            payload:{name:evt.target.name,value:checkdiferen}
            })*/
              break;
        case "link_evidencia":
         /* let md5 = require('md5');
          let hashLin=md5(evt.target.value)
          dispatch({
            type:types.change_data,
            payload:{name:evt.target.name,value:evt.target.value}
            })
          dispatch({
              type:types.change_data,
              payload:{name:"hash_link",value:hashLin}
              })*/
                   break;
          default:
           /* dispatch({
              type:types.change_data,
              payload:{name:evt.target.name,value:evt.target.value}
              })*/
            break;
          }
      },[dispatch])
     
  const hanldleOnchange=(e,audio)=>{
    switch (e.target.name) {
      case "a":
        
        break;
    
      default:
        break;
    }
     // console.debug(e.target.value)
  }    
  const handleSubmit=(evt)=>{
    console.debug("inicia submit")
    evt.preventDefault();
    let validate=comprobarlink(refTextArea.current.value);
    setValidaText(()=>validate)
    if(validate){
      
      
      for(let i=0;i<evt.target.length;i++){
       // console.debug(evt.target[i].name,evt.target[i].value)
        if(evt.target[i].name==="Enfoque_x0020_diferencial"){
          dispatch({
            type:types.change_data,
            payload:{name:evt.target[i].name,value:checkdiferen}
            })
        }else if(evt.target[i].name==="link_evidencia"){

          let md5 = require('md5');
          let hashLin=md5(evt.target[i].value)
          dispatch({
            type:types.change_data,
            payload:{name:evt.target[i].name,value:evt.target[i].value}
            })
          dispatch({
              type:types.change_data,
              payload:{name:"hash_link",value:hashLin}
              })
        }else if(evt.target[i].name==="Fecha_x0020_de_x0020_la_x0020_ev"){
          let fechaPrev=evt.target[i].value
          let newDateAca=fechaPrev.split("-")
          console.log(evt.target[i].value)
          var dateObj = new Date(newDateAca[1]+"/"+newDateAca[2]+"/"+newDateAca[0]);
          dispatch({
            type:types.change_data,
            payload:{name:evt.target[i].name,value:dateObj}
            })
        }  else{
          dispatch({
            type:types.change_data,
            payload:{name:evt.target[i].name,value:evt.target[i].value}
            })
        }   
      }
      dispatch({type:types.fetch_data })

      handleFetch(evt);
      
    }else{    }
  }

  const comprobarlink=(link)=>{
    const regExp1=/^https?\:\/\/*[^\s]+$/
    let valida=regExp1.test(link);
    if(!valida){
      refTextArea.current.focus()
    }
    
    return valida
  }
  const selecRegio=()=>{
    let Nom=regionalesAr.filter((v)=>v.Id==Regional)
    return Nom[0].Title
  }

  const selecMonth=()=>{
    let nom=meses.filter((v)=>v.id==Cierre_x0020_mensual_x0020_redes)  
    return nom[0].mes
  }

  const selectMindate=()=>{
    let obtenerMes="";
    if(parseInt(Cierre_x0020_mensual_x0020_redes)<10){
      obtenerMes="0"+(parseInt(Cierre_x0020_mensual_x0020_redes)+1);
    }else{
      obtenerMes=(parseInt(Cierre_x0020_mensual_x0020_redes)+1);
    //  console.log("a")
    }

    var today = new Date();
    let dateFi=today.getFullYear()+"-"+obtenerMes+"-01";
    return dateFi;
  }

  const selecMaxDate=()=>{
    let obtenerMes="";
    if(parseInt(Cierre_x0020_mensual_x0020_redes)<10){
      obtenerMes="0"+(parseInt(Cierre_x0020_mensual_x0020_redes)+1);
    }else{
      obtenerMes=(parseInt(Cierre_x0020_mensual_x0020_redes)+1);
      console.log("a")
    }
    var today = new Date();
    let lastday=new Date(today.getFullYear(), (parseInt(Cierre_x0020_mensual_x0020_redes)+1), 0).getDate()
    //console.log(lastday)
    let dateFi=today.getFullYear()+"-"+obtenerMes+"-"+lastday;
    return dateFi
  }
  
  return (
    <div className={styles.FormPrinci} data-testid="FormPrinci">
      <h2>Agregar evidencia para {selecRegio()} en {selecMonth()}</h2>
      <p>En 2023 todos los productos deben tener ajustes razonables en la comunicación para el enfoque pluralista y diferencial (lengua señas, vídeos subtitulados, notas internas que exalten derechos de las poblaciones y logros del SENA con las poblaciones vulnerables).</p><p><b className="text-danger">*</b>Los campos con asterisco son obligatorios</p>
      <form className="needs-validation was-validated bordeFor animate__animated animate__fadeIn"
      onSubmit={handleSubmit}>
        <ContLabel nombre={"Alcance del producto"} nombrefor="selectAlcance" margin={4} obligatorio={true}>
          <select id="selectAlcance" className="form-select" name="Alcance" onChange={e => handleChange(e)} required>
            {
              alcanceComu.map((item, index) => <option key={item.value} >{item.label}</option>)
            }
          </select>
          <small id="emailHelp" className="form-text text-muted">
          Seleccione de la lista, si el alcance del producto es de comunicación interna o externa
          </small>
        </ContLabel>
        {/*<ContLabel nombre={"Nombre actividad"} nombrefor="nombreActi" margin={4} obligatorio={true}>
          <input
            type="text"
            className="form-control"
            id="nombreActi"
            placeholder="nombre de la actividad"
            onChange={(e) => handleChange(e)}
            name="Title"
            minLength="4"
            maxLength="50"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            Nombre de la actividad es obligatoio
          </small>
          </ContLabel>*/}
        <ContLabel nombre={"Tipo de producto"} nombrefor="selectEvi" margin={4} obligatorio={true}>
          <select id="selectEvi" className="form-select"  name="Tipo_x0020_Evidencia"  onChange={e => handleChange(e)} required disabled={alcance===""? true:false}>
            { alcance && alcance==="Comunicación Externa"?
              Regional==="15" ? dataImpactos.map((item, index) => <option key={item.value} value={item.value}>{item.label}</option>):
              dataSelec.map((item, index) => <option key={item.value} value={item.value}>{item.label}</option>):
              dataSelec2.map((item, index) => <option key={item.value} value={item.value}>{item.label}</option>)
            }
          </select>
          <small id="emailHelp" className="form-text text-muted">
          De acuerdo al alcance del ítem anterior, seleccione el tipo de producto que va a reportar 
          </small>
        </ContLabel>
        {eviden && retornaNuevoCon(eviden, checkdiferen, handleChekRedes,hanldleOnchange)}
        <ContLabel nombre={"Descripción u observación"} nombrefor="decrip" margin={4}>
          <textarea rows="3"
            type="text"
            className="form-control"
            id="decrip"
            placeholder="Descripción de la evidencia"
            name="Descripci_x00f3_n"
            maxLength="250"
            onChange={e => handleChange(e)}
          />
          <small id="emailHelp" className="form-text text-muted">
           Realice una descripción del producto a reportar ( Máx. 250 caracteres)
          </small>
        </ContLabel>
        <ContLabel nombre={"Enlace"} nombrefor="linkacti" margin={4} obligatorio={true}>
          <textarea
            type="text"
            className="form-control"
            id="linkacti"
            placeholder="https://..."
            name="link_evidencia"
            onChange={e => handleChange(e)}
            ref={refTextArea}
            required
          />
          { validaText ? "":<div className="text-danger">Debe ser un enlace valido, empezar por http o https, no tener espacios</div>}
          <small id="emailHelp" className="form-text text-muted" >
          El enlace de la evidencia es obligatorio, debe ser un enlace válido y no deberá acortarse, la herramienta no le permitirá avanzar si el link que registra ya existe en reportes anteriores. 
          </small>
        </ContLabel>
        <ContLabel nombre={"Fecha de la evidencia"} nombrefor="fechaEvi" margin={4} obligatorio={true}>
          <input type="date" className="form-control-file" id="fechaEvi" 
            name="Fecha_x0020_de_x0020_la_x0020_ev"
            min={selectMindate()}
            max={selecMaxDate()}
            onChange={e => handleChange(e)} required/>
            <small id="emailHelp" className="form-text text-muted" >&nbsp; &nbsp; &nbsp;
            Relacione la fecha en la que realizó la actividad.
          </small>
        </ContLabel>
        <button type="submit"  className={styles.mrd+" btn btn-success"} >
          Guardar evidencia
        </button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancelar
        </button>
      </form>
    </div>
  )
};

FormPrinci.propTypes = {};

FormPrinci.defaultProps = {};

export default FormPrinci;
