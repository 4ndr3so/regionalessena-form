import { useEffect } from "react";
import { createListItem } from "../api/apiRest";
const initialState = {
    
         "Title": "" ,
         "Alcance": "" ,
         "CierreMesualRedes_Red_social": "" ,
         "CierreMesualRedes_nuevos_seguido": "" ,
         "Cierre_x0020_mensual_x0020_redes": "" ,
         "Descripci_x00f3_n": "" ,
         "Enfoque_x0020_diferencial": "" ,
         "hash_link": "" ,
        
           "PublishingPageImage":
               ""
        ,
         "link_evidencia": "" ,
         "numero_x0020_Impactos": "" ,
         "PQRS_contestadas": "" ,
         "PQRS_contestados_bandejaEntrada": "" ,
         "PQRS_pregunta": "" ,
         "PQRS_preguntas_bandeja_entrada": "" ,
         "PQRS_Sin_contestar_bandeja_entra": "" ,
         "PQRS_sin_contestar": "" ,
         "PQRS_temas": "" ,
         "Producto_audiovisual_PA": "" ,
         "S_F_T_alcance": "" ,
         "S_F_T_comentarios": "" ,
         "S_F_T_compartidas": "" ,
         "S_F_T_conectados": "" ,
         "S_F_T_interacciones": "" ,
         "S_F_T_Lenguaje_sennas": "" ,
         "Tipo_x0020_Evidencia": "" ,
         "Regional": "4" ,        
         "Fecha_x0020_de_x0020_la_x0020_ev":"",
         "tipo_enfoqueDi":""   
        
    
}
const types={
    fetch_data:'FETCH_DATA',
    change_data:'CHANGE_DATA'
}

const StoreReducer = (state, action) => {
    switch (action.type) {
        case types.fetch_data:             
                  return{
                    ...state}
        
            break;
        case types.change_data:
           // console.debug("change data")
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
            break;
        default:
            break;
    }

}

export { initialState,types }
export default StoreReducer;