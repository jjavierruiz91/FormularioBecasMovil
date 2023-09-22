var ObjPoliticaSocial = {
    PoliticaSocialsport: {}//{objetos} llaves y [array] corchetes

}
//var validadorFormDeportista = [];
var IsUpdate = false;
var IdPoliticaSocialData = 0;
var VerDetalles = 'NO';
var formCitas = [];
$(document).ready(function () {//FUNCION INICIAL;
    let DocumentoPoliticaSocial = getQueryVariable('Document');
    VerDetalles = getQueryVariable('Viewdetail');
    IdPoliticaSocial = getQueryVariable('IdReg');
    //Get_DataGet(CargarSelectSucursales, '/Sucursal/GetListSucursalesPasaporte');

    if (DocumentoPoliticaSocial > 0) {
        IsUpdate = true;
        CargarInfoCita(DocumentoPoliticaSocial);
    }

    //initValidador();

});

//function initValidador() {
//    formCitas = Validador("FormCitasMedicasDeportiva2", {
//        NumeroDocumento: {
//            required: true,
//            StringEmpty: true
//        }
//    }
//    );
//}

//function ValidarCedula() {
//    let Cedula = $('#NumeroDocumento').val();
//    Get_Data(MostrarAlerta, '/PoliticaSocial/BuscarCedulaPass?Identificacion=' + Cedula)
//}


//function MostrarAlerta(data) {

//    if (data != null || data != undefined) {
//        swal({
//            title: "El usuario ya tiene un registro en el formulario.!",
//            text: "No se pueden diligenciar dos formulario",
//            type: "warning",
//            /*showCancelButton: true,*/
//            confirmButtonColor: "#DD6B55",
//            confirmButtonText: "Gracias por su visita",
//           /* cancelButtonText: "No, jamás",*/
//            closeOnConfirm: false,
//            closeOnCancel: false
            
//        },
         
//            function (isConfirm) {
//                if (isConfirm) {
//                    swal("¡Gobernacion del cesar!",
//                        "Gracias por utilizar nuestros servicios",
//                        "success");
//                    timer: 90000000
                    
//                } else {
//                    swal("¡Gobernacion del cesar!",
//                        "Gracias por utilizar nuestros servicios",
//                        "error");
                    
//                }
//                window.location.href = 'https://localhost:44379/PoliticaSocial/Agregar';
//            });
        
////                
//    }
    
//}

    



//function CargarInfoCita(Documento) {
//    Get_Data(LlenarDatosformularioPoliticaSocial, '/PoliticaSocial/BuscarCitas?Ducumento=' + Documento)
//}

//function LlenarDatosformularioPoliticaSocial(data) {
//    $('#TipoSolicitudPasaporte').val(data.objeto.TipoSolicitudPasaporte);
//    $('#TipoSolicitudPasaporte')[0].disabled = true;
//    $('#TipoDocumentoPasaporte').val(data.objeto.TipoDocumentoPasaporte);
//    $('#TipoDocumentoPasaporte')[0].disabled = true;
//    $('#NumeroDocumento').val(data.objeto.NumeroDocumento);
//    $('#NumeroDocumento')[0].disabled = true;
//    $('#TipoPasaporte').val(data.objeto.TipoPasaporte);
//    $('#TipoPasaporte')[0].disabled = true;
//    $('#FechaExpedicionDocumento').val(JSONDateconverter(data.objeto.FechaExpedicionDocumento));
//    $('#FechaExpedicionDocumento')[0].disabled = true;

//    $('#NombresPasaporte').val(data.objeto.NombresPasaporte);
//    $('#NombresPasaporte')[0].disabled = true;
//    $('#ApellidosPasaporte').val(data.objeto.ApellidosPasaporte);
//    $('#ApellidosPasaporte')[0].disabled = true;
//    $('#CelularPasaporte').val(data.objeto.CelularPasaporte);
//    $('#CelularPasaporte')[0].disabled = true;
//    $('#CorreoPasaporte').val(data.objeto.CorreoPasaporte);
//    $('#CorreoPasaporte')[0].disabled = true;
//    $('#CorreoPasaporteRepeated').val(data.objeto.CorreoPasaporteRepeated);
//    $('#CorreoPasaporteRepeated')[0].disabled = true;
//    $('#ParentescoMenor').val(data.objeto.ParentescoMenor);
//    $('#ParentescoMenor')[0].disabled = true;
//    $('#CuantosMenores').val(data.objeto.CuantosMenores);
//    $('#CuantosMenores')[0].disabled = true;
//    IdPoliticaSocialData = data.objeto.IdPoliticaSocial;
//}


//function CargarInfoinicial() {
//    var ValueCitaPasaporte = $('#NumeroDocumento').val();
//    Get_Data(LlenarcamposInicial, '/PoliticaSocial/BuscarCitas?Ducumento=' + ValueCitaPasaporte)
//}



//function LlenarcamposInicial(data) {

//    if (data.objeto == null) {

//        /*swal("Good job!", "You clicked the button!", "success");*/
//        swal({
//            title: "Oficina Politica Social",
//            text: "Usted no tiene registros!",
//            type: "warning",
//            confirmButtonColor: "#DD6B55",
//            confirmButtonText: "Muchas Gacias!",


//        });

//        return;



