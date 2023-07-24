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
        // This function gets a project list from an Azure Cosmos DB instance ( not fully implemented )
        /*
         * Azure Cosmos DB has a complex identity based authentication mechanism which is not fully
         * implemented here. For now, hard-coding the values is fine ( for now ) as there is no CRUD operations
         * currently implemented. Future iterations will have full support for loading a project
         * list from azure cosmos db.
         */
        [FunctionName("GetProjectList")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "projects/list")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Projects requested");
            
            string storageUrl = Environment.GetEnvironmentVariable("SITE_STORAGE_URL");

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
                        Url = $"{storageUrl}/sitedata/projects/list/images/9d665ca7-ec13-4c91-b3c1-3190235ddc73.jpg",
                        Type = ResourceType.Picture
                    }
                }
            };

            string json = JsonSerializer.Serialize( new ProjectPreview[] { project.Preview });

            return new OkObjectResult(json);
        }
    }
}
