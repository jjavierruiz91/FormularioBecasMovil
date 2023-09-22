

var tablaCitasPasaporte = [];
$(document).ready(function () {

    RenderTable('datatable-pasaporte', [0, 1, 2, 3, 4, 5,6,7,8,9], null, {
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
                filename: "CitasPasaporte",
                titleAttr: 'Excel',
            },
            {
                extend: 'pdfHtml5',
                text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> PDF ",
                filename: "CitasPasaporte",
                titleAttr: 'Pdf',
            },

        ]
    });


    tablaCitasPasaporte = $('#datatable-pasaporte').DataTable();
    Get_Data(CargarTabla, '/CitasPasaporte/GetListCitasPasaporte')

});
var Arraycitasglobal = [];
function CargarTabla(data) {
    tablaCitasPasaporte.clear().draw();
    let CitasPasaport = data.objeto;
    Arraycitasglobal = CitasPasaport;
    console.log(CitasPasaport);
    $.each(CitasPasaport, function (index, item) {
        if (item.Fecha != null) {
            let Fecha;
            if (item.Fecha != null) {
                Fecha = JSONDateconverter(item.Fecha);
            }
            tablaCitasPasaporte.row.add([
                /* item.IdCitasPasaporte,*/
                item.TipoSolicitudPasaporte,
                item.EstadoPasaporte,
                item.Fecha == undefined ? '' : JSONDateconverter(item.Fecha),
                item.Hora + ": " + item.Minutos,
                item.TipoDocumentoPasaporte,
                item.NumDocumentoPasaporte,
                item.NombresPasaporte,
                item.ApellidosPasaporte,
                item.TipoPasaporte,



               /* '<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdCitasPasaporte + ')" ></i>&ensp;' +*/
                '<i class="btn btn-outline-primary btn-group-sm fa fa-medkit" title="Tramitarcita" onclick="ActualizarEstadoTramitados(' + item.IdCitasPasaporte + ')" > Tramitar</i>&ensp;' 
                //'<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizarCitasPasaporte(' + item.IdCitasPasaporte + ')"></i>&ensp;' 
                //'<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdCitasPasaporte + ')" ></i>&ensp;' +
                //'<i class="btn btn-primary btn-group-sm icon-calendar52" id="edit_ActEco_' + index + '" title="RegistrarCita" style="fontsize:90px !important" onclick="RegistarCitasMEdicasData(' + item.IdCitasPasaporte + ')" ></i>&ensp;'
            ]).draw(false);



        }
        
    });
}


function ActualizardEportistaData(idCitasPasport) {
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
    Get_Data(CargarTabla, '/CitasPasaporte/GetListCitasPasaporte')
}