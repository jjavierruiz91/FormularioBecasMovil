

var TablaBecasMovil = [];
$(document).ready(function () {

    RenderTable('datatable-becasmovil', [0, 1, 2, 3, 4, 5,6], null, {
        "paging": true,
        "ordering": false,
        "info": true,
        "searching": true,

        "dom": '<"top"flB>rt<"bottom"ip><"clear">',
        //dom: 'frtip',

        buttons: [
            {
                extend: 'excelHtml5',
                text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> Excel ",
                filename: "BecasMovil",
                titleAttr: 'Excel',
            },
            {
                extend: 'pdfHtml5',
                text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> PDF ",
                filename: "BecasMovil",
                titleAttr: 'Pdf',
            },

        ]
    });


    TablaBecasMovil = $('#datatable-becasmovil').DataTable();
    Get_Data(CargarTabla, '/BecasMovil/GetListBecasMovil')

});
var Arraycitasglobal = [];
function CargarTabla(data) {
    TablaBecasMovil.clear().draw();
    let BecasMovilSport = data.objeto;
    Arraycitasglobal = BecasMovilSport;
    console.log(BecasMovilSport);
    $.each(BecasMovilSport, function (index, item) {
       
        TablaBecasMovil.row.add([
                item.TipoDocumento,
                item.NumeroDocumento,
                item.NombreBecasMovil,
                item.ApellidosBecasMovil,               
                item.CorreoElectronico,                
                item.NumeroContacto,
                item.FechaRegistro == undefined ? '' : JSONDateconverter(item.FechaRegistro),


                '<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdPoliticaSocial + ')" ></i>&ensp;' +
                '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardPoliticaSocial(' + item.IdPoliticaSocial + ')"></i>&ensp;' +
                '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdPoliticaSocial + ')" ></i>&ensp;'
            ]).draw(false);

        //    var Discapacidad = TablaBecasMovil.column(9);
        //    var GrupoEtnico = TablaBecasMovil.column(10);
        //    var VictimaConflictoArmado = TablaBecasMovil.column(11);
        //    var PoblacionPriorizada = TablaBecasMovil.column(12);
        //    var CorreoElectronico = TablaBecasMovil.column(13);
        //    var TelefonoContacto = TablaBecasMovil.column(14);
        //    var Municipios = TablaBecasMovil.column(15);
        //    var Zona = TablaBecasMovil.column(16);
        //    var NivelEscolaridad = TablaBecasMovil.column(17);
        //    var Profesion = TablaBecasMovil.column(18);
        //    var AmbienteLudico = TablaBecasMovil.column(19);
        //    var AmbienteLudicoExpresa = TablaBecasMovil.column(20);
        //    var AmbienteLudicoCorporal = TablaBecasMovil.column(21);
        //    var FechaRegistro = TablaBecasMovil.column(22);

        
        //Discapacidad.visible(false);
        // GrupoEtnico.visible(false);
        //  VictimaConflictoArmado.visible(false);
        //  PoblacionPriorizada.visible(false);
        //  CorreoElectronico.visible(false);
        //  TelefonoContacto.visible(false);
        //  Municipios.visible(false);
        //  Zona.visible(false);
        //  NivelEscolaridad.visible(false);
        //  Profesion.visible(false);
        //  AmbienteLudico.visible(false);
        //  AmbienteLudicoExpresa.visible(false);
        //  AmbienteLudicoCorporal.visible(false);
        //  FechaRegistro.visible(false);

        
        
    });
}









function RecargarTabla() {
    Get_Data(CargarTabla, '/BecasMovil/GetListBecasMovil')
}