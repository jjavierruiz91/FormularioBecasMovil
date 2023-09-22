//var ObjCitasPasaporte = {
//    CitasPasaport: {}//{objetos} llaves y [array] corchetes

//}
////var validadorFormDeportista = [];
//var IsUpdate = false;
//var idCitasPasaporteData = 0;
//var VerDetalles = 'NO';
//var formCitas = [];
//$(document).ready(function () {//FUNCION INICIAL;
//    let DocumentoPasaporte = getQueryVariable('Document');
//    VerDetalles = getQueryVariable('Viewdetail');
//    IdCitasPasaporte = getQueryVariable('IdReg');
//    Get_DataGet(CargarSelectSucursales, '/Sucursal/GetListSucursalesPasaporte');

//    if (DocumentoPasaporte > 0) {
//        IsUpdate = true;
//        CargarInfoCita(DocumentoPasaporte);
//    }

//    initValidador();

//});

//function initValidador() {
//    formCitas = Validador("FormCitasMedicasDeportiva2", {
//        NumDocumentoPasaporte: {
//            required: true,
//            StringEmpty: true
//        }
//    }
//    );
//}

//function ValidarCedula() {
//    let Cedula = $('#NumDocumentoPasaporte').val();
//    Get_Data(MostrarAlerta, '/CitasPasaporte/BuscarCedulaPass?Identificacion=' + Cedula)
//}
////function MostrarAlerta(data) {

////    if (data != null || data != undefined) {
////        swal({
////            title: "Atención",
////            text: "¡El usuario ya tiene una cita agendada.!",
////            type: "warning",
////            //showCancelButton: true,
////            //confirmButtonClass: "btn-danger",
////            confirmButtonText: "Ok",

////        },
////          function () {
////                window.location.href = 'http://127.0.0.1:5501/index.html';
////          });



////    }
////}

//function MostrarAlerta(data) {

//    if (data != null || data != undefined) {
//        swal({
//            title: "El usuario ya tiene una cita agendada.!",
//            text: "No se pueden agendar dos citas para el mismo usuario",
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
//                window.location.href = 'https://localhost:44379/CitasPasaporte/Agregar';
//            });
        
////                
//    }
    
//}

    



//function CargarInfoCita(Documento) {
//    Get_Data(LlenarDatosformulariocita, '/CitasPasaporte/BuscarCitas?Ducumento=' + Documento)
//}

//function LlenarDatosformulariocita(data) {
//    $('#TipoSolicitudPasaporte').val(data.objeto.TipoSolicitudPasaporte);
//    $('#TipoSolicitudPasaporte')[0].disabled = true;
//    $('#TipoDocumentoPasaporte').val(data.objeto.TipoDocumentoPasaporte);
//    $('#TipoDocumentoPasaporte')[0].disabled = true;
//    $('#NumDocumentoPasaporte').val(data.objeto.NumDocumentoPasaporte);
//    $('#NumDocumentoPasaporte')[0].disabled = true;
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
//    idCitasPasaporteData = data.objeto.IdCitasPasaporte;
//}


//function CargarInfoinicial() {
//    var ValueCitaPasaporte = $('#NumDocumentoPasaporte').val();
//    Get_Data(LlenarcamposInicial, '/CitasPasaporte/BuscarCitas?Ducumento=' + ValueCitaPasaporte)
//}



//function LlenarcamposInicial(data) {

//    if (data.objeto == null) {

//        /*swal("Good job!", "You clicked the button!", "success");*/
//        swal({
//            title: "Oficina Pasaporte Gobernación Del Cesar",
//            text: "Usted no tiene citas agendadas!",
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
    
   
//    $('#IdCitas').val(data.objeto.IdCitasPasaporte);
//    Alternar(ConsultaPasaporte);
//}

//function LlenarCampos(data) {
//    $('#NombresPasaporte').val(data.objeto.NombresPasaporte);
//    $('#ApellidosPasaporte').val(data.objeto.ApellidosPasaporte);

