using System.ComponentModel.DataAnnotations;

namespace laniakea_server.Models.UserModels;
// Data model for a token request
// Tokens are JWTs and sent as strings
public class TokenRequest
{
    [Required]
    public string Token { get; set; }
}