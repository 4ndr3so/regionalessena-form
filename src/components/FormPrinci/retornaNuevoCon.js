import CampoTexto from "../CampoTexto/CampoTexto";
import CierreRedes from "../CierreRedes/CierreRedes";
import ContNuevo from "../ContNuevo/ContNuevo";
import FormRedes from "../FormRedes/FormRedes";
import Pqrs from "../Pqrs/Pqrs";
import Seleccionable from "../Seleccionable/Seleccionable";
import propForms from "./propiedadesForm";


const retornaNuevoCon = (valor, checkdiferen, handleChekRedes,hanldleOnchange) => {
    const { tipoAudiovisual, dataSelec } = propForms;
    //depende del archivo de propiedades form buscar como optimizar
    //console.log(valor)
    let retorNo = "";
    switch (valor) {
      case "Productos audiovisuales":
        retorNo = <Seleccionable opciones={tipoAudiovisual} texto={dataSelec[1].label} hanldleOnchange={hanldleOnchange} iden={1} namePa={"Producto_audiovisual_PA"}></Seleccionable>;
        break;
      case "Streaming live": case "Facebook": case "Twitter":
        retorNo = <FormRedes enfoque={checkdiferen} handleChekRedes={handleChekRedes} hanldleOnchange={hanldleOnchange}></FormRedes>
        break;
      case "PQRS":
        retorNo = <Pqrs hanldleOnchange={hanldleOnchange}></Pqrs>
        break;
      case "Cierre mensual de redes":
        retorNo = <CierreRedes hanldleOnchange={hanldleOnchange}></CierreRedes>
        break;
      case "Impactos en medios de comunicación regionales (Medios tradicionales, digitales y redes)":
        retorNo = <CampoTexto text={"Numero de impactos"} hanldleOnchange={hanldleOnchange} iden={1} nombreCampo={"numero_x0020_Impactos"}></CampoTexto>
        break;
      default:
        break;
    }
    return (retorNo !== "" ? <ContNuevo>
      {retorNo}
    </ContNuevo> : "")
  }
  export default retornaNuevoCon;