//    CargarInfoinicial();
//}

//function Alternar(Seccion) {
//    if (Seccion.style.display == "none") { Seccion.style.display = "" }
//    else { Seccion.style.display = "show" }
//}


//function FechasMarcada(ListFechas) {
//    var $input = $(".pickdate").pickadate({
//        format: 'yyyy-mm-dd',
//        formatSubmit: 'yyyy-mm-dd',
//        editable: false, disable: [true],


//        min: new Date(),
//        firstDay: 0
//    });


//    for (var i = 0; i < ListFechas.length; i++) {
//        fecha.push(JSONDateconverter(ListFechas[i], false));
//    }

//    let fechaeneblearray = [];

//    fechaeneblearray.push(0);




//    $.each(fecha, function (index, item) {
//        substringa = item.split("-");
//        fechabydisable.push(substringa);
//        fechabydisable[index][1] = fechabydisable[index][1] * 1 - 1;
//        fechabydisable[index][2] = fechabydisable[index][2] * 1;
//        fechabydisable[index][0] = fechabydisable[index][0] * 1;


//    });

//    fechaeneblearray.push(...fechabydisable)

//    var picker = $input.pickadate('picker');
//    picker.set("disable", fechaeneblearray);




//}

//var ListFechas = [];
//var fecha = [];
//var substringa = [];
//var fechabydisable = [];
//var fechaByDisable2 = [];

//var fechaByEnable = [];
//function FechasMarcadaa(listafe) {

//    ListFechas = listafe;
//    console.log(ListFechas);
//    for (var i = 0; i < ListFechas.length; i++) {
//        fecha.push(JSONDateconverter(ListFechas[i], false));
//    }




//    $.each(fecha, function (index, item) {
//        substringa = item.split("-");
//        fechabydisable.push(substringa);




//        fechabydisable[index][1] = fechabydisable[index][1] * 1 - 1;
//        fechabydisable[index][2] = fechabydisable[index][2] * 1;
//        fechabydisable[index][0] = fechabydisable[index][0] * 1;


//        //fechabydisable[index][3] = "inverted";

//        fechaByEnable.push(substringa);

//        //fechaByEnable[index][1] = fechaByEnable[index][1] * 1 - 1;






//        fechaByDisable2.push(fechabydisable);

//    });
//    fechabydisable.push({ from: [1800, 1, 1], to: [3000, 1, 1] })

//    var $input = $(".pickdate").pickadate({

//        format: 'dd-mm-yyyy',
//        formatSubmit: 'dd-mm-yyyy',
//        editable: false,
//        disable: fechabydisable,
//        labelMonthNext: 'Ir al siguiente mes',
//        labelMonthPrev: 'Ir al mes anterior',
//        labelMonthSelect: 'Seleccionar mes',
//        labelYearSelect: 'Seleccionar año',
//        labelDaySelect: 'aqui',
//        klass: {
//            navPrev: '',
//            navNext: '',
//        },

//        selectMonths: true,
//        selectYears: 100,
//        min: new Date(),
//        firstDay: 0,
//        today: 'Hoy',
//        close: 'Cerrar',
//        clear: '',


//        onSet: function (context) {
//            if (context.select != undefined) {
//                var date = new Date(context.select);
//                var formatdate = formatDate(date);
//                $(this.$node).val(formatdate).trigger("change");
//            } else {

