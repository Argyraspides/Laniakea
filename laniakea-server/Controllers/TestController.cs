using Microsoft.AspNetCore.Mvc;

namespace UserAuthApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Console.WriteLine("Hit Test Endpoint");
            return Ok("Test API route works!");
        }

    }
}