using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Web;



//namespace BIOMEDICO.Clases
////{
////    static string smtpAddress = "smtp.gmail.com";
////    static int portNumber = 587;
////    static bool enableSSL = true;
////    static string emailFromAddress = "WidSoftCo@gmail.com"; //Sender Email Address  
////    static string password = "W123456789o#"; //Sender Password


////    public static void SendEmail(string server, string emailTo)
////    {
////        string emailToAddress = emailTo;

////        string subject = "Atención";
////        string body = @"<html><body><div>
////                                ¡Producto agotado! </br>
////                               Se esta agotando este producto: "
////                            + server +
////                        @"</div></body></html>";

////        using (MailMessage mail = new MailMessage())
////        {
////            mail.From = new MailAddress("accountservice@Widsoft.com", "Minos");
////            mail.To.Add(emailToAddress);
////            mail.Subject = subject;
////            mail.Body = body;
////            mail.IsBodyHtml = true;
////            //mail.Attachments.Add(new Attachment("D:\\TestFile.txt"));//--Uncomment this to send any attachment  
////            using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
////            {
////                smtp.Credentials = new NetworkCredential(emailFromAddress, password);
////                smtp.EnableSsl = enableSSL;
////                smtp.Send(mail);
////            }
////        }
////    }
////}