//                var date = new Date(parseInt("" + context.highlight[0]), parseInt("" + context.highlight[1]), parseInt("" + context.highlight[2]));
//                var finderdate = fechabydisable.find(function (val) {
//                    var datedi = new Date(val[0] * 1, val[1] * 1, val[2] * 1);
//                    return datedi == date;
//                });
//                if (finderdate != null && finderdate != undefined) {
//                    var formatdate = formatDate(date);
//                    $(this.$node).val(formatdate).trigger("change");
//                } else {
//                    var finderdate = fechabydisable.find(function (val) {
//                        var datedi = new Date(val[0] * 1, val[1] * 1, val[2] * 1);
//                        return datedi > date;
//                    });
//                    if (finderdate != null && finderdate != undefined)
//                        this.set({ select: new Date(finderdate[0] * 1, finderdate[1] * 1, finderdate[2] * 1) });
//                    else {
//                        finderdate = fechabydisable[fechabydisable.length - 2];
//                        this.set({ select: new Date(finderdate[0] * 1, finderdate[1] * 1, finderdate[2] * 1) });
//                    }
//                }

//            }
//        }




//    });


//    console.log(fechaByEnable);
//    var picker = $input.pickadate('picker');
//    picker.set("disable", [
//        1,
//    ]);

//    picker.set("enable", fechaByEnable);



//}

//var DatosHorario = [];
//function CargarSelectSucursales(data) {
//    Sucursales = data;
//    console.log(Sucursales);
//    var HtmlEmp = "";
//    HtmlEmp = "<option value=''>Seleccionar</option>"
//    $.each(data.objeto.DatosSucursal, function (index, item) {

//        HtmlEmp += "<option value='" + item.CodSucursal + "'>" + item.EspecialidadSucursal + "</option>"

//        //    HtmlEmp += "<option value='" + item.CodMedicos + "'>" + item.Especialidad + " - "+item.PrimerApellido+ "</option>"
//    })
//    $('#Sucursales').html(HtmlEmp);
//    $('#Sucursales').select2();
//    DatosHorario = Sucursales.objeto.ListaHorario;
//}

//function CargarSelectFecha() {
//    let ArrayFecha = [];
//    let Sucursales = $('#Sucursales').val();


//    if (DatosHorario.length == 0) {
//        swal({
//            title: "Oficina Pasaporte Gobernación Del Cesar",
//            text: "No tenemos agenda disponibles!",
//            type: "warning",
//            confirmButtonColor: "#DD6B55",
//            confirmButtonText: "Gracias por su visita!",


//        });

//        return;

       

//    }










//    let agenda = DatosHorario.filter(w => w.CodSucursal == Sucursales);
//    var HtmlEmp = "";
//    HtmlEmp = "<option value='' >Seleccionar</option>"
//    $.each(agenda, function (index, item) {
//        let ExistefEcha = ArrayFecha.find(w => w == item.Fecha);

//        if (ExistefEcha == undefined) {
//            HtmlEmp += "<option value='" + item.Fecha + "'>" + JSONDateconverter(item.Fecha) + "</option>"
//            ArrayFecha.push(item.Fecha);

//        }


//    });

//    FechasMarcada(ArrayFecha);
//    $('#Fecha').html(HtmlEmp);
//    $('#Fecha').select2();
//}

//function CargarSelectHora() {
//    let Arrayhra = [];
//    let FechasElect = $('#FechaCalen').val();
//    let Sucursales = $('#Sucursales').val();
//    let Horarios = DatosHorario.filter(w => {

//        let dateFormat = JSONDateconverter(w.Fecha, true);

//        return dateFormat.split(' ')[0] == FechasElect && w.CodSucursal == Sucursales

//    });



//    let Disponiblehorario = joinTime(Horarios);;
//    var HtmlEmp = "";
//    HtmlEmp = "<option value=''>Seleccionar</option>";
//    $.each(Disponiblehorario, function (index, item) {
//        let ExisteHOra = Arrayhra.find(w => w == item.Hora + '_' + item.minutos);

//        if (ExisteHOra == undefined) {
//            HtmlEmp += "<option value='" + item.Hora + '_' + item.minutos + "'>" + ConvertFormatDate(item) + "</option>"
//            Arrayhra.push(item.Hora + '_' + item.minutos);
//        }


//    })
//    $('#Hora').html(HtmlEmp);
//    $('#Hora').select2();
//}







//function ConvertFormatDate(Horarios) {

