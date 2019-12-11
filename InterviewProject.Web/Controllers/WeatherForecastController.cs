using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InterviewProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Route("[controller]/[action]")]
    public class WeatherForecastController : ControllerBase
    {
        static readonly HttpClient client = new HttpClient();

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        async static Task<object> QueryResults(string query)
        {
            try
            {
                HttpResponseMessage response = await client.GetAsync(query);
                response.EnsureSuccessStatusCode();
                String responseBody = await response.Content.ReadAsStringAsync();
                var results = JsonSerializer.Deserialize<object>(responseBody);

                return results;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
                return new object();
            }
        }

        [HttpGet("{woeid:int}")]
       async public Task <object> GetLocation(int woeid)
        {
            Console.WriteLine(string.Format("The woeid id is {0}", woeid));
            string locationQuery = string.Format("https://www.metaweather.com/api/location/{0}", woeid);
            object results = await QueryResults(locationQuery);
            return results;
        }

        [HttpGet("{keyword}")]
        async public Task<object> SearchLocations(string keyword)
        {
            Console.WriteLine(string.Format("The woeid id is {0}", keyword));
            string locationQuery = string.Format("https://www.metaweather.com/api/location/search/?query={0}", keyword);
            object results = await QueryResults(locationQuery);
            return results;
        }


    }
}
