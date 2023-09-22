using BIOMEDICO.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class BecasMovilController : Controller

        
    {
        // GET: BecasMovil
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaBecasMovil()
        {
            return View();
        }
        public struct ObjBecasMovil
        {
            public BecasMovil BecasMovilSport { get; set; }

        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }
        [HttpGet]
        public JsonResult GetListBecasMovil()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {

                var BecasMovilSport = db.BecasMovil.ToList();
                foreach (var item in BecasMovilSport)
                {

                }

                ret.objeto = BecasMovilSport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }
            var jsonResult = Json(ret, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = int.MaxValue;
            return jsonResult;
            //return Json(ret, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult BuscarCedulaPass(long Identificacion)
        {
            var DatosBecasMovil = new BecasMovil();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                DatosBecasMovil = db.BecasMovil.FirstOrDefault(w => w.NumeroDocumento == Identificacion);
            }
            return Json(DatosBecasMovil, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult BuscarCitas(long Ducumento)
        {
            Respuesta respuesta = new Respuesta();

            var DatosBecasMovil = new BecasMovil();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                try
                {
                    DatosBecasMovil = db.BecasMovil.FirstOrDefault(w => w.NumeroDocumento == Ducumento);
                    if (DatosBecasMovil == null)
                    {
                        respuesta.Error = false;
                        respuesta.mensaje = "No existe el registro";
                    }
                    else
                    {
                        respuesta.Error = false;
                        respuesta.objeto = DatosBecasMovil;
                    }
                }
                catch (Exception ex)
                {
                    respuesta.mensaje = ex.Message;
                    respuesta.Error = true;
                }

            }
            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Agregar(bool ViewFree = false)
        {
            ViewBag.ViewFree = ViewFree;
            return View();

        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjBecasMovil a)
        {
            Respuesta Retorno = new Respuesta();

            if (!ModelState.IsValid)
                Retorno.mensaje = "Datos invalidos";



            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    //a.BecasMovilSport.TipoDocumentoPdf = Convert.ToBase64String(fileByte);
                    a.BecasMovilSport.FechaRegistro = DateTime.Now;
                    db.BecasMovil.Add(a.BecasMovilSport);
                    db.SaveChanges();

                    //una vez registres la informacion del usuario creacion el directorio
                    // con nombre de el numero de documento
                    //falta definir en que ubiacion quieres que se guarden las carpetas
                    string basePath = AppDomain.CurrentDomain.BaseDirectory;
                    string path = Path.Combine(basePath, "ArchivosPDF", $"{a.BecasMovilSport.NumeroDocumento}");
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    System.IO.File.WriteAllBytes($"{path}/{a.BecasMovilSport.NumeroDocumento}-documento.pdf", Convert.FromBase64String(a.BecasMovilSport.TipoDocumentoPdf));
                    System.IO.File.WriteAllBytes($"{path}/{a.BecasMovilSport.NumeroDocumento}-sisben.pdf", Convert.FromBase64String(a.BecasMovilSport.NivelSisbenPdf));
                    System.IO.File.WriteAllBytes($"{path}/{a.BecasMovilSport.NumeroDocumento}-escolaridad.pdf", Convert.FromBase64String(a.BecasMovilSport.NivelEscolaridadPdf));
                    // por carpeta ejempo sisben, docuemntos y cada una con su identificacion
                    //crea un meet para hablar yo me uno enviado patron

                    Retorno.Error = false;
                    Retorno.mensaje = "Formulario Becas Movil.! ";


                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Debes completar todos los registros del formulario!";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult EditarBecasMovil(bool ViewFree = false)
        {
            ViewBag.ViewFree = ViewFree;
            return View();

        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult EditarBecasMovil(ObjBecasMovil a)
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
                        var BecasMovilExiste = db.BecasMovil.FirstOrDefault(w => w.IdBecasMovil == a.BecasMovilSport.IdBecasMovil);
                        if (BecasMovilExiste != null)
                        {

                            BecasMovilExiste.IdBecasMovil = a.BecasMovilSport.IdBecasMovil;
                            BecasMovilExiste.NombreBecasMovil = a.BecasMovilSport.NombreBecasMovil;
                            BecasMovilExiste.ApellidosBecasMovil = a.BecasMovilSport.ApellidosBecasMovil;
                            BecasMovilExiste.TipoDocumento = a.BecasMovilSport.TipoDocumento;
                            BecasMovilExiste.NumeroDocumento = a.BecasMovilSport.NumeroDocumento;
                            BecasMovilExiste.TipoDocumento = a.BecasMovilSport.TipoDocumento;
                            BecasMovilExiste.NumeroDocumento = a.BecasMovilSport.NumeroDocumento;
                            BecasMovilExiste.TipoDocumentoPdf = a.BecasMovilSport.TipoDocumentoPdf;
                            BecasMovilExiste.CorreoElectronico = a.BecasMovilSport.CorreoElectronico;
                            BecasMovilExiste.NumeroContacto = a.BecasMovilSport.NumeroContacto;
                            BecasMovilExiste.Direccion = a.BecasMovilSport.Direccion;
                            BecasMovilExiste.NivelSisbenPdf = a.BecasMovilSport.NivelSisbenPdf;
                            BecasMovilExiste.NivelEscolaridadPdf = a.BecasMovilSport.NivelEscolaridadPdf;
                            BecasMovilExiste.MunicipioResidencia = a.BecasMovilSport.MunicipioResidencia;
                            BecasMovilExiste.LugarNacimiento = a.BecasMovilSport.LugarNacimiento;
                            BecasMovilExiste.TipoPoblacion = a.BecasMovilSport.TipoPoblacion;
                            BecasMovilExiste.TipoSisben = a.BecasMovilSport.TipoSisben;
                            BecasMovilExiste.TipoEscolaridad = a.BecasMovilSport.TipoEscolaridad;
                            BecasMovilExiste.FechaRegistro = DateTime.Now;



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
                Retorno.mensaje = "Error al agregar formulario becas movil";
            }
            return Json(Retorno);
        }

        [HttpGet]
        public JsonResult Eliminar(int IdBecasMovil)
        {
            Respuesta respuesta = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                try
                {
                    var BecasMovilExiste = db.BecasMovil.FirstOrDefault(w => w.IdBecasMovil == IdBecasMovil);
                    if (BecasMovilExiste != null)
                    {
                    }

                    db.BecasMovil.Remove(BecasMovilExiste);
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


        public static string SavePdfFile(string PdfData, string FileName)
        {
            string Respuesta = "";

            try
            {
                if (!string.IsNullOrEmpty(PdfData) && PdfData.Contains(","))
                {
                    PdfData = PdfData.Substring(PdfData.IndexOf(",") + 1);


                }

                var filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/images/DocumentosPdf"); // Ruta donde se guardarán los archivos PDF
                var pdfPath = Path.Combine(filePath, FileName);


                byte[] pdfBytes = Convert.FromBase64String(PdfData);

                if (System.IO.File.Exists(pdfPath))
                {
                    System.IO.File.Delete(pdfPath);
                }

                System.IO.File.WriteAllBytes(pdfPath, pdfBytes);

                Respuesta = pdfPath;
            }
            catch (Exception ex)
            {
                // Registra el mensaje de excepción para depuración
                Console.WriteLine("Excepción: " + ex.ToString());
                Respuesta = "";
            }


            return Respuesta;
        }

    }
}