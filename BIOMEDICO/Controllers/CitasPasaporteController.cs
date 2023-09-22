//using BIOMEDICO.Clases;
//using BIOMEDICO.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Web;
//using System.Web.Mvc;

//namespace BIOMEDICO.Controllers
//{
//    public class CitasPasaporteController : Controller
//    {
//        // GET: CitasPasaporte
//        public ActionResult Index()
//        {
//            return View();
//        }

//        public ActionResult ListaCitasPasaporte()
//        {
//            return View();
//        }

//        public ActionResult ListaConsultaCitasPasaporte()
//        {
//            return View();
//        }

//        public ActionResult ListaConsultaCitasPasaporteIncumplidas()
//        {
//            return View();
//        }
//        public ActionResult ListaConsultaCitasPasaporteEntregado()
//        {
//            return View();
//        }
//        public ActionResult ListaConsultaCitasPasaporteCancelado()
//        {
//            return View();
//        }
//        public ActionResult BuscarCitaPasaporte(bool ViewFree=false)
//        {
//            ViewBag.ViewFree = ViewFree;
//            return View();
//        }
       

//        public struct ObjCitasPasaporte
//        {
//            public CitasPasaporte  CitasPasaport { get; set; }

//        }

//        public struct Respuesta
//        {

//            public string mensaje { get; set; }
//            public bool Error { get; set; }
//            public Object objeto { get; set; }

//        }
//        [HttpGet]
//        public JsonResult BuscarCitas(long Ducumento)
//        {
//            Respuesta respuesta = new Respuesta();

//            var DatosCitasPasaport = new CitasPasaporte();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
//            {
//                try
//                {
//                    DatosCitasPasaport = db.CitasPasaporte.FirstOrDefault(w => w.NumDocumentoPasaporte == Ducumento && w.EstadoPasaporte== "ASIGNADA");
//                    if (DatosCitasPasaport == null)
//                    {
//                        respuesta.Error = false;
//                        respuesta.mensaje = "No existe el registro";
//                    }
//                    else
//                    {
//                        respuesta.Error = false;
//                        respuesta.objeto = DatosCitasPasaport;
//                    }
//                }
//                catch (Exception ex)
//                {
//                    respuesta.mensaje = ex.Message;
//                    respuesta.Error = true;
//                }

//            }
//            return Json(respuesta, JsonRequestBehavior.AllowGet);
//        }


//        [HttpGet]
//        public JsonResult BuscarCedulaPass(long Identificacion)
//        {
//            var DatosCitasPass = new CitasPasaporte();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
//            {
//                DatosCitasPass = db.CitasPasaporte.FirstOrDefault(w => w.NumDocumentoPasaporte == Identificacion && w.EstadoPasaporte == "ASIGNADA");
//            }
//            return Json(DatosCitasPass, JsonRequestBehavior.AllowGet);
//        }
//        [HttpGet]

//        public JsonResult BuscarAgendaCitas(long IdAgenda)
//        {
//            var DatosAgentaDeportista = new CitasPasaporte();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
//            {

//                DatosAgentaDeportista = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdAgenda);
//                if (DatosAgentaDeportista != null)
//                {

//                    DatosAgentaDeportista.EstadoPasaporte = "FINALIZADO";

//                }

//                db.SaveChanges();
//            }
//            return Json(DatosAgentaDeportista, JsonRequestBehavior.AllowGet);
//        }

//        [HttpGet]
//        //[ValidateAntiForgeryToken]
//        public JsonResult ActualizarEstadoTramitado(int IdCitaPasaporte)
//        {
//            Respuesta Retorno = new Respuesta();
//            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
//            //if (!ModelState.IsValid)
//            //    Retorno.mensaje="Datos invalidos";
           
//            try
//            {

//                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {
//                    try
//                    {
//                        var CitasDeportivaExiste = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdCitaPasaporte);
//                        if (CitasDeportivaExiste != null)
//                        {

                            
//                            CitasDeportivaExiste.EstadoPasaporte = "TRAMITADA";

