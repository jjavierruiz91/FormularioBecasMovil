//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BIOMEDICO.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BecasMovil
    {
        public int IdBecasMovil { get; set; }
        public string NombreBecasMovil { get; set; }
        public string ApellidosBecasMovil { get; set; }
        public string TipoDocumento { get; set; }
        public Nullable<long> NumeroDocumento { get; set; }
        public string TipoDocumentoPdf { get; set; }
        public string CorreoElectronico { get; set; }
        public string NumeroContacto { get; set; }
        public string Direccion { get; set; }
        public string NivelSisbenPdf { get; set; }
        public string NivelEscolaridadPdf { get; set; }
        public string MunicipioResidencia { get; set; }
        public string LugarNacimiento { get; set; }
        public string TipoPoblacion { get; set; }
        public Nullable<System.DateTime> FechaRegistro { get; set; }
        public string TipoSisben { get; set; }
        public string TipoEscolaridad { get; set; }
        public string InstitucionEducativa { get; set; }
    }
}
