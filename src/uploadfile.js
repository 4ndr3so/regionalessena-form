"use strict";

jQuery(document).ready(function () {
  // Check for FileReader API (HTML5) support.
  if (!window.FileReader) {
    alert("This browser does not support the FileReader API.");
  }
  console.log("entra uno");
  SP.SOD.executeFunc("SP.js", "SP.ClientContext", function () {
    console.log("Ejecuta cliente");
    console.log(SP.ClientContext);
  });
});

//create new item

function CreateListItemWithDetails(listName, newItemTitle, success, failure) {
  //var itemType = GetItemTypeForListName(listName);
  var itemType = "SP.ListItem";
  console.log(itemType, newItemTitle);
  var item = {
    __metadata: { type: itemType },
    Title: newItemTitle,
    Tipo_x0020_de_x0020_oferta: "Venta",
    Subt_x00ed_tulo: "subtitulo 1",
    Valor: "5000",
    Imagen_x0020_Cargada:
      "<img alt='abc image' src='/sites/nube20/ImagenesClasificados/Vendo-Apartamento-en-Bogota-Suba/01-apto-suba-maria.jpg?RenditionID=6'>",
    Autor_x002d_: "63",
    Fecha_x0020_para_x0020_publicaci: "2020-10-05T15:22:00Z",
    Entradilla:
      "En conjunto cerrado, Sauces de Suba, tercer piso, magnífica oportunidad, sala comedor, 3 habitaciones, Cocina semi integral, parqueadero cubierto y depósito, listo para entregar.",
    Cuerpo:
      "En conjunto cerrado, Sauces de Suba, tercer piso, magnífica oportunidad, sala comedor, 3 habitaciones, Cocina semi integral, parqueadero cubierto y depósito, listo para entregar.",
    Direcci_x00f3_n_x0020_de_x0020_a: "	vendo-Apartamento-2",
    Tel_x00e9_fonos_x0020_de_x0020_c: "Ext. 12512",
    Estado_x0020_actual_x0020_del_x0: "Clasificado activo",
    
  };

  $.ajax({
    url:
      _spPageContextInfo.siteAbsoluteUrl +
      "/_api/web/lists/getbytitle('" +
      listName +
      "')/items",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(item),
    headers: {
      Accept: "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val(),
    },
    success: function (data) {
      console.log("realizado");
      success(data);
    },
    error: function (data) {
      console.log(data);
      failure(data);
    },
  });
}