//                        }

//                        db.SaveChanges();

//                        Retorno.Error = false;
//                        Retorno.mensaje = "Actualizado";

                       

//                    }
//                    catch (Exception ex)
//                    {
//                        Retorno.Error = true;
//                        Retorno.mensaje = "Error al Actualizar";
//                    }




//                }
//            }
//            catch (Exception ex)
//            {
//                String Error = ex.Message;
//                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
//                Retorno.Error = true;
//                Retorno.mensaje = "Error al agregar ";
//            }
//            return Json(Retorno,JsonRequestBehavior.AllowGet);
//        }


//        [HttpGet]
//        //[ValidateAntiForgeryToken]
//        public JsonResult ActualizarEstadoEntregado(int IdCitaPasaporte)
//        {
//            Respuesta Retorno = new Respuesta();
//            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
//            //if (!ModelState.IsValid)
//            //    Retorno.mensaje="Datos invalidos";

//            try
//            {

//                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {
//                    try
//                    {
//                        var CitasDeportivaExiste = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdCitaPasaporte);
//                        if (CitasDeportivaExiste != null)
//                        {


//                            CitasDeportivaExiste.EstadoPasaporte = "ENTREGADO";

//                        }

//                        db.SaveChanges();

//                        Retorno.Error = false;
//                        Retorno.mensaje = "Actualizado";


//                    }
//                    catch (Exception ex)
//                    {
//                        Retorno.Error = true;
//                        Retorno.mensaje = "Error al Actualizar";
//                    }




//                }
//            }
//            catch (Exception ex)
//            {
//                String Error = ex.Message;
//                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
//                Retorno.Error = true;
//                Retorno.mensaje = "Error al agregar ";
//            }
//            return Json(Retorno, JsonRequestBehavior.AllowGet);
//        }

//        [HttpGet]
//        //[ValidateAntiForgeryToken]
//        public JsonResult ActualizarEstadoCancelar(int IdCitaPasaporte)
//        {
//            Respuesta Retorno = new Respuesta();
//            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
//            //if (!ModelState.IsValid)
//            //    Retorno.mensaje="Datos invalidos";

//            try
//            {

//                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {
//                    try
//                    {
//                        var CitasDeportivaExiste = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdCitaPasaporte);
//                        if (CitasDeportivaExiste != null)
//                        {


//                            CitasDeportivaExiste.EstadoPasaporte = "CANCELADO";

//                        }

//                        db.SaveChanges();

//                        Retorno.Error = false;
//                        Retorno.mensaje = "Actualizado";


//                    }
//                    catch (Exception ex)
//                    {
//                        Retorno.Error = true;
//                        Retorno.mensaje = "Error al Actualizar";
//                    }




