using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using UserAuthApi.Data;
using laniakea_server.Models.UserModels;
using laniakea_server.Utils; // Utilities for Authorization
using Microsoft.EntityFrameworkCore;


namespace laniakea_server.Controllers.AuthorizationControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _context.Users.AnyAsync(u => u.Username == user.Username))
                return BadRequest("Username already exists!");
            
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
                return BadRequest("Email already exists!");

            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            string hashedPassword = AuthUtils.HashPassword(user.Password, salt);

            user.Password = hashedPassword;
            user.PasswordSalt = salt;
            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            return Ok("User registered successfully");
        }

       

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin userLogin)
        {

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == userLogin.Username);
            if (user == null) 
                return BadRequest("Invalid username or password");
            
            
            string hashedPassword = AuthUtils.HashPassword(userLogin.Password, user.PasswordSalt);

            if (hashedPassword != user.Password)
                return BadRequest("Invalid username or password");

            return Ok("Login Successful");
        }
    }
}