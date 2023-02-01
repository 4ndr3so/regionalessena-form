/// Define a namespace for the custom rendering code
var customJSLinkRendering = customJSLinkRendering || {}; 

// Define a function that declare the custom rendering rules for the target list view
customJSLinkRendering.CustomizeFieldRendering = function () {  
    
    // Define a custom object to configure the rendering template overrides
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};
    customRenderingOverride.Templates.Fields = 
    { 
        // Declare the custom rendering function for the 'View' of field 'Color'
        'link_directo': { 
            'View': customJSLinkRendering.RenderLinkFilenameField }
        
    }; 
    //customRenderingOverride.OnPostRender = HighlightProductRows;
    

    //console.log("entra")
    // Register the custom rendering template
    //SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride); 
    SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);     
    }); 
}; 

function HighlightProductRows(ctx) {  
    var statusColors = {  
        'nuevo': 'rgb(241, 241, 241)',  
        'Usado': '#FFD800',  
        'Dañado': '#01DF3A'  
    };  
  
    var rows = ctx.ListData.Row;  
   // console.log(rows)
   // console.log(ctx)
    for (var i = 27; i < rows.length; i++) { 
        if(i%2==0){
            //var status = rows[i]["kukv"];  
            var rowId = GenerateIIDForListItem(ctx, rows[i]);  
            var row = document.getElementById(rowId);  
            row.style.backgroundColor = statusColors['nuevo'];
        }
          
    }  
} 

// Declare the custom rendering function for the 'View' of field 'Color'
customJSLinkRendering.RenderTitleLinkField = function (context)  
{ 
    var value = context.CurrentItem.LinkTitle; 
    //console.log("entra 1");

    //console.log(context.CurrentItem);
    // Render the output for the 'Color' field
    return "<div><a></a>link al documento</div>"; 
}; 

customJSLinkRendering.RenderTitleField = function (context) {
    //console.log("entra 2");
//return "<div style='font-weight:bold;color:red'>" + context.CurrentItem.Title + "</div>";
}

customJSLinkRendering.RenderLinkFilenameField = function (context) {
     
     console.log(context.CurrentItem);
return '<a href="'+context.CurrentItem.link_evidencia+'" target="_blank" title="link evidencia">Ver</a>';
}

customJSLinkRendering.RenderTemaField= function (context) {
   var value = context.CurrentItem.Title; 
   // console.log(context.CurrentItem);
return "<div style=''>" + value + "</div>";
}

// Invoke the custom rendering function
customJSLinkRendering.CustomizeFieldRendering();