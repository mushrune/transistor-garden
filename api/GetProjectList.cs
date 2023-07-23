using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace api
{
    public static class GetPostList
    {
        [FunctionName("GetProjectList")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "projects/list")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Projects requested");

            Project project = new Project()
            {
                Id = Guid.NewGuid(),
                Title = "Puck.ink",
                Caption = "Booking system for Tattoo Artists",
                Link = "https://puck.ink",
                Resources = new Resource[]
                {
                    new Resource()
                    {
                        Id = Guid.NewGuid(),
                        Url = "https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg",
                        Type = ResourceType.Picture
                    }
                }
            };

            string json = JsonSerializer.Serialize( new ProjectPreview[] { project.Preview });

            return new OkObjectResult(json);
        }
    }
}