//    let HoraSet = Horarios.Hora;
//    switch (Horarios.Hora) {
//        case 13:
//            HoraSet = 01;
//            break;
//        case 14:
//            HoraSet = 02;
//            break;

//        case 15:
//            HoraSet = 03;
//            break;

//        case 16:
//            HoraSet = 04;
//            break;

//        case 17:
//            HoraSet = 05;
//            break;
//    }

//    let MinutosSet = Horarios.minutos < 10 ? "0" + Horarios.minutos : Horarios.minutos;

//    if (Horarios.Hora >= 12) {
//        return HoraSet + ":" + MinutosSet + ' PM';

//    } else {
//        return HoraSet + ":" + MinutosSet  + ' AM';;
//    }
//}







//function joinTime(horario) {

//    let Arrayhorario = [];


//    let FechasElect = $('#FechaCalen').val();
//    let Sucursales = $('#Sucursales').val();

//    let contado = 0;
//    $.each(horario, function (index, item) {
//        let hora = item.Hora;
//        let HorariosMInutos = DatosHorario.filter(w => JSONDateconverter(w.Fecha, true).split(' ')[0] == FechasElect && w.CodSucursal == Sucursales && w.Hora == parseInt(hora));


//        $.each(HorariosMInutos, function (indexminutos, itemMinutos) {
//            let objHorario = { Hora: hora, minutos: itemMinutos.Minutos };
            
//          /*  if ((objHorario.Hora >= 12 && objHorario.minutos > 45) && (objHorario.Hora <= 13)) {

//            } else if ((objHorario.Hora <= 14 && objHorario.minutos < 45) && (objHorario.Hora >= 13)) {

//            } else if ((objHorario.Hora >= 13) && (objHorario.Hora <= 13 && objHorario.minutos <= 59)) {

//            }
//            else {
//                Arrayhorario.push(objHorario)
//            }*/
            
//            Arrayhorario.push(objHorario)
//        })


//    })





//    return Arrayhorario;


//}

//function CargarSelectMInutos() {
//    let ArrayFecha = [];
//    let FechasElect = $('#FechaCalen').val();
//    let Sucursales = $('#Sucursales').val();
//    let hora = $('#Hora').val();



//    let min = hora.split('_')[1];



//    $('#Minutos').val(min);




//    /*let Horarios = DatosHorario.filter(w => JSONDateconverter(w.Fecha,true).split(' ')[0] == FechasElect && w.CodSucursal == Sucursales && w.Hora ==parseInt(hora));
    
//    var HtmlMin = "";
//    HtmlMin = "<option value=''>Seleccionar</option>"
//    $.each(Horarios, function (index, item) {

//        HtmlMin += "<option value='" + item.Minutos + "'>" + item.Minutos + "</option>"


//    })
//    $('#Minutos').html(HtmlMin);
//    $('#Minutos').select2();*/
//}



//function getQueryVariable(variable) {//saca los valores de la uRL
//    var query = window.location.search.substring(1);
//    var vars = query.split("&");
//    for (var i = 0; i < vars.length; i++) {
//        var pair = vars[i].split("=");
//        if (pair[0] == variable) {
//            return pair[1];
//        }
//    }
//    return 0;
//}

//function Atras() {
//    window.history.back();
//}

//function Createobj() {

//    if (formCitas.form()) {


//        document.getElementById("SaveCitasPasaporte").disabled = true;

//        // if (validadorFormMedicinaDeportiva.form()) {
//        if (VerDetalles == "SI") {
//            Atras();
//        }
//        else {

//            var IdCitasPasaporte = 0;
//            if (IsUpdate) {
//                IdCitasPasaporte = idCitasPasaporteData;
//            }
//            ObjCitasPasaporte = {
//                CitasPasaport: {


