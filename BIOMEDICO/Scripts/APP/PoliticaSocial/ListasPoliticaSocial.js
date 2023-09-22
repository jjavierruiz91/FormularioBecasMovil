

var TablaPoliticaSocial = [];
$(document).ready(function () {

    RenderTable('datatable-politicasocial', [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], null, {
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
                filename: "PoliticaSocial",
                titleAttr: 'Excel',
            },
            {
                extend: 'pdfHtml5',
                text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> PDF ",
                filename: "PoliticaSocial",
                titleAttr: 'Pdf',
            },

        ]
    });


    TablaPoliticaSocial = $('#datatable-politicasocial').DataTable();
    Get_Data(CargarTabla, '/PoliticaSocial/GetListPoliticaSocial')

});
var Arraycitasglobal = [];
function CargarTabla(data) {
    TablaPoliticaSocial.clear().draw();
    let PoliticaSocialsport = data.objeto;
    Arraycitasglobal = PoliticaSocialsport;
    console.log(PoliticaSocialsport);
    $.each(PoliticaSocialsport, function (index, item) {
       
            TablaPoliticaSocial.row.add([
                /* item.IdCitasPasaporte,*/
                item.TipoDocumento,
                item.NumeroDocumento,
                item.NombresPolitica,
                item.ApellidosPolitica,
                item.FechaNacimiento == undefined ? '' : JSONDateconverter(item.FechaNacimiento),
                item.EdadPolitica,                
                item.SexoNacimiento,
                item.IdentidadGenero,
                item.OrientacionSexual,
                item.Discapacidad,
                item.GrupoEtnico,
                item.VictimaConflictoArmado,
                item.PoblacionPriorizada,
                item.CorreoElectronico,
                item.TelefonoContacto,
                item.Municipios,
                item.Zona,
                item.NivelEscolaridad,
                item.Profesion,
                item.AmbienteLudico,
                item.AmbienteLudicoExpresa,
                item.AmbienteLudicoCorporal,
                item.FechaRegistro == undefined ? '' : JSONDateconverter(item.FechaRegistro),


                '<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdPoliticaSocial + ')" ></i>&ensp;' +
                '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardPoliticaSocial(' + item.IdPoliticaSocial + ')"></i>&ensp;' +
                '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdPoliticaSocial + ')" ></i>&ensp;'
            ]).draw(false);

            var Discapacidad = TablaPoliticaSocial.column(9);
            var GrupoEtnico = TablaPoliticaSocial.column(10);
            var VictimaConflictoArmado = TablaPoliticaSocial.column(11);
            var PoblacionPriorizada = TablaPoliticaSocial.column(12);
            var CorreoElectronico = TablaPoliticaSocial.column(13);
            var TelefonoContacto = TablaPoliticaSocial.column(14);
            var Municipios = TablaPoliticaSocial.column(15);
            var Zona = TablaPoliticaSocial.column(16);
            var NivelEscolaridad = TablaPoliticaSocial.column(17);
            var Profesion = TablaPoliticaSocial.column(18);
            var AmbienteLudico = TablaPoliticaSocial.column(19);
            var AmbienteLudicoExpresa = TablaPoliticaSocial.column(20);
            var AmbienteLudicoCorporal = TablaPoliticaSocial.column(21);
            var FechaRegistro = TablaPoliticaSocial.column(22);

        
        Discapacidad.visible(false);
         GrupoEtnico.visible(false);
          VictimaConflictoArmado.visible(false);
          PoblacionPriorizada.visible(false);
          CorreoElectronico.visible(false);
          TelefonoContacto.visible(false);
          Municipios.visible(false);
          Zona.visible(false);
          NivelEscolaridad.visible(false);
          Profesion.visible(false);
          AmbienteLudico.visible(false);
          AmbienteLudicoExpresa.visible(false);
          AmbienteLudicoCorporal.visible(false);
          FechaRegistro.visible(false);

        
        
    });
}







function ActualizardPoliticaSocial(idCitasPasport) {
    window.location.href = '../CitasPasaporte/Agregar?IdCitasPasportReg=' + idCitasPasport +'&IsUpdate=true';

}


function DetalleData(idCitasPasport) {
    window.location.href = '../CitasPasaporte/Agregar?IdCitasPasportReg=' + idCitasPasport + "&Viewdetail=SI";

}
function ActualizarEstadoTramitados(idCitasPasport) {
    swal({
        title: "Atención",
        text: "¿Estas seguro de tramitar la cita ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {
                swal.close()
                Get_Data(RecargarTabla, '/CitasPasaporte/ActualizarEstadoTramitado?IdCitaPasaporte=' + idCitasPasport);
            }
            else {
                swal.close()
            }
        });
}



function ActualizarCitasPasapor(idCitasPasport) {
    swal({
        title: "Atención",
        text: "¿Estas seguro de actualizar la cita ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {
                swal.close()
                Get_Data(RecargarTabla, '/CitasPasaporte/EditarCitasPasaporte?IdCitaPasaporte=' + idCitasPasport);
            }
            else {
                swal.close()
            }
        });
}

function RecargarTabla() {
    Get_Data(CargarTabla, '/PoliticaSocial/GetListPoliticaSocial')
}