const initialState = {
    
         "Title": "Evidencia Prueba" ,
         "Alcance": "" ,
         "Cierre_x0020_mensual_x0020_redes": "500" ,
         "CierreMesualRedes_nuevos_seguido": "6000" ,
         "CierreMesualRedes_Red_social": "6000" ,
         "Descripci_x00f3_n": "Descripción de prueba" ,
         "Enfoque_x0020_diferencial": "true" ,
         "hash_link": "23234aqw232dw2a23daqwa" ,
        
           "PublishingPageImage":
               "<img alt='abc image' src='/sites/comunica/SiteCollectionImages/default/06-boton.png'>"
        ,
         "link_evidencia": "https://sena4.sharepoint.com/sites/nube20/ImagenesClasificados/Forms/DispForm.aspx?ID=929&Source=https%3A%2F%2Fsena4%2Esharepoint%2Ecom%2Fsites%2Fnube20%2FImagenesClasificados%2FForms%2FThumbnails%2Easpx&ContentTypeId=0x0101009148F5A04DDD49CBA7127AADA5FB792B00AADE34325A8B49CDA8BB4DB53328F214008C362BFFB914D840878DC75C2FE304C6" ,
         "numero_x0020_Impactos": "200" ,
         "PQRS_contestadas": "200" ,
         "PQRS_contestados_bandejaEntrada": "200" ,
         "PQRS_pregunta": "200" ,
         "PQRS_preguntas_bandeja_entrada": "200" ,
         "PQRS_Sin_contestar_bandeja_entra": "200" ,
         "PQRS_sin_contestar": "200" ,
         "PQRS_temas": "" ,
         "Producto_audiovisual_PA": "SENA transforma" ,
         "S_F_T_alcance": "200" ,
         "S_F_T_comentarios": "200" ,
         "S_F_T_compartidas": "200" ,
         "S_F_T_conectados": "200" ,
         "S_F_T_interacciones": "200" ,
         "S_F_T_Lenguaje_sennas": "true" ,
         "Tipo_x0020_Evidencia": "" ,
         "Regional": 4 ,        
         "Fecha_x0020_de_x0020_la_x0020_ev":"2020-10-05T15:22:00Z",
         "tipo_enfoqueDi":""   
        
    
}
const types={
    fetch_data:'FETCH_DATA',
    change_data:'CHANGE_DATA'
}

const StoreReducer = (state, action) => {
    switch (action.type) {
        case types.fetch_data:

            break;
        case types.change_data:
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