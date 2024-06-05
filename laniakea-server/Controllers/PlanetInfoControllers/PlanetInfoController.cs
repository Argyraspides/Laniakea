using laniakea_server.Models.PlanetModels;
using Microsoft.AspNetCore.Mvc;

namespace laniakea_server.Controllers.PlanetInfoControllers;

public class PlanetInfoController : ControllerBase
{
    public async Task<IActionResult> getPlanetInfo([FromBody] PlanetInfoRequest planetInfoRequest)
    {
        return Ok("Hi");
    }
}