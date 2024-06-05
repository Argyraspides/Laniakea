using laniakea_server.Models.PlanetModels;
using laniakea_server.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace laniakea_server.Controllers.PlanetInfoControllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PlanetInfoController : ControllerBase
    {

        private readonly IMemoryCache _memoryCache;

        public PlanetInfoController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        [HttpPost("getPlanetInfo")]
        public async Task<IActionResult> getPlanetInfo([FromBody] PlanetInfoRequest planetInfoRequest)
        {
            // TODO: ADD EXCEPTION RESPONSES IN CASE THE API PROVIDER GOES OUT OF BUSINESS OR SMTH CHANGES LOL
            var configuration = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .Build();
            string apiKey = configuration["PLANET_KEY"];
            string apiReponse = "";
            string apiQueryString = PlanetUtils.makePlanetQuery(planetInfoRequest);

            if (_memoryCache.TryGetValue(apiQueryString, out string cachedData))
            {
                return Ok(cachedData);
            }

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("X-Api-Key", apiKey);
                HttpResponseMessage resp = await client.GetAsync(apiQueryString);
                resp.EnsureSuccessStatusCode();
                apiReponse = await resp.Content.ReadAsStringAsync();
            }

            var cacheEntryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(3)
            };
            
            _memoryCache.Set(apiQueryString, apiReponse, cacheEntryOptions);

            return Ok(apiReponse);
        }
    }
}