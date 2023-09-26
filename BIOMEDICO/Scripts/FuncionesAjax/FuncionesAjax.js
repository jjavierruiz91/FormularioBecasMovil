function Save_Data(callbacksussces, Url, ObjetoGuardar, TituloMensaje, Recargar, callbackerror) {
    var formURL = SetUrlForQueryLocal(Url);

    // Obtener el nombre y apellido del formulario
    var NombreBecasMovil = $("#NombreBecasMovil").val();
    var ApellidosBecasMovil = $("#ApellidosBecasMovil").val();
    var NumeroDocumento = $("#NumeroDocumento").val();

    // Agregar nombre y apellido al objeto a guardar
    ObjetoGuardar.NombreBecasMovil = NombreBecasMovil;
    ObjetoGuardar.ApellidosBecasMovil = ApellidosBecasMovil;
    ObjetoGuardar.NumeroDocumento = NumeroDocumento;

    $.ajax({
        url: formURL,
        type: "POST",
        dataType: "json",
        data: JSON.stringify(ObjetoGuardar),
        contentType: "application/json",
        success: function (data, textStatus, jqXHR) {
            if (!data.Error) {
                var TituloMensaje = "¡Registro Exitoso!\nNúmero de Documento: " + NumeroDocumento + "\n" + NombreBecasMovil + " " + ApellidosBecasMovil + "!";

                swal.fire({
                    title: TituloMensaje,
                    text: data.mensaje,
                    type: "success",
                    confirmButtonClass: "btn-outline-primary",
                    confirmButtonText: "Gracias por su visita",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        swal.close()
                        callbacksussces(data)
                    } else if (result.isDenied) {
                        swal.close()
                    }
                });
            } else {
                swal.fire({
                    title: "¡Atención!",
                    text: data.mensaje,
                    type: "error",
                    closeOnConfirm: true,
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error en la solicitud AJAX: " + textStatus);
            console.log("Detalles del error: " + errorThrown);
            console.log("Respuesta del servidor: " + jqXHR.responseText);

            // Llama a la función de callback de error si la tienes
            if (typeof callbackerror === "function") {
                callbackerror(jqXHR, textStatus, errorThrown);
            }
        }
    });
}

//function Save_Data(callbacksussces, Url, ObjetoGuardar, TituloMensaje, Recargar, callbackerror) {
//    var formURL = SetUrlForQueryLocal(Url);

//    // Obtener el nombre y apellido del formulario
//    var NombreBecasMovil = $("#NombreBecasMovil").val(); // Reemplaza "nombre" con el ID del campo de nombre en tu formulario
//    var ApellidosBecasMovil = $("#ApellidosBecasMovil").val(); // Reemplaza "nombre" con el ID del campo de nombre en tu formulario
//    var NumeroDocumento = $("#NumeroDocumento").val(); // Reemplaza "nombre" con el ID del campo de nombre en tu formulario

//    // Agregar nombre y apellido al objeto a guardar
//    ObjetoGuardar.NombreBecasMovil = NombreBecasMovil;
//    ObjetoGuardar.ApellidosBecasMovil = ApellidosBecasMovil;
//    ObjetoGuardar.NumeroDocumento = NumeroDocumento;


//    $.ajax(
//        {
//            url: formURL,
//            type: "POST",
//            dataType: "json",
//            data: JSON.stringify(ObjetoGuardar),
//            contentType: "application/json",
//            success: function (data, textStatus, jqXHR) {
//                if (!data.Error) {
//                    var TituloMensaje = "¡Registro Exitoso!\nNúmero de Documento: " + NumeroDocumento + "\n" + NombreBecasMovil + " " + ApellidosBecasMovil + "!";

//                    swal.fire({
//                        title: TituloMensaje,
//                        text: data.mensaje,
//                        type: "success",
//                        confirmButtonClass: "btn-outline-primary",
//                        confirmButtonText: "Gracias por su visita",
//                        closeOnConfirm: false,
//                        closeOnCancel: false
//                    }
//                    ).then((result) => {
//                        /* Read more about isConfirmed, isDenied below */
//                        if (result.isConfirmed) {
//                            swal.close()
//                            callbacksussces(data)
//                        } else if (result.isDenied) {
//                            swal.close()                        }
//                    });

//                }
//                else {
//                    //SwalErrorMsj(data.mensaje);
//                    swal.fire({
//                        title: "¡Atencion!",
//                        text: data.mensaje,
//                        //confirmButtonColor: "#ab2328",
//                        type: "error",
//                        closeOnConfirm: true,
//                    });
//                }
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                console.log(errorThrown);
//            }
//        });


//}




function Update_Data(callbacksussces, Url, ObjetoGuardar, TituloMensaje, Recargar, callbackerror) {
    var formURL = SetUrlForQueryLocal(Url);
    $.ajax(
        {
            url: formURL,
            type: "POST",
            dataType: "json",
            data: JSON.stringify(ObjetoGuardar),
            contentType: "application/json",
            success: function (data, textStatus, jqXHR) {
                if (!data.Error) {
                    swal({
                        title: TituloMensaje,
                        text: data.mensaje,
                        type: "success",
                        closeOnConfirm: true,
                    });
                    callbacksussces(data)
                }
                else {
                    //SwalErrorMsj(data.mensaje);
                    swal({
                        title: "¡Atencion!",
                        text: data.mensaje,
                        //confirmButtonColor: "#ab2328",
                        type: "error",
                        closeOnConfirm: true,
                    });
                }
                window.location.href = 'https://cesar.gov.co/d/index.php/es/';
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });


}

function Get_DataGet(callbacksussces, Url, ParametroString, IsCargandoOn, callbackerror) {
    var form_data = new FormData();
    //var Obj = { UserName: DataUser.UserName, Password: DataUser.Password, Telefono: ParametroString, IdUser: DataUser.IdUser };
    var formURL = SetUrlForQueryLocal(Url + "?Parametro=" + ParametroString);
    $.ajax( //con json
        {
            url: formURL,
            type: "GET",
            dataType: "json",
            //data: JSON.stringify(Obj),
            contentType: "application/json",
            processData: false,
            success: function (data, textStatus, jqXHR) {
                if (!data.Error) {
                    callbacksussces(data)
                } else {
                    //if (IsCargandoOn)
                    //    CloseLoading();
                    SwalErrorMsj(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
}

function Get_Data(callbacksussces, Url) {
    var form_data = new FormData();
    //var Obj = { UserName: DataUser.UserName, Password: DataUser.Password, Telefono: ParametroString, IdUser: DataUser.IdUser };
    var formURL = SetUrlForQueryLocal(Url );
    $.ajax( //con json
        {
            url: formURL,
            type: "GET",
            dataType: "json",
            //data: JSON.stringify(Obj),
            contentType: "application/json",
            processData: false,            
            success: function (data, textStatus, jqXHR) {
                if (!data.Error) {
                    callbacksussces(data)
                } else {
                    //if (IsCargandoOn)
                    //    CloseLoading();
                    SwalErrorMsj(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
}


function SetUrlForQueryLocal(stringrelativeserver) {

    return window.location.origin + stringrelativeserver;

//    return window.location.origin + "/CentroBiomedico" + stringrelativeserver;
}

function GetDataOpcion(callbacksussces, Url, Parametro, ParametroString, IsCargandoOn, callbackerror) {
    var form_data = new FormData();
    var formURL = SetUrlForQueryLocal(Url + "?" + Parametro + "=" + ParametroString);
    $.ajax( //con json
        {
            url: formURL,
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            processData: false,
            success: function (data, textStatus, jqXHR) {
                if (!data.Error) {
                    callbacksussces(data)
                } else {
                    //if (IsCargandoOn)
                    //    CloseLoading();
                    SwalErrorMsj(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
}



function Del_DataPost(callbacksussces, Url, Parametro, ParametroString,) {
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
                var formURL = SetUrlForQueryLocal(Url + "?" + Parametro + "=" + ParametroString);
                var Obj = {};
                var formURL = SetUrlForQueryLocal(Url);
                $.ajax( //con json
                    {
                        url: formURL,
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify(Obj),
                        contentType: "application/json",
                        processData: false,
                        success: function (data, textStatus, jqXHR) {
                            swal.close()
                            if (!data.error) {
                                callbacksussces(data)
                            } else {
                                SwalErrorMsj(data);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log(errorThrown);
                        }
                    });
            }
            else {
                swal.close()
            }
        });
}