using System.ComponentModel.DataAnnotations;

namespace Mission10_Assignment.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }
        [Required]
        public string TeamName { get; set; }
        public int CaptainID { get; set; }

    }
}
