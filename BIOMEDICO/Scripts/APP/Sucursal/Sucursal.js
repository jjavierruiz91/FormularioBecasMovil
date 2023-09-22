    var ObjSucursalPasaporte = {
        SucursadlPasport: {}//{objetos} llaves y [array] corchetes

}
//var validadorFormDeportista = [];
var IsUpdate = false;
var IdSucursalData = 0;
var VerDetalles = 'NO';

$(document).ready(function () {//FUNCION INICIAL;
    IdSucursalData = getQueryVariable('IdReg');
    VerDetalles = getQueryVariable('Viewdetail');
    if (IdSucursalData > 0) {
        IsUpdate = true;
    }
    if (VerDetalles == "SI") {
        $('#SaveSucursal').html('Atras')
        Get_Data(LlenarCampos, '/Sucursal/GetSucursaPasaporteById?IdsucursarPasapor=' + IdSucursalData);
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveSucursal').html('Actualizar')
        Get_Data(LlenarCampos, '/Sucursal/GetSucursaPasaporteById?IdsucursarPasapor=' + IdSucursalData);
    }

});

//function CargarInfoinicial() {
//    var Valuecedula = $('#Cedula').val();
//    Get_Data(LlenarcamposInicial, '/Nutricion/BuscarDeportista?cedula=' + Valuecedula)
//}
//function LlenarcamposInicial(data) {
//    $('#PrimerNombre').val(data.PrimerNombre)
//    $('#SegundoNombre').val(data.SegundoNombre)
//    $('#PrimerApellido').val(data.PrimerApellido)
//    $('#SegundoApellido').val(data.SegundoApellido)
//    $('#Edad').val(data.Edad)


//}


function LlenarCampos(data) {
    
    $('#IdSucursal').val(data.objeto.IdSucursal);
    $('#CodSucursal').val(data.objeto.CodSucursal);
    $('#EstadoSucursal').val(data.objeto.EstadoSucursal);
    $('#EspecialidadSucursal').val(data.objeto.EspecialidadSucursal);
    $('#Direcccion').val(data.objeto.Direcccion);
    $('#Telefono').val(data.objeto.Telefono);
    $('#Correo').val(data.objeto.Correo);
  
    //CargarInfoinicial();
    

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
    document.getElementById("SaveSucursal").disabled = true;

    // if (validadorFormMedicinaDeportiva.form()) {
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        var test = $('#NumIde').val();
        var IdSucursal = 0;
        if (IsUpdate) {
            IdSucursal = IdSucursalData;
        }
        ObjSucursalPasaporte = {
            SucursadlPasport: {

                IdSucursal: IdSucursal,
                CodSucursal: $('#CodSucursal').val(),
                EstadoSucursal: $('#EstadoSucursal').val(),
                EspecialidadSucursal: $('#EspecialidadSucursal').val(),
                Direcccion: $('#Direcccion').val(),
                Telefono: $('#Telefono').val(),
                Correo: $('#Correo').val(),



            }
        }
        let id = 10;

        if (IsUpdate) {
            Save_Data(ActualizarVista, '/Sucursal/Actualizar', ObjSucursalPasaporte, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/Sucursal/Agregar', ObjSucursalPasaporte, 'Guardado');

            // LimpiarFormulario()
        }

        //} else {
        //    SwalErrorMsj("No ingreso todos los campos por favor verifique");
        //}

    }

}
function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../Sucursal/ListaSucursalPasaporte"
    }
}


//function LimpiarFormulario() {
        
//    $('#CodMedicos').val('')
//    $('#EstadoEspecialistas').val('')
//    $('#PrimerNombre').val('')
//    $('#SegundoNombre').val('')
//    $('#PrimerApellido').val(''),
//    $('#SegundoApellido').val('')
//    $('#FechaNacimiento').val('')
//    $('#Especialidad').val('')
//    $('#Direcccion').val('')
//    $('#Telefono').val('')
//    $('#Centro').val('')
//    $('#Genero').val('')
//    $('#Correo').val('')

//}

