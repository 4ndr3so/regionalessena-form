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



const FormPrinci = ({ handleFetch }) => {
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
  const { alcanceComu, dataSelec, enfoqueDife } = propForms;
  const [eviden, setEvidencia] = useState(dataSelec[0].value)
  const [validaText, setValidaText] = useState(true)
  const [checkdiferen, setCheckdiferen] = useState(false);
 
 

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
      <p>Descripción ...</p>
      <form className="needs-validation was-validated bordeFor animate__animated animate__fadeIn"
      onSubmit={handleSubmit}>
        <ContLabel nombre={"Nombre actividad"} nombrefor="nombreActi" margin={4} obligatorio={true}>
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
        </ContLabel>
        <ContLabel nombre={"Tipo evidencia"} nombrefor="selectEvi" margin={4} obligatorio={true}>
          <select id="selectEvi" className="form-select"  name="Tipo_x0020_Evidencia"  onChange={e => handleChange(e)} required>
            {
              dataSelec.map((item, index) => <option key={item.value} value={item.value}>{item.label}</option>)
            }
          </select>
          <small id="emailHelp" className="form-text text-muted">
            Tipo de evidencia es obligatorio, seleccionelo de la lista
          </small>
        </ContLabel>
        {eviden && retornaNuevoCon(eviden, checkdiferen, handleChekRedes,hanldleOnchange)}
        <ContLabel nombre={"Alcance"} nombrefor="selectAlcance" margin={4} obligatorio={true}>
          <select id="selectAlcance" className="form-select" name="Alcance" onChange={e => handleChange(e)} required>
            {
              alcanceComu.map((item, index) => <option key={item.value} >{item.label}</option>)
            }
          </select>
          <small id="emailHelp" className="form-text text-muted">
           Alcance es obligatorio, seleccionelo de la lista
          </small>
        </ContLabel>
        <ContLabel nombre={"Descripción u observación"} nombrefor="decrip" margin={4}>
          <textarea rows="3"
            type="text"
            className="form-control"
            id="decrip"
            placeholder="Descripción de la evidencia"
            name="Descripci_x00f3_n"
            onChange={e => handleChange(e)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Agregue una descipción u observaciones si lo considera necesario
          </small>
        </ContLabel>
        <ContLabel nombre={"Link"} nombrefor="linkacti" margin={4} obligatorio={true}>
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
          { validaText ? "":<div className="text-danger">Debe ser un link valido, empezar por http o https, no tener espacios</div>}
          <small id="emailHelp" className="form-text text-muted" >
            EL enlace de la evidencia es obligatorio, debe ser un enlace valido 
          </small>
        </ContLabel>
        {/*<div className="form-group mb-4 row">
        <label htmlFor="imagenUpload" className="col-sm-2 col-form-label">Imagen de la evidencia</label>
        <div className="col-sm-10">
          <label htmlFor="imagenUpload" class="btn btn-primary">Subir imagen</label>
          <input type="file" style={{visibility:"hidden"}} id="imagenUpload" />
            </div>
            </div>*/
        }
        <ContLabel nombre={"Fecha de la evidencia"} nombrefor="fechaEvi" margin={4} obligatorio={true}>
          <input type="date" className="form-control-file" id="fechaEvi" 
            name="Fecha_x0020_de_x0020_la_x0020_ev"
            min={selectMindate()}
            max={selecMaxDate()}
            onChange={e => handleChange(e)} required/>
            <small id="emailHelp" className="form-text text-muted" >
            La fecha es obligatoria, escriba la fecha de la actividad. La fecha del dia que subio la evidencia el sistema la toma
          </small>
        </ContLabel>
        <ContLabel nombre={"Enfoque Diferencial"} nombrefor="check1" margin={4}>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check1"
              defaultChecked={checkdiferen}
              name="Enfoque_x0020_diferencial"
              onChange={(e) => handleChekRedes(e)}
            />
            <small id="emailHelp" className="form-text text-muted" >
            Seleccione si la actividad tuvo enfoque diferencial
          </small>
          </div>
        </ContLabel>
        {
          checkdiferen ? <Seleccionable opciones={enfoqueDife}  texto={"Enfoque diferencial"} hanldleOnchange={hanldleOnchange} iden={2} namePa={"tipo_enfoqueDi"}></Seleccionable> : ""
        }
        <button type="submit"  className={styles.mrd+" btn btn-success"} >
          Guardar evidencia
        </button>
        <button type="submit" className="btn btn-danger" >
          Cancelar
        </button>
      </form>
    </div>
  )
};

FormPrinci.propTypes = {};

FormPrinci.defaultProps = {};

export default FormPrinci;
