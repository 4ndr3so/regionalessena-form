import CampoTexto from "../CampoTexto/CampoTexto";
import CierreRedes from "../CierreRedes/CierreRedes";
import ContNuevo from "../ContNuevo/ContNuevo";
import FormRedes from "../FormRedes/FormRedes";
import Pqrs from "../Pqrs/Pqrs";
import Seleccionable from "../Seleccionable/Seleccionable";
import propForms from "./propiedadesForm";


const retornaNuevoCon = (valor, checkdiferen, handleChekRedes,hanldleOnchange) => {
    const { tipoAudiovisual, dataSelec,tacticas,multiplataforma } = propForms;
    //depende del archivo de propiedades form buscar como optimizar
    //console.log(valor)
    let retorNo = "";
    switch (valor) {
      case "SENA Comunica Multiplataforma":
        retorNo = <Seleccionable opciones={multiplataforma} texto={dataSelec[12].label} mensajeDes={"Seleccione el producto audiovisual Multiplataforma que va a reportar"} hanldleOnchange={hanldleOnchange} iden={1} namePa={"tipo_enfoqueDi"}></Seleccionable>;
        break;
      case "Tácticas en vivo por redes sociales":
        retorNo = <Seleccionable opciones={tacticas} texto={dataSelec[13].label} mensajeDes={"Seleccione la red social"} hanldleOnchange={hanldleOnchange} iden={1} namePa={"Producto_audiovisual_PA"}></Seleccionable>;
        break;
      case "Streaming live": case "Facebook": case "Twitter":
        retorNo = <FormRedes enfoque={checkdiferen} handleChekRedes={handleChekRedes} hanldleOnchange={hanldleOnchange}></FormRedes>
        break;
      case "Alcance digital en redes sociales":
        retorNo = <CierreRedes hanldleOnchange={hanldleOnchange}></CierreRedes>
        break;
      default:
        break;
    }
    return (retorNo !== "" ? <ContNuevo>
      {retorNo}
    </ContNuevo> : "")
  }
  export default retornaNuevoCon;