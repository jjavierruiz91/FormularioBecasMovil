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
    
    public partial class ASignarPermisos
    {
        public int IdPermiso { get; set; }
        public int CodPermiso { get; set; }
        public Nullable<int> CodRol { get; set; }
    
        public virtual Permisos Permisos { get; set; }
        public virtual Rol Rol { get; set; }
    }
}
