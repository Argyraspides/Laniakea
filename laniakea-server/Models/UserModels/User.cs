using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using laniakea_server.Utils;
using Microsoft.EntityFrameworkCore;

namespace laniakea_server.Models.UserModels
{
    

    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public byte[]? PasswordSalt { get; set; }
        public string Email { get; set; } = string.Empty;

        public string Token { get; set; } = string.Empty;
        
        public DateTime TokenExpiry { get; set; }


    }
    
    
}