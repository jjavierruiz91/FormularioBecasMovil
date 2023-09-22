//using BIOMEDICO.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;

//namespace BIOMEDICO.Controllers
//{
//    public class SucursalController : Controller
//    {
//        // GET: Usuarios
//        public ActionResult Sucursal()
//        {
//            return View();

//        }
//        public ActionResult ListaSucursalPasaporte()
//        {
//            return View();
//        }
//        public struct ObjSucursalPasaporte
//        {
//            public Sucursal SucursadlPasport { get; set; }

//        }

//        public struct Respuesta
//        {

//            public string mensaje { get; set; }
//            public bool Error { get; set; }
//            public Object objeto { get; set; }

//        }
//        //[HttpGet]
//        //public JsonResult BuscarDeportista(long cedula)
//        //{
//        //    var DatosdEportista = new Deportistas();
//        //    using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
//        //    {
//        //        DatosdEportista = db.Deportistas.FirstOrDefault(w => w.NumIdentificacion == cedula);
//        //    }
//        //    return Json(DatosdEportista, JsonRequestBehavior.AllowGet);
//        //}
//        public struct HorariosSucursales
//        {
//            public string CodSucursal { get; set; }
//            public string HorarioUsados { get; set; }
//            public DateTime Fecha { get; set; }
//            public int Hora { get; set; }
//            public int Minutos { get; set; }

//        }

//        [HttpGet]
//        public JsonResult GetListSucursalesPasaporte()
//        {
//            Respuesta ret = new Respuesta();


//            try
//            {
//                string result = "";
//                List<AgendarCitas> Listaagenda = new List<AgendarCitas>();
//                List<CitasPasaporte> ListaPasaporte = new List<CitasPasaporte>();
//                List<HorariosSucursales> listaHorario = new List<HorariosSucursales>();
//                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {
//                    var SucursadlPasport = db.Sucursal.ToList();
//                    var CitasDeport = db.AgendarCitas.ToList();
//                    foreach (var item in SucursadlPasport)
//                    {
//                        var agendas = db.AgendarCitas.Where(w => w.CedSucursalCitas == item.CodSucursal.ToString()).ToList();
//                        if (agendas.Count > 0)
//                        {
//                            agendas = agendas.Where(w => w.FechaCitas.Value.Date >= DateTime.Now.Date).ToList();
//                            ; Listaagenda.AddRange(agendas);
//                        }

//                    }


//                    foreach (var item in Listaagenda)
//                    {
//                        int HOraInt = Convert.ToDateTime(item.HoraIniciocitas).Hour;
//                        int Horafin = Convert.ToDateTime(item.HoraFinCitas).Hour;
//                        int NumCitasAgendas = (int)item.NumCitasAgenda;

//                        int SumeMinutos = (Horafin - HOraInt) * 60;

//                        int SumeMinutos2 = SumeMinutos / NumCitasAgendas;
//                        //int NUmCitas = SumeMinutos / 20;
//                        int NUmCitas = NumCitasAgendas;
//                        HorariosSucursales Horario = new HorariosSucursales();
//                        int Contandorminutos = 0;
//                        for (int i = 0; i < NUmCitas; i++)
//                        {
//                            if (i == 0)
//                            {
//                                Horario = new HorariosSucursales
//                                {
//                                    CodSucursal = item.CedSucursalCitas,
//                                    Fecha = Convert.ToDateTime(item.FechaCitas).Date,
//                                    Hora = Convert.ToDateTime(item.HoraIniciocitas).Hour,
//                                    Minutos = Convert.ToDateTime(item.HoraIniciocitas).Minute,
//                                };
//                            }
//                            else
//                            {
//                                Contandorminutos += SumeMinutos2 ;
//                                DateTime NewhOra = Convert.ToDateTime(item.HoraIniciocitas).AddMinutes(Contandorminutos);
//                                Horario = new HorariosSucursales
//                                {
//                                    CodSucursal = item.CedSucursalCitas,
//                                    Fecha = Convert.ToDateTime(item.FechaCitas).Date,
//                                    Hora = NewhOra.Hour,
//                                    Minutos = NewhOra.Minute,
//                                };
//                            }
//                            listaHorario.Add(Horario);
//                        }