//                    IdCitasPasaporte: IdCitasPasaporte,
//                    OficinaPasaporte: $('#OficinaPasaporte').val(),
//                    TipoSolicitudPasaporte: $('#TipoSolicitudPasaporte').val(),
//                    TipoDocumentoPasaporte: $('#TipoDocumentoPasaporte').val(),
//                    NumDocumentoPasaporte: $('#NumDocumentoPasaporte').val(),
//                    FechaExpedicionDocumento: $('#FechaExpedicionDocumento').val(),
//                    NombresPasaporte: $('#NombresPasaporte').val(),
//                    ApellidosPasaporte: $('#ApellidosPasaporte').val(),
//                    CelularPasaporte: $('#CelularPasaporte').val(),
//                    CorreoPasaporte: $('#CorreoPasaporte').val(),
//                    CorreoPasaporteRepeated: $('#CorreoPasaporteRepeated').val(),
//                    TipoPasaporte: $('#TipoPasaporte').val(),
//                    MenoresEdadPasaporte: $('#MenoresEdadPasaporte').val(),
//                    ParentescoMenor: $('#ParentescoMenor').val(),
//                    NombreSucursales: $('#Sucursales').val(),
//                    CuantosMenores: $('#CuantosMenores').val(),
//                    Fecha: $('#FechaCalen').val(),
//                    Hora: $('#Hora').val().split('_')[0],
//                    Minutos: $('#Minutos').val(),
//                    Segundos: $('#Segundos').val(),
//                    NumIdentificacion: $('#NumDocumentoPasaporte').val(),
//                    //FechaRegistro: JSONDateconverter($('#FechaRegistro').val()),
//                    //FechaEstado: JSONDateconverter($('#FechaEstado').val()),
//                    UsuarioRegistra: $('#UsuarioRegistra').val(),
//                    UsuarioEstado: $('#UsuarioEstado').val(),
//                    DireccionIp: $('#DireccionIp').val(),










//                }
//            }
//            let id = 10;

//            if (IsUpdate) {
//                swal({
//                    title: "Atención",
//                    text: "¿Estas seguro de actualizar la cita ?",
//                    type: "warning",
//                    showCancelButton: true,
//                    confirmButtonClass: "btn-danger",
//                    confirmButtonText: "Si",
//                    cancelButtonText: "No",
//                    closeOnConfirm: false,
//                    closeOnCancel: false
//                },
//                    function (isConfirm) {
//                        if (isConfirm) {
//                            swal.close()
//                            Save_Data(ActualizarVista, '/CitasPasaporte/EditarCitasPasaporte', ObjCitasPasaporte, 'Actualizacion');
//                            /*window.location.href = 'http://127.0.0.1:5501/index.html';*/
//                        }
//                        else {
//                            swal.close()
//                        }
//                    });


//            }
//            else {
//                Save_Data(ActualizarVista, '/CitasPasaporte/Agregar', ObjCitasPasaporte, 'Guardado');
//                /*window.location.href = 'http://127.0.0.1:5501/index.html';*/

//                // LimpiarFormulario()
//            }

//            //} else {
//            //    SwalErrorMsj("No ingreso todos los campos por favor verifique");
//            //}

//        }

//    }
//}
//function ActualizarVista() {
//    window.location.reload();
//}

//function RenderUpdateCita(viewfree) {

//    window.location.href = "../CitasPasaporte/agregar?ViewFree=" + viewfree + "&Document=" + $('#NumDocumentoPasaporte').val();

//}

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
//                Get_Data(reloadPage, "/CitasPasaporte/ActualizarEstadoCancelar?IdCitaPasaporte=" + $('#IdCitas').val())
//            }
//            else {
//                swal.close()
//            }
//        });


//}


//function reloadPage() {
//    window.location.reload();
//}


//function LimpiarFormulario() {

//    $('#IdCitasPasaporte').val('')
//    $('#Sucursales').val('')
//    $('#FechaCalen').val('')
//    $('#Hora').val('')
//    $('#Minutos').val(''),
//        $('#Segundos').val('')


//}

