﻿

var tablaAgendaExcepcionesTramites = [];
$(document).ready(function () {

    RenderTable('datatable-agendapasaporteentregado', [0, 1, 2, 3, 4, 5, 6, 7], null, {
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
                filename: "AgendaExcepciones",
                titleAttr: 'Excel',
            },
            {
                extend: 'pdfHtml5',
                text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> PDF ",
                filename: "AgendaExcepciones",
                titleAttr: 'Pdf',
            },

        ]
    });


    tablaAgendaExcepcionesEntregados = $('#datatable-agendapasaporteentregado').DataTable();
    Get_Data(CargarTabla, '/AgendaExcepciones/GetListAgendaExcepcionesEntregado')

});

function CargarTabla(data) {
    tablaAgendaExcepcionesEntregados.clear().draw();
    let AgendaExcepcionesEntregadoPass = data.objeto;
    console.log(AgendaExcepcionesEntregadoPass);
    $.each(AgendaExcepcionesEntregadoPass, function (index, item) {
        tablaAgendaExcepcionesEntregados.row.add([
            /* item.IdAgendaExcepciones,*/
            item.TipoSolicitudAgendaExcepciones,
            item.TipoDocumentoAgendaExcepciones,
            item.NumeroDocumentoAgendaExcepciones,
            item.EstadoAgendaExcepciones,
            item.NombresAgendaExcepciones,

            item.ApellidosAgendaExcepciones,
            item.TipoPasaporteAgendaExcepciones,
            item.FechaAgendaExcepciones == undefined ? '' : JSONDateconverter(item.FechaAgendaExcepciones),



            /* '<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdAgendaExcepciones + ')" ></i>&ensp;' +*/
            /*'<i class="btn btn-warning btn-group-sm fa fa-medkit" title="Tramitarcita" onclick="CambiarEstado(' + item.IdAgendaExcepciones + ')" ></i>&ensp;'*/
            ////'<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardEportistaData(' + item.IdAgendaExcepciones + ')"></i>&ensp;' +
            //'<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdAgendaExcepciones + ')" ></i>&ensp;' +
            //'<i class="btn btn-primary btn-group-sm icon-calendar52" id="edit_ActEco_' + index + '" title="RegistrarCita" style="fontsize:90px !important" onclick="RegistarCitasMEdicasData(' + item.IdAgendaExcepciones + ')" ></i>&ensp;'
        ]).draw(false);





    });
}


function ActualizardEportistaData(IdCitaAgendaExcepciones) {
    window.location.href = '../AgendaExcepciones/Agregar?IdCitasPasportReg=' + IdCitaAgendaExcepciones + '&IsUpdate=true';

}


function DetalleData(IdCitaAgendaExcepciones) {
    window.location.href = '../AgendaExcepciones/Agregar?IdCitasPasportReg=' + IdCitaAgendaExcepciones + "&Viewdetail=SI";

}
function CambiarEstado(IdCitaAgendaExcepciones) {
    swal({
        title: "Atención",
        text: "¿Estas seguro de actualizar el estado de la cita de pasaporte?",
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
                Get_Data(RecargarTabla, '/AgendaExcepciones/ActualizarEstadoTramitada?IdCitaAgendaExcepciones=' + IdCitaAgendaExcepciones);
            }
            else {
                swal.close()
            }
        });
}


function Eliminar(IdCitaAgendaExcepciones) {
    swal({
        title: "Atención",
        text: "¿Estas seguro de eliminar este registro?",
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
                Get_Data(RecargarTabla, '/AgendaExcepciones/Eliminar?IdCitasDepor=' + IdCitaAgendaExcepciones);
            }
            else {
                swal.close()
            }
        });
}

function RecargarTabla() {
    Get_Data(CargarTabla, '/AgendaExcepciones/GetListAgendaExcepcionesEntregado')
}