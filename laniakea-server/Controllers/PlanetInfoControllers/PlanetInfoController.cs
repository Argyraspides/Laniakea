using laniakea_server.Models.PlanetModels;
using laniakea_server.Utils;
using Microsoft.AspNetCore.Mvc;

namespace laniakea_server.Controllers.PlanetInfoControllers;

    [Route("api/[controller]")]
    [ApiController]
public class PlanetInfoController : ControllerBase
{
    [HttpPost("getPlanetInfo")]
    public async Task<IActionResult> getPlanetInfo([FromBody] PlanetInfoRequest planetInfoRequest)
    {
        // TODO: ADD EXCEPTION RESPONSES IN CASE THE API PROVIDER GOES OUT OF BUSINESS OR SMTH CHANGES LOL
        var configuration = new ConfigurationBuilder()
            .AddEnvironmentVariables()
            .Build();
        string apiKey = configuration["PLANET_KEY"];
        string apiReponse = "";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
            HttpResponseMessage resp = await client.GetAsync(PlanetUtils.makePlanetQuery(planetInfoRequest));
            resp.EnsureSuccessStatusCode();
            apiReponse = await resp.Content.ReadAsStringAsync();
        }
        
        return Ok(apiReponse);
    }
}