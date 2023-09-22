using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class AgendarCitasController : Controller
    {
        // GET: AgendarCitas
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult ListaAgendaDeportiva()
        {
            return View();
        }
        public struct ObjAgendaDeportiva
        {
            public AgendarCitas CitasDeport { get; set; }
            public DateTime FechaInit { get; set; }
            public DateTime FechaFin { get; set; }
            public List<Agendalist> ListTestCitasTemporal { get; set; }

        }

        public struct Agendalist
        {
            public Nullable<System.DateTime> HoraIniciocitas { get; set; }
            public Nullable<System.DateTime> HoraFinCitas { get; set; }
            public DateTime FechaInit { get; set; }
            public DateTime FechaFin { get; set; }
            public Nullable<int> NumCitasAgenda { get; set; }
        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListaAgendaDeportiva()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {

                var CitasDeport = db.AgendarCitas.ToList().OrderByDescending(o => o.IdAgendarCitas);
                foreach (var item in CitasDeport)
                {

                }

                ret.objeto = CitasDeport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetAgendaCitasDeportivaById(int IdAgendaDepor)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var AgendaDepoUpdate = db.AgendarCitas.FirstOrDefault(w => w.IdAgendarCitas == IdAgendaDepor);
                if (AgendaDepoUpdate != null)
                {
                }


                ret.objeto = AgendaDepoUpdate;



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
        public JsonResult Agregar(ObjAgendaDeportiva a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    foreach (var item in a.ListTestCitasTemporal)
                    {
                        double DiffDays = (item.FechaFin - item.FechaInit).TotalDays;
                        for (int i = 0; i < DiffDays + 1; i++)
                        {
                            DateTime Fechacita = item.FechaInit.AddDays(i);

                            if (Fechacita.DayOfWeek == DayOfWeek.Saturday || Fechacita.DayOfWeek == DayOfWeek.Sunday)
                            {
                                continue;
                            }

                            AgendarCitas citas = new AgendarCitas
                            {
                                CedSucursalCitas = "99998741",
                                FechaCitas = Fechacita,
                                HoraFinCitas = item.HoraFinCitas,
                                HoraIniciocitas = item.HoraIniciocitas,
                                NumCitasAgenda = item.NumCitasAgenda
                            };


                            db.AgendarCitas.Add(citas);



                            //a.CitasDeport.FechaCitas = Fechacita;
                            //a.CitasDeport.CedSucursalCitas = "99998741";
                            // db.AgendarCitas.Add(a.CitasDeport);
                            db.SaveChanges();
                        }
                    }






                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar agenda de citas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjAgendaDeportiva a)
        {
            Respuesta Retorno = new Respuesta();

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    try
                    {
                        var AgendaCitasDeportivaExiste = db.AgendarCitas.FirstOrDefault(w => w.IdAgendarCitas == a.CitasDeport.IdAgendarCitas);
                        if (AgendaCitasDeportivaExiste != null)
                        {

                            AgendaCitasDeportivaExiste.IdAgendarCitas = a.CitasDeport.IdAgendarCitas;
                            AgendaCitasDeportivaExiste.CedSucursalCitas = "99998741";
                            AgendaCitasDeportivaExiste.HoraIniciocitas = a.CitasDeport.HoraIniciocitas;
                            AgendaCitasDeportivaExiste.HoraFinCitas = a.CitasDeport.HoraFinCitas;
                            AgendaCitasDeportivaExiste.FechaCitas = a.CitasDeport.FechaCitas;
                            AgendaCitasDeportivaExiste.NumCitasAgenda = a.CitasDeport.NumCitasAgenda;


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
            return Json(Retorno);
        }


        [HttpGet]
        public JsonResult Eliminar(int idAgendarCitaDep)
        {
            Respuesta respuesta = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                try
                {
                    var AgendarCitaDepoExiste = db.AgendarCitas.FirstOrDefault(w => w.IdAgendarCitas == idAgendarCitaDep);
                    if (AgendarCitaDepoExiste != null)
                    {
                    }

                    db.AgendarCitas.Remove(AgendarCitaDepoExiste);
                    db.SaveChanges();
                    respuesta.Error = false;

                }
                catch (Exception ex)
                {
                    respuesta.mensaje = ex.Message;
                    respuesta.Error = true;
                }


            }

            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

    }
}