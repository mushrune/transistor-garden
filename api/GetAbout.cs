using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace api
{
    public static class GetAbout
    {
        [FunctionName("GetAbout")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "about")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("About page requested.");

            string storageUrl = Environment.GetEnvironmentVariable("SITE_STORAGE_URL");
            string aboutUrl = $"{storageUrl}/sitedata/about/about.md";

            HttpClient client = new HttpClient();

            var request = new HttpRequestMessage(HttpMethod.Get, aboutUrl);
            var response = client.Send(request);
            string about = await response.Content.ReadAsStringAsync();
            
            return new OkObjectResult(about);
        }
    }
}
