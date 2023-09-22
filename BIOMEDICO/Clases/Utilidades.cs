using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Web;
using Microsoft.Reporting.Map.WebForms.BingMaps;
using System.Security.Cryptography;

namespace BIOMEDICO.Clases
{
    public class Utilidades
    {
        static string smtpAddress = "smtp.office365.com";
        static int portNumber = 587;
        static bool enableSSL = true;
        static string emailFromAddress = "pasaportegobcesar@outlook.com"; //Sender Email Address  mooncodetest@outlook.com
        static string password = "Sistemas2021"; //Sender Password #Netcoresmtp


        public static  void SendEmail( string emailTo , string NombresPasaporte ,  string ApellidosPasaporte, int IdCitasPasaporte, long NumIdentificacion, DateTime Fecha, int Hora, int Minutos)
        {
            string emailToAddress = emailTo;

            string subject = "OFICINA PASAPORTE GOBERNACIÓN DEL CESAR";
            string body = $@"<html><body><div style='color:black'>
                                                
                             

                                <strong> OFICINA PASAPORTE GOBERNACIÓN DEL CESAR </strong>
                                    </br>                                    
                                    </br>
                                    
                                     <strong> Hola, {NombresPasaporte} {ApellidosPasaporte}</strong>
                                <p> 
                        Su solicitud de cita para tramitar el pasaporte radicada con el número <strong> {IdCitasPasaporte}{NumIdentificacion} </strong> se encuentra agendada para el día {Fecha.Date.Day}-{Fecha.Date.Month}-{Fecha.Date.Year} a la hora {Hora}:{Minutos}  . 
                        Recuerde que la atención para el trámite inicia desde las 7:45am a 12:45 pm y de 2:45pm a 5:00 pm por orden de la cita agendada.

                    El  <strong> pasaporte ordinario  </strong> tiene un valor de $ 302.463 pesos colombianos ($121.463 que corresponden a Cancillería y $181.000 que corresponden al impuesto Departamental
                        y timbre Nacional), valor que puede ser cancelado en efectivo o con tarjeta crédito y/o débito. </br>

                    El  <strong> pasaporte ejecutivo  </strong> tiene un valor de $ 397.521 pesos colombianos ($216.521 que corresponden a Cancillería y $181.000 que corresponden al impuesto Departamental 
                        y timbre Nacional), valor que puede ser cancelado en efectivo o con tarjeta crédito y/o débito. </br>
                        Se debe diligenciar la <a href=""https://tramitesmre.cancilleria.gov.co/tramites/enlinea/registrarCiudadano.xhtml"" class=""btn-get-started"" target=""Black"">solicitud por medio electrónico</a> para agilizar el trámite en la oficina expedidora. (https://tramitesmre.cancilleria.gov.co/tramites/enlinea/registrarCiudadano.xhtml)

                         Agradecemos presentar esta comunicación impresa el día de la cita

                        <strong> Requisitos para mayores de edad </strong> </br>
                            <ol>
                              <li>Recuerde que el día de la cita debe acercarse personalmente en la oficina que selecciono y presentar los documentos solicitados para el trámite, 
                                    la toma de la fotografía, el registro de huellas y la firma.  <strong>No es necesario llevar fotos </strong></li> </br>
                              <li>Presentar original de la cédula de ciudadanía vigente, en formato válido, o:</li> </br>
                              <li>Contraseña por primera vez expedida por la Registraduría Nacional del Estado Civil y copia del registro civil de nacimiento expedido por el Notario, Registrador o Cónsul;</li> </br>
                              <li>Contraseña expedida por solicitud de duplicado o renovación de la cédula de ciudadanía emitida por la Registraduría Nacional del Estado Civil la cual debe estar acompañada de la consulta en línea del certificado de vigencia de la cédula adelantada por la oficina expedidora a través de la página web de la Registraduría Nacional del Estado Civil.</li> </br>
                            </ol>
                            <strong> Nota:  No se aceptará contraseña por solicitud de rectificación de cédula de ciudadanía  </strong></br>
                             <ol>
                                <li> Presentar pasaporte anterior, si lo tiene.</li> 
                                <li> En caso de pérdida o hurto del pasaporte, el solicitante solo deberá informar a la oficina expedidora dicha situación, bajo la gravedad de juramento.</li> 
                               <li>  Cuando la cédula de ciudadanía se obtuvo de manera extemporánea, es decir varios años después de alcanzar la mayoría de edad, 18 años, se deberán presentar los Registros civiles de nacimiento. La Oficina expedidora de pasaportes estudiará la documentación presentada de conformidad con lo dispuesto en el artículo 17 de la Resolución 6888 del 26 de noviembre de 2021.</li> 
                             </ol>
                        <strong> Requisitos para menores de edad </strong> </br>
                           <ol>
                              <li>El menor debe estar acompañado por uno de sus padres o su representante legal, quienes tendrán que identificarse con su cédula de ciudadanía en formato válido (amarilla con hologramas). Si estos se encuentran ausentes del lugar del trámite, podrán dar autorización a un tercero para efectuar la solicitud con el menor, cumpliendo con lo siguiente:</li> </br>

                              <li>Registro civil de defunción en caso de que uno de los padres del menor haya fallecido.</li> </br>
                              <li>Poder especial otorgado por los dos padres a un tercero, ante notario público o juez.</li> </br>
                              <li>En el exterior ante el Consulado, o en el exterior donde no exista Consulado de Colombia ante la autoridad competente del lugar, el cual debe ser debidamente apostillado o legalizado según sea el caso y traducido al español mediante traductor oficial, allegando copia de los documentos de identidad de los padres, para que éste adelante el trámite en compañía del menor.</li> </br>
                           </ol>
                           Una vez el menor de edad cuente con cita previa tanto el menor como el acompañante deben presentarse personalmente a la oficina seleccionada y aportar
                           los documentos requeridos para el trámite, la toma de la fotografía, el registro de huellas y la firma.   <strong>No es necesario llevar fotos </strong>  

                             <ol>
                                <li> Presentar copia auténtica del registro civil de nacimiento original del menor expedido por el Notario, Registrador o Cónsul, según el caso:</li> </br>
                                <li> Presentar pasaporte anterior si lo ha tramitado.</li> </br>
                                <li> En caso de pérdida o hurto del pasaporte, los padres del menor o su representante legal, solo deberán informar a la oficina expedidora dicha situación, bajo la gravedad de juramento.</li> </br>
                                <li> Presentar el original de la tarjeta de identidad colombiana si el menor tiene o es mayor a 7 años</li> </br>
                                <li> Presentar original de la cédula de ciudadanía en formato válido (amarilla con hologramas) del acompañante.</li> </br>
                              </ol>

                                <strong> Requisitos para mayores de edad nacionalizados </strong> </br>
                           <ol>
                              <li>Presentar original de la cédula de ciudadanía colombiana en formato válido (amarilla con hologramas).</li> </br>
                                    En caso de que el solicitante no tenga cédula de ciudadanía en formato válido, podrá presentar los siguientes documentos, de acuerdo a su caso:

                                    Contraseña por primera vez expedida por la Registraduría Nacional del Estado Civil, la cual debe tener foto y código QR.

                                    Contraseña expedida por solicitud de duplicado o renovación de la cédula de ciudadanía emitida por la Registraduría Nacional del Estado Civil, la cual debe tener foto, y código QR.

                                    No se aceptará contraseña por solicitud de rectificación de cédula de ciudadanía
                              <li>Presentar copia auténtica del registro civil de nacimiento original expedido por el Notario, Registrador o Cónsul.</li> </br>
                              <li>Cedula en físico del país de nacimiento o partida de nacimiento.</li> </br>
                              <li>Registro civil de la persona que le dio la nacionalidad o partida de bautismo (mamá o papá).</li> </br>                            
                              <li>Fotocopia de la cedula de la persona que le dio la nacionalidad</li> </br>

                           </ol>
                            Una vez el menor de edad cuente con cita previa tanto el menor como el acompañante deben presentarse personalmente a la oficina seleccionada y aportar los documentos requeridos para el trámite, la toma de la fotografía, el registro de huellas y la firma.   <strong>No es necesario llevar fotos </strong>   
                                <ol>
                                <li> Presentar copia auténtica del registro civil de nacimiento original del menor expedido por el Notario, Registrador o Cónsul, según el caso:</li> 
                                <li> Presentar pasaporte anterior si lo ha tramitado.</li> </br>
                                <li> En caso de pérdida o hurto del pasaporte, los padres del menor o su representante legal, solo deberán informar a la oficina expedidora dicha situación, bajo la gravedad de juramento.</li> 
                                <li> Presentar el original de la tarjeta de identidad colombiana si el menor tiene o es mayor a 7 años</li> 
                                <li> Presentar original de la cédula de ciudadanía en formato válido (amarilla con hologramas) del acompañante.</li> 
                                </ol>
                            <strong> Nota: Si los padres de la persona que va a tramitar pasaporte también tienen doble nacionalidad debe traer copia del registro civil y fotocopia de la cedula de los abuelos. </strong>
                                                       
                                <strong> Requisitos para menores de edad nacionalizados </strong> </br>
                                    El menor debe estar acompañado por uno de sus padres o su representante legal, quienes tendrán que identificarse con su cédula de ciudadanía en formato válido (amarilla con hologramas).
                           <ol>
                              <li>Presentar copia auténtica del registro civil de nacimiento colombiano del menor expedido por el Notario, Registrador o Cónsul, según el caso:</li> </br>
                                   <li>Presentar pasaporte anterior si lo ha tramitado.</li> </br>
                              <li>En caso de pérdida o hurto del pasaporte, los padres del menor o su representante legal, solo deberán informar a la oficina expedidora dicha situación, bajo la gravedad de juramento.</li> </br>
                              <li>Presentar partida de nacimiento original del país de nacimiento</li> </br>                            
                              <li>Presentar tarjeta de identidad en formato valido original colombiana si el menor tiene o es mayor a 7 años</li> </br>

                           </ol>
                                Contraseña expedida por solicitud de duplicado o renovación de la tarjeta de identidad emitida por la Registraduría Nacional del Estado Civil, la cual debe tener foto, y código QR.
                                No se aceptará contraseña por solicitud de rectificación
                             
                              
                                <li> Registro civil de la persona que le dio la nacionalidad o partida de bautismo (mamá o papá)</li> 
                                <li> Fotocopia de la cedula de la persona que le dio la nacionalidad</li> 
                                
                                <strong> Nota:  La oficina expedidora, de considerarlo necesario, podrá solicitar la presentación del certificado de nacionalidad, con el fin de verificar la identidad del solicitante. </strong>
                               </br> 
                            Cordialmente, </br> 



                            Oficina de Pasaporte </br> 
                            Gobernación del Cesar</br> 
                            Teléfono: + (575) 5748230 Ext 109</br> 
                            Celular: + (57) 3158677270</br> 
                            Valledupar – Cesar - Colombia</br> 
                            pasaportes@gobcesar.gov.co</br> 


</p> 


                            </br></div></body></html>";

            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(emailFromAddress, "Oficina Pasaporte Gobernacion del Cesar");
                mail.To.Add(emailToAddress);
                mail.Subject = subject;
                mail.Body = body;
                mail.IsBodyHtml = true;
                //mail.Attachments.Add(new Attachment("D:\\TestFile.txt"));//--Uncomment this to send any attachment  
                using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                {
                    smtp.Credentials = new NetworkCredential(emailFromAddress, password);
                    smtp.EnableSsl = enableSSL;
                    smtp.Send(mail);
                }
            }


        }

        public static Usuarios ActiveUser
        {
            get
            {
                return HttpContext.Current.Session["ActiveUser"] as Usuarios;
            }
            set
            {
                HttpContext.Current.Session.Timeout = 60;
                HttpContext.Current.Session["ActiveUser"] = value;
            }
        }
        public static List<ASignarPermisos> Getlistapermisos()
        {
            List<ASignarPermisos> lista = new List<ASignarPermisos>();
            using (var db= new BIOMEDICO.Models.BIOMEDICOEntities5())
            {
                lista = db.ASignarPermisos.Where(w=>w.CodRol== ActiveUser.CodRol).ToList();
                foreach (var item in lista)
                {
                    item.Permisos = db.Permisos.FirstOrDefault(w => w.IdPermiso == item.CodPermiso);
                }
            }
            return lista;
        }

        public static string ConvertFileToBase64(string path)
        {
            String file = string.Empty;
            try
            {
                Byte[] bytes = File.ReadAllBytes(path);
                file = Convert.ToBase64String(bytes);
            }
            catch (Exception ex)
            {

            }
            return file;
        }
    }
}