//                    }


//                    #region Filtro horarios

//                    List<HorariosSucursales> listaHorarioFiltrado = new List<HorariosSucursales>();
//                    var CitasPasaport = db.CitasPasaporte.ToList().Where(w => w.Fecha.Value.Date >= DateTime.Now.Date).ToList();
//                    foreach (var item in listaHorario)
//                    {
//                        var Citasagendas = CitasPasaport.Where(w => w.Hora == item.Hora && w.Minutos == item.Minutos && w.Fecha == item.Fecha).ToList();
//                        if (Citasagendas.Count == 0)
//                        {
//                            listaHorarioFiltrado.Add(item);
//                        }

//                    }

//                    #endregion



//                    ret.objeto = new { DatosSucursal = SucursadlPasport, ListaHorario = listaHorarioFiltrado }; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

//                    //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
//                    //new JsonSerializerSettings
//                    //{
//                    //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
//                    //});

//                }
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine(ex.Message);
//            }



//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }

//        [HttpGet]
//        public JsonResult GetSucursaPasaporteById(int IdsucursarPasapor)
//        {
//            Respuesta ret = new Respuesta();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {
//                var SucursalPasaporUpdate = db.Sucursal.FirstOrDefault(w => w.IdSucursal == IdsucursarPasapor);
//                if (SucursalPasaporUpdate != null)
//                {
//                }


//                ret.objeto = SucursalPasaporUpdate;



//            }

//            return Json(ret, JsonRequestBehavior.AllowGet);
//        }


//        [HttpGet]
//        public ActionResult Agregar()
//        {

//            return View();

//        }




//        [HttpPost]
//        //[ValidateAntiForgeryToken]
//        public JsonResult Agregar(ObjSucursalPasaporte a)
//        {
//            Respuesta Retorno = new Respuesta();

//            //if (!ModelState.IsValid)
//            //    Retorno.mensaje="Datos invalidos";

//            try
//            {

//                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//                {

//                    a.SucursadlPasport.CodSucursal = Int32.Parse("99998741");
//                    db.Sucursal.Add(a.SucursadlPasport);
//                    db.SaveChanges();


//                }
//            }
//            catch (Exception ex)
//            {
//                String Error = ex.Message;
//                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
//                Retorno.Error = true;
//                Retorno.mensaje = "mensaje";
//            }
//            return Json(Retorno, JsonRequestBehavior.AllowGet);
//        }

//        [HttpPost]
//        //[ValidateAntiForgeryToken]
//        public JsonResult Actualizar(ObjSucursalPasaporte a)
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
//                        var SucursalPasaporExiste = db.Sucursal.FirstOrDefault(w => w.IdSucursal == a.SucursadlPasport.IdSucursal);
//                        if (SucursalPasaporExiste != null)
//                        {

//                            SucursalPasaporExiste.IdSucursal = a.SucursadlPasport.IdSucursal;
//                            SucursalPasaporExiste.CodSucursal = a.SucursadlPasport.CodSucursal = Int32.Parse("99998741"); ;
//                            SucursalPasaporExiste.EstadoSucursal = a.SucursadlPasport.EstadoSucursal;
//                            SucursalPasaporExiste.EspecialidadSucursal = a.SucursadlPasport.EspecialidadSucursal;
//                            SucursalPasaporExiste.Direcccion = a.SucursadlPasport.Direcccion;
//                            SucursalPasaporExiste.Telefono = a.SucursadlPasport.Telefono;
//                            SucursalPasaporExiste.Correo = a.SucursadlPasport.Correo;


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
//        public JsonResult Eliminar(int idMedicoDep)
//        {
//            Respuesta respuesta = new Respuesta();
//            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

//            {
//                try
//                {
//                    var SucursalPasaporExiste = db.Sucursal.FirstOrDefault(w => w.IdSucursal == idMedicoDep);
//                    if (SucursalPasaporExiste != null)
//                    {
//                    }

//                    db.Sucursal.Remove(SucursalPasaporExiste);
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