using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MalvArgAPI.Models
{
    public class Horarios
    {
        [Key]
        public int Id { get; set; }
        public string Cordoba { get; set; }
        public string Ferreyra { get; set; }
        public string Km80 { get; set; }
        public string Toledo { get; set; }
        public string RioSegundo { get; set; }
        public string Pilar { get; set; }
        public string LagunaLarga { get; set; }
    }
}
