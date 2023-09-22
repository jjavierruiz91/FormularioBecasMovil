var ObjCitasAgendaExcepciones = {
    AgendaExcepcionesPassport: {}//{objetos} llaves y [array] corchetes

}
//var validadorFormDeportista = [];
var IsUpdate = false;
var IdAgendaExcepcionesData = 0;
var VerDetalles = 'NO';

$(document).ready(function () {//FUNCION INICIAL;
    IdAgendaExcepcionesData = getQueryVariable('IdAgendaReg');
  
    VerDetalles = getQueryVariable('Viewdetail');
    
    
    if (IdAgendaExcepcionesData > 0) {
        IsUpdate = true;
    }
   
    if (VerDetalles == "SI") {
        $('#SaveAgendaExcepciones').html('Atras')
        Get_Data(LlenarCampos, '/AgendaExcepciones/GetAgendaExcepcionesById?IDAgendaExcepciones=' + IdAgendaExcepcionesData);
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveAgendaExcepciones').html('Actualizar')
        Get_Data(LlenarCampos, '/AgendaExcepciones/GetAgendaExcepcionesById?IDAgendaExcepciones=' + IdAgendaExcepcionesData);
    }

});




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
    document.getElementById("SaveAgendaExcepciones").disabled = true;

    // if (validadorFormMedicinaDeportiva.form()) {
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        var test = $('#NumIde').val();
        var IdAgendaExcepciones = 0;
        if (IsUpdate) {
            IdAgendaExcepciones = IdAgendaExcepcionesData;
        }
        ObjCitasAgendaExcepciones = {
            AgendaExcepcionesPassport: {


                IdAgendaExcepciones: IdAgendaExcepciones,
                EstadoAgendaExcepciones: $('#EstadoAgendaExcepciones').val(),
                TipoSolicitudAgendaExcepciones: $('#TipoSolicitudAgendaExcepciones').val(),
                TipoDocumentoAgendaExcepciones: $('#TipoDocumentoAgendaExcepciones').val(),
                NumeroDocumentoAgendaExcepciones: $('#NumeroDocumentoAgendaExcepciones').val(),
                NombresAgendaExcepciones: $('#NombresAgendaExcepciones').val(),
                ApellidosAgendaExcepciones: $('#ApellidosAgendaExcepciones').val(),
                TipoPasaporteAgendaExcepciones: $('#TipoPasaporteAgendaExcepciones').val(),
                FechaAgendaExcepciones: $('#FechaAgendaExcepciones').val(),
                ObservacionesAgendaExcepciones: $('#ObservacionesAgendaExcepciones').val(),
                UsuarioRegistraAgendaExcepciones: $('#UsuarioRegistraAgendaExcepciones').val(),
                UsuarioEstadoAgendaExcepciones: $('#UsuarioEstadoAgendaExcepciones').val(),
                DireccionIpAgendaExcepciones: $('#DireccionIpAgendaExcepciones').val(),

            }


            }
        }
        let id = 10;

        if (IsUpdate) {
            Save_Data(ActualizarVista, '/AgendaExcepciones/Actualizar', ObjCitasAgendaExcepciones, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/AgendaExcepciones/Agregar', ObjCitasAgendaExcepciones, 'Guardado');

            // LimpiarFormulario()
        }

        //} else {
        //    SwalErrorMsj("No ingreso todos los campos por favor verifique");
        //}

    }


function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../AgendaExcepciones/ListaAgendaExcepciones"
    }
}