function createListItem() {
  var deferred = $.Deferred();

  var clientContext = new SP.ClientContext(
    "https://sena4.sharepoint.com/sites/comunica/repositorio_comunicaciones"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Indicadores_regionales");

  var itemCreateInfo = new SP.ListItemCreationInformation();

  console.log(oList);
  var oListItem = oList.addItem(itemCreateInfo);
  console.log(oListItem);
  var selectedUser = SP.FieldUserValue.fromUser(
    "Christian Steven Aldana Herrera"
  );
  console.log(selectedUser);

  oListItem.set_item("Title", "Evidencia Prueba");
  oListItem.set_item("Alcance", "Comunicación Interna");
  oListItem.set_item("Cierre_x0020_mensual_x0020_redes", "500");
  oListItem.set_item("CierreMesualRedes_nuevos_seguido", "6000");
  oListItem.set_item("CierreMesualRedes_Red_social", "6000");
  oListItem.set_item("Descripci_x00f3_n", "Descripción de prueba");
  oListItem.set_item("Enfoque_x0020_diferencial", "true");
  oListItem.set_item("hash_link", "23234aqw232dw2a23daqwa");
  oListItem.set_item(
    "PublishingPageImage",
    "<img alt='abc image' src='/sites/comunica/SiteCollectionImages/default/06-boton.png'>"
  );
  oListItem.set_item("link_evidencia", "https://sena4.sharepoint.com/sites/nube20/ImagenesClasificados/Forms/DispForm.aspx?ID=929&Source=https%3A%2F%2Fsena4%2Esharepoint%2Ecom%2Fsites%2Fnube20%2FImagenesClasificados%2FForms%2FThumbnails%2Easpx&ContentTypeId=0x0101009148F5A04DDD49CBA7127AADA5FB792B00AADE34325A8B49CDA8BB4DB53328F214008C362BFFB914D840878DC75C2FE304C6");
  oListItem.set_item("numero_x0020_Impactos", "200");
  oListItem.set_item("PQRS_contestadas", "200");
  oListItem.set_item("PQRS_contestados_bandejaEntrada", "200");
  oListItem.set_item("PQRS_pregunta", "200");
  oListItem.set_item("PQRS_preguntas_bandeja_entrada", "200");
  oListItem.set_item("PQRS_Sin_contestar_bandeja_entra", "200");
  oListItem.set_item("PQRS_sin_contestar", "200");
  oListItem.set_item("PQRS_temas", "");
  oListItem.set_item("Producto_audiovisual_PA", "SENA transforma");
  oListItem.set_item("S_F_T_alcance", "200");
  oListItem.set_item("S_F_T_comentarios", "200");
  oListItem.set_item("S_F_T_compartidas", "200");
  oListItem.set_item("S_F_T_conectados", "200");
  oListItem.set_item("S_F_T_interacciones", "200");
  oListItem.set_item("S_F_T_Lenguaje_sennas", "true");
  oListItem.set_item("Tipo_x0020_Evidencia", "Productos audiovisuales");
  oListItem.set_item("Regional", 4);
  oListItem.set_item(
    "Fecha_x0020_de_x0020_la_x0020_ev",
    "2020-10-05T15:22:00Z"
  );


  oListItem.update();

  clientContext.load(oListItem);

  clientContext.executeQueryAsync(
    function (sender, args) {
      alert("Item created: " + oListItem.get_id());
      deferred.resolve(sender, args);
    },
    function (sender, args) {
      alert(
        "Request failed. " + args.get_message() + "\n" + args.get_stackTrace()
      );
      deferred.reject(sender, args);
    }
  );
  return deferred.promise();
}

function updatePublishingImage() {
  var clientContext = new SP.ClientContext(
    "https://sena4.sharepoint.com/sites/nube20"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("01_SENAClasificados");

  var oListItem = oList.getItemById(89);
  console.log(oListItem);
  oListItem.set_item(
    "Imagen_x0020_Cargada",
    "<img alt='abc image' src='/sites/nube20/ImagenesClasificados/Vendo-Apartamento-en-Bogota-Suba/01-apto-suba-maria.jpg?RenditionID=6'>"
  );

  oListItem.update();

  clientContext.executeQueryAsync(
    function (e) {
      console.log("updated image" + e);
    },
    function (e) {
      console.log("something went wrong");
      console.log(e);
    }
  );
}

// Get List Item Type metadata
function GetItemTypeForListName(name) {
  return (
    "SP.Data." +
    name.charAt(0).toUpperCase() +
    name.split(" ").join("").slice(1) +
    "ListItem"
  );
}

// Upload the file.
// You can upload files up to 2 GB with the REST API.
function uploadFile() {
  console.log("empieza carga");
  // Define the folder path for this example.
  var serverRelativeUrlToFolder = "ImagenesClasificados";

  // Get test values from the file input and text input page controls.
  var fileInput = jQuery("#fileinput");
  //var newName = jQuery('#fileinput').val();
  console.log(fileInput);
  var newName = "prueba3";

  // Get the server URL.
  var serverUrl = _spPageContextInfo.webAbsoluteUrl;

  // Initiate method calls using jQuery promises.
  // Get the local file as an array buffer.

  return new Promise((resolve, reject) => {
    var getFile = getFileBuffer();
    getFile.done(function (arrayBuffer) {
      // Add the file to the SharePoint folder.
      console.log("empieza agrega archivo");
      var addFile = addFileToFolder(arrayBuffer);
      addFile.done(function (file, status, xhr) {
        // Get the list item that corresponds to the uploaded file.
        var getItem = getListItem(file.d.ListItemAllFields.__deferred.uri);
        getItem.done(function (listItem, status, xhr) {
          // Change the display name and title of the list item.
          var changeItem = updateListItem(listItem.d.__metadata);
          changeItem.done(function (data, status, xhr) {
            alert("file uploaded and updated");
            console.log(newName,data,status,xhr,file,listItem)
            resolve("exito");
          });

          changeItem.fail(onError);
        });

        getItem.fail(onError);
      });

      addFile.fail(onError);
    });

    getFile.fail(onError);

    function onError(error) {
      console.log("fallo", error);
      alert(error.responseText);
      reject(error);
    }

    // Get the local file as an array buffer.
    function getFileBuffer() {
      console.log("entra getFile Buffer");
      var deferred = jQuery.Deferred();
      var reader = new FileReader();
      reader.onloadend = function (e) {
       // console.log(e.target.result);
        deferred.resolve(e.target.result);
      };
      reader.onerror = function (e) {
       // console.log("error getFileBuffer ", e, e.target.error);
        deferred.reject(e.target.error);
      };
      reader.readAsArrayBuffer(fileInput[0].files[0]);
      //console.log(fileInput[0].files[0]);
      return deferred.promise();
    }

    // Add the file to the file collection in the Shared Documents folder.
    function addFileToFolder(arrayBuffer) {
      // Get the file name from the file input control on the page.
    //  console.log(arrayBuffer);
      var parts = fileInput[0].value.split("\\");
      var fileName = parts[parts.length - 1];

      // Construct the endpoint.
      var fileCollectionEndpoint = String.format(
        "{0}/_api/web/getfolderbyserverrelativeurl('{1}')/Files" +
          "/add(url='{2}',overwrite=true)",
        serverUrl,
        serverRelativeUrlToFolder,
        fileName
      );

      // Send the request and return the response.
      // This call returns the SharePoint file.
      console.log("nombre addfiletofolder", fileCollectionEndpoint);
      return jQuery.ajax({
        url: fileCollectionEndpoint,
        type: "POST",
        data: arrayBuffer,
        processData: false,
        headers: {
          accept: "application/json;odata=verbose",
          "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
        },
      });
    }

    // Get the list item that corresponds to the file by calling the file's ListItemAllFields property.
    function getListItem(fileListItemUri) {
      // Send the request and return the response.
      return jQuery.ajax({
        url: fileListItemUri,
        type: "GET",
        headers: { accept: "application/json;odata=verbose" },
      });
    }

    // Change the display name and title of the list item.
    function updateListItem(itemMetadata) {
      // Define the list item changes. Use the FileLeafRef property to change the display name.
      // For simplicity, also use the name as the title.
      // The example gets the list item type from the item's metadata, but you can also get it from the
      // ListItemEntityTypeFullName property of the list.
      var body = String.format(
        "{{'__metadata':{{'type':'{0}'}},'FileLeafRef':'{1}','Title':'{2}'}}",
        itemMetadata.type,
        newName,
        newName
      );
      console.log(itemMetadata, body, newName);
      // Send the request and return the promise.
      // This call does not return response content from the server.
      return jQuery.ajax({
        url: itemMetadata.uri,
        type: "POST",
        data: body,
        headers: {
          "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
          "content-type": "application/json;odata=verbose",
          "IF-MATCH": itemMetadata.etag,
          "X-HTTP-Method": "MERGE",
        },
      });
    }
  });
}


var obtenerusuario=function(){
  var mp = new MyPeoplePicker();
  mp.init('peoplePickerDiv2', {AllowMultipleValues:false});
/*   $('#peoplePickerDiv2').on('user:changed', function() {
    // triggered when the users changed
    
    var users=mp.getUsers().map(function(u) { return u.DisplayText });
    console.log(users[0]);
  var usuario=users[0];
    var dataFormSolicitud=users[0];
  
          
      }) */
   
  function getInfo() {
    console.log(mp.getUsers()); // -> return an array of the users
    mp.getUsersID(function() {
      console.log(arguments); // -> return the User ID
        })
  }
  
  
  }
// Display error messages.

/*
,
        "Tipo_x0020_de_x0020_oferta":"Venta",
        "Subt_x00ed_tulo":"subtitulo 1",
        "Valor":"5000",
        "Imagen_x0020_Cargada":"<img alt='abc image' src='/sites/nube20/ImagenesClasificados/Vendo-Apartamento-en-Bogota-Suba/01-apto-suba-maria.jpg?RenditionID=6'>",
        "Categor_x00ed_a_x002d_":"Empleos",
        "Autor_x002d_":"Carlos Andres Orjuela Lasso",
        "Fecha_x0020_para_x0020_publicaci":"0510/2020",
        "Entradilla":"En conjunto cerrado, Sauces de Suba, tercer piso, magnífica oportunidad, sala comedor, 3 habitaciones, Cocina semi integral, parqueadero cubierto y depósito, listo para entregar.",
        "Cuerpo":"En conjunto cerrado, Sauces de Suba, tercer piso, magnífica oportunidad, sala comedor, 3 habitaciones, Cocina semi integral, parqueadero cubierto y depósito, listo para entregar.",
        "Direcci_x00f3_n_x0020_de_x0020_a":"	vendo-Apartamento-2",
        "Tel_x00e9_fonos_x0020_de_x0020_c":"Ext. 12512",
        "Estado_x0020_actual_x0020_del_x0":"Clasificado activo",

*/
