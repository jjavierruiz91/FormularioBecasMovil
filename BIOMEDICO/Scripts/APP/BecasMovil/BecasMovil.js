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

        try {
            var fileStringBase64Documento = await getBase64(fileFormDocumento);
            var fileStringBase64Sisben = await getBase64(fileFormSisben);
            var fileStringBase64Escolaridad = await getBase64(fileFormEscolaridad);

            // Continuar con el procesamiento de los archivos
        } catch (error) {
            // No es necesario hacer nada aquí si el error esperado es "Falta el archivo"
            // Puedes agregar otro manejo de errores si es necesario.
        }


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
                InstitucionEducativa: $('#InstitucionEducativa').val(),

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

//async function getBase64(file) {
//    return new Promise((resolve) => {
//        var reader = new FileReader();
//        reader.readAsDataURL(file);
//        reader.onload = function () {
//            //console.log(reader.result);
//            let stringBase64 = reader.result;
//            resolve(stringBase64.split(",")[1]);
//        };
//        reader.onerror = function (error) {
//            console.log('Error: ', error);
//        };
//    });
//}


//async function getBase64(file) {
//    return new Promise((resolve, reject) => {
//        if (!file) {
//            alert("Falta el archivo");
//            reject("Falta el archivo"); // También puedes rechazar la promesa si el archivo es nulo
//        } else {
//            var reader = new FileReader();
//            reader.readAsDataURL(file);
//            reader.onload = function () {
//                let stringBase64 = reader.result;
//                resolve(stringBase64.split(",")[1]);
//            };
//            reader.onerror = function (error) {
//                console.log('Error: ', error);
//                reject(error);
//            };
//        }
//    });
//}
async function getBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            Swal.fire({
                icon: 'error',
                title: 'Falta el archivo',
                text: 'Por favor, debe cargar todos los documentos.'
            });
            reject("Falta el archivo");
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let stringBase64 = reader.result;
                resolve(stringBase64.split(",")[1]);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al cargar el archivo',
                    text: 'Ocurrió un error al cargar el archivo.'
                });
                reject(error);
            };
        }
    });
}


//const toBase64 = file => new Promise((resolve, reject) => {
//    const reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = () => resolve(reader.result);
//    reader.onerror = error => reject(error);
//});


//function validarArchivo(input) {
//    var allowedExtensions = /(\.pdf|\.jpg|\.jpeg|\.png)$/i;
//    var file = input.files[0];

//    if (!allowedExtensions.exec(file.name)) {
//        // El archivo no es un PDF ni una imagen, muestra la alerta de Swal
//        Swal.fire({
//            icon: 'error',
//            title: 'Error',
//            text: 'Por favor, seleccione un archivo PDF o una imagen válida (jpg, jpeg, png).'
//        });
//        input.value = ""; // Limpia el campo de entrada
//    }
//}
function validarArchivo(input) {
    var allowedExtensions = /(\.pdf|\.jpg|\.jpeg|\.png)$/i;

    // Verificar si se seleccionó un archivo
    if (input.files.length > 0) {
        var file = input.files[0];

        // Verificar si el archivo tiene una extensión válida
        if (!allowedExtensions.exec(file.name)) {
            // El archivo no es un PDF ni una imagen, muestra la alerta de Swal
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, seleccione un archivo PDF o una imagen válida (jpg, jpeg, png).'
            });
            input.value = ""; // Limpia el campo de entrada
        }
    } else {
        // No se seleccionó ningún archivo
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, seleccione un archivo.'
        });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('NumeroDocumento').addEventListener('blur', function () {
        var numeroDocumento = this.value.trim();
        if (numeroDocumento.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El número de documento debe tener al menos 6 dígitos',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de entrada
    const numeroContactoInput = document.getElementById("NumeroContacto");

    // Agregar un listener al evento 'blur' para verificar cuando el usuario sale del campo de entrada
    numeroContactoInput.addEventListener("blur", function () {
        const valorInput = numeroContactoInput.value;

        // Verificar si el valor tiene menos de 7 caracteres
        if (valorInput.length < 7) {
            // Mostrar una alerta con SweetAlert
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "El número de contacto debe tener al menos 7 caracteres.",
            });
        }
    });
});