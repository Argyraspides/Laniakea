using System.ComponentModel.DataAnnotations;

namespace laniakea_server.Models.UserModels;

public class TokenRequest
{
    [Required]
    public string Token { get; set; }
}