//    }
//    $('#TipoSolicitudPasaporte').val(data.objeto.TipoSolicitudPasaporte);
//    $('#TipoDocumentoPasaporte').val(data.objeto.TipoDocumentoPasaporte);
//    $('#NumIdentificacion').val(data.objeto.NumIdentificacion);
//    $('#Fecha').val(JSONDateconverter(data.objeto.Fecha));
//    $('#Hora').val(data.objeto.Hora +" : " + data.objeto.Minutos); 
//    /*$('#Minutos').val(data.objeto.Minutos);*/
   
    
//    $('#NombresPasaporte').val(data.objeto.NombresPasaporte);
//    $('#ApellidosPasaporte').val(data.objeto.ApellidosPasaporte);
//    $('#CelularPasaporte').val(data.objeto.CelularPasaporte);
//    $('#CorreoPasaporte').val(data.objeto.CorreoPasaporte);
    
   
//    $('#IdCitas').val(data.objeto.IdPoliticaSocial);
//    Alternar(ConsultaPasaporte);
//}

//function LlenarCampos(data) {
//    $('#NombresPasaporte').val(data.objeto.NombresPasaporte);
//    $('#ApellidosPasaporte').val(data.objeto.ApellidosPasaporte);

//    CargarInfoinicial();
//}

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

    

        // if (validadorFormMedicinaDeportiva.form()) {
        if (VerDetalles == "SI") {
            Atras();
        }
        else {

            var IdPoliticaSocial = 0;
            if (IsUpdate) {
                IdPoliticaSocial = IdPoliticaSocialData;
            }
            ObjPoliticaSocial = {
                PoliticaSocialsport: {


                    IdPoliticaSocial: IdPoliticaSocial,
                    NombresPolitica: $('#NombresPolitica').val(),
                    ApellidosPolitica: $('#ApellidosPolitica').val(),
                    FechaNacimiento: $('#FechaNacimiento').val(),
                    EdadPolitica: $('#EdadPolitica').val(),
                    TipoSangre: $('#TipoSangre').val(),
                    RolPoliticaSocial: $('#RolPoliticaSocial').val(),
                    TipoDocumento: $('#TipoDocumento').val(),
                    NumeroDocumento: $('#NumeroDocumento').val(),
                    SexoNacimiento: $('#SexoNacimiento').val(),
                    IdentidadGenero: $('#IdentidadGenero').val(),
                    OrientacionSexual: $('#OrientacionSexual').val(),
                    Discapacidad: $('#Discapacidad').val(),
                    GrupoEtnico: $('#GrupoEtnico').val(),
                    VictimaConflictoArmado: $('#VictimaConflictoArmado').val(),
                    PoblacionPriorizada: $('#PoblacionPriorizada').val(),
                    CorreoElectronico: $('#CorreoElectronico').val(),
                    TelefonoContacto: $('#TelefonoContacto').val(),
                    Municipios: $('#Municipios').val(),
                    Zona: $('#Zona').val().split('_')[0],
                    NivelEscolaridad: $('#NivelEscolaridad').val(),
                    Profesion: $('#Profesion').val(),
                    AmbienteLudico: $('#pais').val(),
                    AmbienteLudicoExpresa: $('#ambienteLudico').val(),
                    AmbienteLudicoCorporal: $('#informacion').val(),
                    
                    
                    

       
        


                }
            }
            let id = 10;

            if (IsUpdate) {
                swal({
                    title: "Atención",
                    text: "¿Estas seguro de actualizar el formulario ?",
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
                            Save_Data(ActualizarVista, '/PoliticaSocial/EditarPoliticaSocial', ObjPoliticaSocial, 'Actualizacion');
                            /*window.location.href = 'http://127.0.0.1:5501/index.html';*/
                        }
                        else {
                            swal.close()
                        }
                    });


            }
            else {
                Save_Data(ActualizarVista, '/PoliticaSocial/Agregar', ObjPoliticaSocial, 'Guardado');
                /*window.location.href = 'http://127.0.0.1:5501/index.html';*/

                // LimpiarFormulario()
            }

            //} else {
            //    SwalErrorMsj("No ingreso todos los campos por favor verifique");
            //}

        

    }
}
function ActualizarVista() {
    window.location.reload();
}

function RenderUpdateCita(viewfree) {

    window.location.href = "../PoliticaSocial/agregar?ViewFree=" + viewfree + "&Document=" + $('#NumeroDocumento').val();

}

//function CancelarCita() {
//    swal({
//        title: "Atención",
//        text: "¿Estas seguro de cancelar la cita ?",
//        type: "warning",
//        showCancelButton: true,
//        confirmButtonClass: "btn-danger",
//        confirmButtonText: "Si",
//        cancelButtonText: "No",
//        closeOnConfirm: false,
//        closeOnCancel: false
//    },
//        function (isConfirm) {
//            if (isConfirm) {
//                swal.close()
//                Get_Data(reloadPage, "/PoliticaSocial/ActualizarEstadoCancelar?IdCitaPasaporte=" + $('#IdCitas').val())
//            }
//            else {
//                swal.close()
//            }
//        });


//}


function reloadPage() {
    window.location.reload();
}


//function LimpiarFormulario() {

//    $('#IdPoliticaSocial').val('')
//    $('#Sucursales').val('')
//    $('#FechaCalen').val('')
//    $('#Hora').val('')
//    $('#Minutos').val(''),
//        $('#Segundos').val('')


//}


function validarCorreo() {
    var correoElectronico = document.getElementById("CorreoElectronico").value;
    var expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!expresionRegular.test(correoElectronico)) {
        alert("Por favor, ingrese un correo electrónico válido.");
    }
}
