var ObjAgendaDeportiva = {
    CitasDeport: {}//{objetos} llaves y [array] corchetes

}

var ListTestTemporal = [];//--array
var TestCitasDepor = {
    HoraIniciocitas: $('#HoraIniciocitas').val(),
    HoraFinCitas: $('#HoraFinCitas').val(),
    FechaCitas: $('#FechaCitas').val(),
    NumCitasAgenda: $('#NumCitasAgenda').val(),
   
}

//var validadorFormDeportista = [];
var IsUpdate = false;
var idAgendarData = 0;
var tablaTestTemporal = [];
var VerDetalles = 'NO';

$(document).ready(function () {//FUNCION INICIAL;
    idAgendarData = getQueryVariable('IdCitasReg');
    VerDetalles = getQueryVariable('Viewdetail');
    RenderTable('datatable-Test', [0, 1, 2], null, {
        "paging": true,
        "ordering": false,
        "info": true,
        "searching": true,
    });

    tablaTestTemporal = $('#datatable-Test').DataTable();

    if (idAgendarData > 0) {
        IsUpdate = true;
    }
    if (VerDetalles == "SI") {
        $('#SaveAgendaCita').html('Atras')
        Get_Data(LlenarCampos, '/AgendarCitas/GetAgendaCitasDeportivaById?IdAgendaDepor=' + idAgendarData);
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveAgendaCita').html('Actualizar')
        Get_Data(LlenarCampos, '/AgendarCitas/GetAgendaCitasDeportivaById?IdAgendaDepor=' + idAgendarData);
    }

});




function LlenarCampos(data) {

    $('#IdAgendarCitas').val(data.objeto.IdAgendarCitas);
    $('#CedEspecialistaCitas').val(data.objeto.CedEspecialistaCitas);
    $('#NombrEspecilistaCitas').val(data.objeto.NombrEspecilistaCitas);
    $('#NotificacionCampoCitas').val(data.objeto.NotificacionCampoCitas);
    $('#HoraIniciocitas').val(JSONDateconverter(data.objeto.HoraIniciocitas));
    $('#HoraFinCitas').val(JSONDateconverter(data.objeto.HoraFinCitas));
    $('#FechaCitas').val(JSONDateconverter(data.objeto.FechaCitas));
    $('#NumCitasAgenda').val(data.objeto.NumCitasAgenda);
    $('#ObservacionesCitasMedicas').val(data.objeto.ObservacionesCitasMedicas);
  

    CargarInfoinicial();
}

function getQueryVariable(variable) {//saca los valores de la uRL
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return 0;
}

function Atras() {
    window.history.back();
}

function Createobj() {
    document.getElementById("SaveAgendaCita").disabled = true;

    
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        var test = $('#NumIde').val();
        var IdAgendarCitas = 0;
        if (IsUpdate) {
            IdAgendarCitas = idAgendarData;
        }
        ObjAgendaDeportiva = {
            CitasDeport: {

                IdAgendarCitas: IdAgendarCitas,
                CedEspecialistaCitas: $('#CedEspecialistaCitas').val(),
                NombrEspecilistaCitas: $('#NombrEspecilistaCitas').val(),
                NotificacionCampoCitas: $('#NotificacionCampoCitas').val(),
                HoraIniciocitas: $('#HoraIniciocitas').val(),
                HoraFinCitas: $('#HoraFinCitas').val(),
                FechaInit: $('#FechaCitas').val().split('a')[0],
                FechaFin: $('#FechaCitas').val().split('a')[1],
                //FechaCitas: $('#FechaCitas').val(),
                NumCitasAgenda: $('#NumCitasAgenda').val(),
                ObservacionesCitasMedicas: $('#ObservacionesCitasMedicas').val(),
              
        

            },
            ListTestCitasTemporal: ListTestTemporal,
            FechaInit: $('#FechaCitas').val().split('a')[0],
            FechaFin: $('#FechaCitas').val().split('a')[1],
        }
        let id = 10;

        if (IsUpdate) {
            Save_Data(ActualizarVista, '/AgendarCitas/Actualizar', ObjAgendaDeportiva, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/AgendarCitas/Agregar', ObjAgendaDeportiva, 'Guardado');

            
        }
       
        

    }

}
function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../AgendarCitas/ListaAgendaDeportiva"
    }
}


function LimpiarFormulario() {

    $('#IdAgendarCitas').val('')
    $('#CedEspecialistaCitas').val('')
    $('#HoraIniciocitas').val('')
    $('#HoraFinCitas').val('')
    $('#FechaCitas').val('')
    $('#NumCitasAgenda').val('')
    
}

function AddTest() {
   

    ListTestTemporal.push({
        HoraIniciocitas: $('#HoraIniciocitas').val(),       
        HoraFinCitas: $('#HoraFinCitas').val(),
        FechaCitas: $('#FechaCitas').val(),
        FechaInit: $('#FechaCitas').val().split('a')[0],
        FechaFin: $('#FechaCitas').val().split('a')[1],
        NumCitasAgenda: $('#NumCitasAgenda').val()
       
    });
    CargartablatestTemporal(ListTestTemporal);
    Limpiarcampos();
}

function Limpiarcampos() {
    $('#HoraIniciocitas').val('');
    $('#HoraFinCitas').val('');
    $('#FechaCitas').val('');
    $('#NumCitasAgenda').val('');
    
}

function CargartablatestTemporal(Lista) {
    tablaTestTemporal.clear().draw();
    $.each(Lista, function (index, item) {
        tablaTestTemporal.row.add([
            item.HoraIniciocitas,
            item.HoraFinCitas,
            item.FechaCitas,
            item.NumCitasAgenda
           



        ]).draw(false);



    });
}