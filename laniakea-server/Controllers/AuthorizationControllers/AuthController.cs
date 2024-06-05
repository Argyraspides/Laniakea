using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using UserAuthApi.Data;
using laniakea_server.Models.UserModels;
using laniakea_server.Utils; // Utilities for Authorization
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

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
            
            var configuration = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .Build();
            user.Password = hashedPassword;
            user.PasswordSalt = salt;
            user.Token = AuthUtils.GenerateJwtToken(user, configuration["JWT_KEY"]);
            user.TokenExpiry = DateTime.Today.AddDays(7);
            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            return Ok("User registered successfully");
        }

        [HttpPost("loginToken")]
        public async Task<IActionResult> LoginWithToken([FromBody] TokenRequest tokenRequest)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Token == tokenRequest.Token);
            if (user == null)
            {
                return BadRequest("No user has such token");
            }

            if (user.TokenExpiry < DateTime.Now)
            {
                return BadRequest("Token has expired");
            }

            return Ok("Successfully logged in");

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin userLogin)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == userLogin.Username);
            if (user == null)
            {
                return BadRequest("Invalid username or password");
            }
            
            
            string hashedPassword = AuthUtils.HashPassword(userLogin.Password, user.PasswordSalt);

            if (hashedPassword != user.Password)
            {
                return BadRequest("Invalid username or password");
            }
            // TODO: LOAD ENV VARS AT STARTUP AND MAKE THEM ACCESSIBLE ACROSS WHOLE APP
            var configuration = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .Build();
            
            user.Token = AuthUtils.GenerateJwtToken(user, configuration["JWT_KEY"]);
            user.TokenExpiry = DateTime.Today.AddDays(AuthUtils.DEFAULT_TOKEN_VALIDITY_PERIOD);

            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            
            return Ok(new {user.Token});
        }
    }
}