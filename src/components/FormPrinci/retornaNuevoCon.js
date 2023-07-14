import CampoTexto from "../CampoTexto/CampoTexto";
import CierreRedes from "../CierreRedes/CierreRedes";
import ContNuevo from "../ContNuevo/ContNuevo";
import FormRedes from "../FormRedes/FormRedes";
import Pqrs from "../Pqrs/Pqrs";
import Seleccionable from "../Seleccionable/Seleccionable";
import ContLabel from "./ContLabel";
import propForms from "./propiedadesForm";


const retornaNuevoCon = (valor, checkdiferen, handleChekRedes,hanldleOnchange) => {
    const { tipoAudiovisual, dataSelec,tacticas,multiplataforma } = propForms;
    //depende del archivo de propiedades form buscar como optimizar
    //console.log(valor)
    let retorNo = "";
    switch (valor) {
      case "SENA Comunica Multiplataforma":
        retorNo = <Seleccionable opciones={multiplataforma} texto={"SENA Comunica Multiplataforma"} mensajeDes={"Seleccione el producto audiovisual Multiplataforma que va a reportar"} hanldleOnchange={hanldleOnchange} iden={1} namePa={"tipo_enfoqueDi"}></Seleccionable>;
        break;
      case "Tácticas en vivo por redes sociales":
        retorNo = <Seleccionable opciones={tacticas} texto={"Tácticas en vivo por redes sociales"} mensajeDes={"Seleccione la red social"} hanldleOnchange={hanldleOnchange} iden={1} namePa={"Producto_audiovisual_PA"}></Seleccionable>;
        break;
      case "Streaming live": case "Facebook": case "Twitter":
        retorNo = <FormRedes enfoque={checkdiferen} handleChekRedes={handleChekRedes} hanldleOnchange={hanldleOnchange}></FormRedes>
        break;
      case "Alcance digital en redes sociales":
        retorNo = <CierreRedes hanldleOnchange={hanldleOnchange}></CierreRedes>
        break;
      case "Impactos Noticias SENA":
          retorNo = <>
            <ContLabel nombre={"Impactos Noticias SENA"} nombrefor="inputInter" margin={2} >   
            <input type="number" className="form-control" id="inputInter" placeholder="0" name={"numero_x0020_Impactos"} onChange={(e)=>hanldleOnchange(e)} min="0" required/>
          </ContLabel>  
          <small id="emailHelp" className="form-text text-muted">
          Diligencie el dato numérico 
            </small>   
          </>
          break;
      default:
        break;
    }
    return (retorNo !== "" ? <ContNuevo>
      {retorNo}
    </ContNuevo> : "")
  }
  export default retornaNuevoCon;