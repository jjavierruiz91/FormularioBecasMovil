var ObjBecasMovil = {
    BecasMovilSport: {}//{objetos} llaves y [array] corchetes

}
//var validadorFormDeportista = [];
var IsUpdate = false;
var IdBecasMovilData = 0;
var VerDetalles = 'NO';
var formCitas = [];
$(document).ready(function () {//FUNCION INICIAL;
    let DocumentoPoliticaSocial = getQueryVariable('Document');
    VerDetalles = getQueryVariable('Viewdetail');
    IdBecasMovil = getQueryVariable('IdReg');
    //Get_DataGet(CargarSelectSucursales, '/Sucursal/GetListSucursalesPasaporte');

    if (DocumentoPoliticaSocial > 0) {
        IsUpdate = true;
        CargarInfoCita(DocumentoPoliticaSocial);
    }

    //initValidador();

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

async function Createobj() {

    

        // if (validadorFormMedicinaDeportiva.form()) {
        if (VerDetalles == "SI") {
            Atras();
        }
        else {

            var IdBecasMovil = 0;
            if (IsUpdate) {
                IdBecasMovil = IdBecasMovilData;
            }

            const fileFormDocumento = document.querySelector('#TipoDocumentoPdf').files[0];
            const fileFormSisben = document.querySelector('#NivelSisbenPdf').files[0];
            const fileFormEscolaridad = document.querySelector('#NivelEscolaridadPdf').files[0];

            var fileStringBase64Documento = await getBase64(fileFormDocumento);
            var fileStringBase64Sisben = await getBase64(fileFormSisben);
            var fileStringBase64Escolaridad = await getBase64(fileFormEscolaridad);
            
            ObjBecasMovil = {
                BecasMovilSport: {
                    IdBecasMovil: IdBecasMovil,
                    NombreBecasMovil: $('#NombreBecasMovil').val(),
                    ApellidosBecasMovil: $('#ApellidosBecasMovil').val(),
                    TipoDocumento: $('#TipoDocumento').val(),
                    NumeroDocumento: $('#NumeroDocumento').val(),
                    CorreoElectronico: $('#CorreoElectronico').val(),
                    NumeroContacto: $('#NumeroContacto').val(),
                    Direccion: $('#Direccion').val(),
                    TipoDocumentoPdf: fileStringBase64Documento,
                    NivelSisbenPdf: fileStringBase64Sisben,
                    NivelEscolaridadPdf: fileStringBase64Escolaridad,
                    MunicipioResidencia: $('#MunicipioResidencia').val(),
                    LugarNacimiento: $('#LugarNacimiento').val(),
                    TipoPoblacion: $('#TipoPoblacion').val(),
                    TipoSisben: $('#TipoSisben').val(),
                    TipoEscolaridad: $('#TipoEscolaridad').val(),
                        
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
                            Save_Data(ActualizarVista, '/BecasMovil/EditarBecasMovil', ObjBecasMovil, 'Actualizacion');
                            /*window.location.href = 'http://127.0.0.1:5501/index.html';*/
                        }
                        else {
                            swal.close()
                        }
                    });


            }
            else {
                Save_Data(ActualizarVista, '/BecasMovil/Agregar', ObjBecasMovil, 'Guardado');
               // reloadPage();
               //window.location.href = 'https://cesar.gov.co/d/index.php/es/';

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

    window.location.href = "../BecasMovil/agregar?ViewFree=" + viewfree + "&Document=" + $('#NumeroDocumento').val();

}



function reloadPage() {
    window.location.reload();
}

function validarCorreo() {
    var CorreoElectronico = document.getElementById("CorreoElectronico").value;
    var expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!expresionRegular.test(CorreoElectronico)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un correo electrónico válido.'
        });
    }
}



//function validarCorreo() {
//    var CorreoElectronico = document.getElementById("CorreoElectronico").value;
//    var expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//    if (!expresionRegular.test(CorreoElectronico)) {
//        alert("Por favor, ingrese un correo electrónico válido.");
//    }
//}

async function getBase64(file) {
    return new Promise((resolve) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            //console.log(reader.result);
            let stringBase64 = reader.result;
            resolve(stringBase64.split(",")[1]);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    });
}




//const toBase64 = file => new Promise((resolve, reject) => {
//    const reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = () => resolve(reader.result);
//    reader.onerror = error => reject(error);
//});