//                }
//            }
//            catch (Exception ex)
//            {
//                String Error = ex.Message;
//                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
//                Retorno.Error = true;
//                Retorno.mensaje = "Error al agregar ";
//            }
//            return Json(Retorno, JsonRequestBehavior.AllowGet);
//        }
//        [HttpGet]
//        public JsonResult GetListCitasPasaporte()
//        {
//            Respuesta ret = new Respuesta();
//            string result = "";
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {

//                var CitasPasaport = db.CitasPasaporte.Where(w => w.EstadoPasaporte == "ASIGNADA").ToList();
//                foreach (var item in CitasPasaport)
//                {

//                }

//                ret.objeto = CitasPasaport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

//                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
//                //new JsonSerializerSettings
//                //{
//                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
//                //});

//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }
        
//        [HttpGet]
//        public JsonResult GetListConsultaCitasPasaporte()
//        {
//            Respuesta ret = new Respuesta();
//            string result = "";
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {

//                var CitasPasaport = db.CitasPasaporte.Where(w => w.EstadoPasaporte == "TRAMITADA").ToList();
//                foreach (var item in CitasPasaport)
//                {

//                }

//                ret.objeto = CitasPasaport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

//                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
//                //new JsonSerializerSettings
//                //{
//                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
//                //});

//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }

//        [HttpGet]
//        public JsonResult GetListCitasPasaporteImcumplida()
//        {
//            Respuesta ret = new Respuesta();
//            string result = "";
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {

//                var CitasPasaportImcumplidas = db.CitasPasaporte.Where(w => w.EstadoPasaporte == "NO ASISTIO").ToList();
//                foreach (var item in CitasPasaportImcumplidas)
//                {

//                }

//                ret.objeto = CitasPasaportImcumplidas; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

//                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
//                //new JsonSerializerSettings
//                //{
//                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
//                //});

//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }

//        [HttpGet]
//        public JsonResult GetListCitasPasaporteCancelada()
//        {
//            Respuesta ret = new Respuesta();
//            string result = "";
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {

//                var CitasPasaport = db.CitasPasaporte.Where(w => w.EstadoPasaporte == "CANCELADO").ToList();
//                foreach (var item in CitasPasaport)
//                {

//                }

//                ret.objeto = CitasPasaport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

//                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
//                //new JsonSerializerSettings
//                //{
//                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
//                //});

//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }
//        [HttpGet]
//        public JsonResult GetListCitasPasaporteEntregado()
//        {
//            Respuesta ret = new Respuesta();
//            string result = "";
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {

//                var CitasPasaportEntregado = db.CitasPasaporte.Where(w => w.EstadoPasaporte == "ENTREGADO").ToList();
//                foreach (var item in CitasPasaportEntregado)
//                {

//                }

//                ret.objeto = CitasPasaportEntregado; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

//                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
//                //new JsonSerializerSettings
//                //{
//                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
//                //});

//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }
//        [HttpGet]
//        public JsonResult GetCitasPasaporteById(int IdCitasPaspor)
//        {
//            Respuesta ret = new Respuesta();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {

//                var CitasDepoUpdate = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdCitasPaspor) ;
//                if (CitasDepoUpdate != null)
//                {
//                }


//                ret.objeto = CitasDepoUpdate;



//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }


//        [HttpGet]
//        public ActionResult Agregar(bool ViewFree = false)
//        {
//            ViewBag.ViewFree = ViewFree;
//            return View();

//        }




//        [HttpPost]
//        //[ValidateAntiForgeryToken]
//        public JsonResult Agregar (ObjCitasPasaporte a)
//        {
//            Respuesta Retorno = new Respuesta();

//            if (!ModelState.IsValid)
//               Retorno.mensaje="Datos invalidos";

          

//            try
//            {

//                using (
                    
//                    Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {
//                    var EstadoCitaDeportivaExiste = db.CitasPasaporte.FirstOrDefault(w => w.EstadoPasaporte == "ASIGNADA" && w.Fecha == a.CitasPasaport.Fecha  && w.Hora  == a.CitasPasaport.Hora && w.Minutos==a.CitasPasaport.Minutos );
//                    if (EstadoCitaDeportivaExiste == null)
//                    {
//                        IPHostEntry host;
//                        string localIP = "";
//                        host = Dns.GetHostEntry(Dns.GetHostName());
//                        foreach (IPAddress ip in host.AddressList)
//                        {
//                            if (ip.AddressFamily.ToString() == "InterNetwork")
//                            {
//                                localIP = ip.ToString();
//                            }
//                        }

//                        a.CitasPasaport.DireccionIp = localIP;

//                        //int cedula = int.Parse(a.CitasPasaport.OficinaPasaporte);
//                        //var DatosSucursal = db.Sucursal.FirstOrDefault(w => w.CodSucursal == cedula);
//                        a.CitasPasaport.FechaExpedicionDocumento = Convert.ToDateTime(a.CitasPasaport.FechaExpedicionDocumento.Value.ToShortDateString());
//                        a.CitasPasaport.Fecha = Convert.ToDateTime(a.CitasPasaport.Fecha.Value.ToShortDateString());
//                        a.CitasPasaport.EstadoPasaporte= "ASIGNADA";
//                        a.CitasPasaport.FechaRegistro = DateTime.Now;
//                        a.CitasPasaport.FechaEstado = DateTime.Now;
//                        a.CitasPasaport.UsuarioRegistra = localIP;
//                        db.CitasPasaporte.Add(a.CitasPasaport);
//                        db.SaveChanges();
//                        Retorno.Error = false;
//                        Retorno.mensaje = "Oficina Pasaporte Gobernacion del Cesar.! ";
//                        Utilidades.SendEmail(a.CitasPasaport.CorreoPasaporte, a.CitasPasaport.NombresPasaporte, a.CitasPasaport.ApellidosPasaporte, a.CitasPasaport.IdCitasPasaporte,(long) a.CitasPasaport.NumIdentificacion, (DateTime)a.CitasPasaport.Fecha, (int)a.CitasPasaport.Hora, (int) a.CitasPasaport.Minutos);
                        
//                        //Utilidades.SendEmail("Hola,"+ Retorno.mensaje, a.CitasPasaport.CorreoPasaporte, a.CitasPasaport.NombresPasaporte, a.CitasPasaport.ApellidosPasaporte);
//                    }
//                    else
//                    {
//                        Retorno.Error = false;
//                        Retorno.mensaje = "Error! ya existe una cita creada para esta hora";
//                    }



//                }
//            }
//            catch (Exception ex)
//            {
//                String Error = ex.Message;
//                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
//                Retorno.Error = true;
//                Retorno.mensaje = "Debes completar todos los registros de la cita!";
//            }
//            return Json(Retorno, JsonRequestBehavior.AllowGet);
//        }


//        [HttpGet]
//        public ActionResult EditarCitasPasaporte(bool ViewFree = false)
//        {
//            ViewBag.ViewFree = ViewFree;
//            return View();

//        }

//        [HttpPost]
//        //[ValidateAntiForgeryToken]
//        public JsonResult EditarCitasPasaporte(ObjCitasPasaporte a)
//        {
//            Respuesta Retorno = new Respuesta();
//            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
//            //if (!ModelState.IsValid)
//            //    Retorno.mensaje="Datos invalidos";

//            try
//            {

//                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {
//                    try
//                    {
//                        var CitasDeportivaExiste = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == a.CitasPasaport.IdCitasPasaporte);
//                        if (CitasDeportivaExiste != null)
//                        {

//                            CitasDeportivaExiste.IdCitasPasaporte = a.CitasPasaport.IdCitasPasaporte;
//                            CitasDeportivaExiste.Fecha = a.CitasPasaport.Fecha;
//                            CitasDeportivaExiste.Hora = a.CitasPasaport.Hora;
//                            CitasDeportivaExiste.Minutos = a.CitasPasaport.Minutos;


//                        }

//                        db.SaveChanges();

//                        Retorno.Error = false;
//                        Retorno.mensaje = "Actualizado";


//                    }
//                    catch (Exception ex)
//                    {
//                        Retorno.Error = true;
//                        Retorno.mensaje = "Error al Actualizar";
//                    }




//                }
//            }
//            catch (Exception ex)
//            {
//                String Error = ex.Message;
//                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
//                Retorno.Error = true;
//                Retorno.mensaje = "Error al agregar nutricionista";
//            }
//            return Json(Retorno);
//        }

//        [HttpGet]
//        public JsonResult Eliminar(int IdCitasPaspor)
//        {
//            Respuesta respuesta = new Respuesta();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {
//                try
//                {
//                    var CitasMedicasDepoExiste = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdCitasPaspor);
//                    if (CitasMedicasDepoExiste != null)
//                    {
//                    }

//                    db.CitasPasaporte.Remove(CitasMedicasDepoExiste);
//                    db.SaveChanges();
//                    respuesta.Error = false;

//                }
//                catch (Exception ex)
//                {
//                    respuesta.mensaje = ex.Message;
//                    respuesta.Error = true;
//                }


//            }

//            return Json(respuesta, JsonRequestBehavior.AllowGet);
//        }
//    }
//}