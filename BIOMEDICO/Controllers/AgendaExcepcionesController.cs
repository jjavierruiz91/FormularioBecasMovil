using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class AgendaExcepcionesController : Controller
    {
        // GET: AgendaExcepciones
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaAgendaExcepciones()
        {
            return View();
        }

        public ActionResult ListaConsultaAgendaExcepcionesTramitadas()
        {
            return View();
        }
        public ActionResult ListaConsultaAgendaExcepcionesEntregadas()
        {
            return View();
        }
        public ActionResult BuscarAgendaExcepciones()
        {

            return View();
        }
        [HttpGet]
        public JsonResult GetListConsultaAgendaExcepciones()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var AgendaExcepcionesPassport = db.AgendaExcepciones.ToList().OrderByDescending(o => o.IdAgendaExcepciones);


                ret.objeto = AgendaExcepcionesPassport;

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        public struct ObjCitasAgendaExcepciones
        {
            public AgendaExcepciones AgendaExcepcionesPassport { get; set; }

        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }
        

        [HttpGet]
        //[ValidateAntiForgeryToken]
        public JsonResult ActualizarEstado(int IdCitaAgendaExcepciones)
        {
            Respuesta Retorno = new Respuesta();
            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    try
                    {
                        var CitasAgendaExcepcionesExiste = db.AgendaExcepciones.FirstOrDefault(w => w.IdAgendaExcepciones == IdCitaAgendaExcepciones);
                        if (CitasAgendaExcepcionesExiste != null)
                        {


                            CitasAgendaExcepcionesExiste.EstadoAgendaExcepciones = "TRAMITADA";

                        }

                        db.SaveChanges();

                        Retorno.Error = false;
                        Retorno.mensaje = "Actualizado";


                    }
                    catch (Exception ex)
                    {
                        Retorno.Error = true;
                        Retorno.mensaje = "Error al Actualizar";
                    }




                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar ";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        //[ValidateAntiForgeryToken]
        public JsonResult ActualizarEstadoTramitada(int IdCitaAgendaExcepciones)
        {
            Respuesta Retorno = new Respuesta();
            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    try
                    {
                        var CitasAgendaExcepcionesExiste = db.AgendaExcepciones.FirstOrDefault(w => w.IdAgendaExcepciones == IdCitaAgendaExcepciones);
                        if (CitasAgendaExcepcionesExiste != null)
                        {


                            CitasAgendaExcepcionesExiste.EstadoAgendaExcepciones = "ENTREGADO";

                        }

                        db.SaveChanges();

                        Retorno.Error = false;
                        Retorno.mensaje = "Actualizado";


                    }
                    catch (Exception ex)
                    {
                        Retorno.Error = true;
                        Retorno.mensaje = "Error al Actualizar";
                    }




                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar ";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetListAgendaExcepciones()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {

                var AgendaExcepcionesPassport = db.AgendaExcepciones.Where(w => w.EstadoAgendaExcepciones == "ASIGNADA").ToList();
                foreach (var item in AgendaExcepcionesPassport)
                {

                }

                ret.objeto = AgendaExcepcionesPassport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult GetListAgendaExcepcionesTramitadas()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {

                var AgendaExcepcionesPass = db.AgendaExcepciones.Where(w => w.EstadoAgendaExcepciones == "TRAMITADA").ToList();
                foreach (var item in AgendaExcepcionesPass)
                {

                }

                ret.objeto = AgendaExcepcionesPass; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetListAgendaExcepcionesEntregado()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {

                var AgendaExcepcionesEntregadoPass = db.AgendaExcepciones.Where(w => w.EstadoAgendaExcepciones == "ENTREGADO").ToList();
                foreach (var item in AgendaExcepcionesEntregadoPass)
                {

                }

                ret.objeto = AgendaExcepcionesEntregadoPass; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetAgendaExcepcionesById(int IDAgendaExcepciones)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {

                var CitasAgendaExcepcionesPassportUpdate = db.AgendaExcepciones.FirstOrDefault(w => w.IdAgendaExcepciones == IDAgendaExcepciones);
                if (CitasAgendaExcepcionesPassportUpdate != null)
                {
                }


                ret.objeto = CitasAgendaExcepcionesPassportUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }


        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjCitasAgendaExcepciones a)
        {
            Respuesta Retorno = new Respuesta();

            
            try
            {

                     using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                    {
                    
                        IPHostEntry host;
                        string localIP = "";
                        host = Dns.GetHostEntry(Dns.GetHostName());
                        foreach (IPAddress ip in host.AddressList)
                        {
                            if (ip.AddressFamily.ToString() == "InterNetwork")
                            {
                                localIP = ip.ToString();
                            }
                        }

                        a.AgendaExcepcionesPassport.DireccionIpAgendaExcepciones = localIP;

                        //int cedula = int.Parse(a.CitasPasaport.OficinaPasaporte);
                        //var DatosSucursal = db.Sucursal.FirstOrDefault(w => w.CodSucursal == cedula);
                        a.AgendaExcepcionesPassport.EstadoAgendaExcepciones = "ASIGNADA";
                        a.AgendaExcepcionesPassport.FechaRegistroAgendaExcepciones = DateTime.Now;
                        a.AgendaExcepcionesPassport.FechaEstadoAgendaExcepciones = DateTime.Now;
                        a.AgendaExcepcionesPassport.UsuarioRegistraAgendaExcepciones = localIP;
                        db.AgendaExcepciones.Add(a.AgendaExcepcionesPassport);
                        db.SaveChanges();
                       
                 
                     }
            }
                catch (Exception ex)
                {
                    String Error = ex.Message;
                    //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                    Retorno.Error = true;
                    Retorno.mensaje = "Error al agregar";
                }
                return Json(Retorno, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjCitasAgendaExcepciones a)
        {
            Respuesta Retorno = new Respuesta();
            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    try
                    {
                        var CitasEstadoAgendaExcepcionesCitaExiste = db.AgendaExcepciones.FirstOrDefault(w => w.IdAgendaExcepciones == a.AgendaExcepcionesPassport.IdAgendaExcepciones);
                        if (CitasEstadoAgendaExcepcionesCitaExiste != null)
                        {

                            CitasEstadoAgendaExcepcionesCitaExiste.IdAgendaExcepciones = a.AgendaExcepcionesPassport.IdAgendaExcepciones;

                            CitasEstadoAgendaExcepcionesCitaExiste.EstadoAgendaExcepciones = "TRAMITADA";

                        }

                        db.SaveChanges();

                        Retorno.Error = false;
                        Retorno.mensaje = "Actualizado";


                    }
                    catch (Exception ex)
                    {
                        Retorno.Error = true;
                        Retorno.mensaje = "Error al Actualizar";
                    }




                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar cita pasaporte";
            }
            return Json(Retorno);
        }

        //[HttpGet]
        //public JsonResult Eliminar(int IdCitasPaspor)
        //{
        //    Respuesta respuesta = new Respuesta();
        //    using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

        //    {
        //        try
        //        {
        //            var CitasMedicasDepoExiste = db.CitasPasaporte.FirstOrDefault(w => w.IdCitasPasaporte == IdCitasPaspor);
        //            if (CitasMedicasDepoExiste != null)
        //            {
        //            }

        //            db.CitasPasaporte.Remove(CitasMedicasDepoExiste);
        //            db.SaveChanges();
        //            respuesta.Error = false;

        //        }
        //        catch (Exception ex)
        //        {
        //            respuesta.mensaje = ex.Message;
        //            respuesta.Error = true;
        //        }


        //    }

        //    return Json(respuesta, JsonRequestBehavior.AllowGet);
        //}

    }
}