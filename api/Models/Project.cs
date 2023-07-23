using System;
using System.Linq;
using System.Text.Json.Serialization;

namespace api.Models;

// This model is used to represent a particular project on the website.
public class Project
{
    [JsonPropertyName("id")] public Guid Id { get; set; }
    [JsonPropertyName("title")] public string Title { get; set; }
    [JsonPropertyName("caption")] public string Caption { get; set; }
    [JsonPropertyName("resources")] public Resource[] Resources { get; set; }
    [JsonPropertyName("link")] public string Link { get; set; }

    public ProjectPreview Preview
    {
        get
        {
            return new ProjectPreview()
            {
                Caption = Caption,
                Title = Title,
                Id = Id,
                Link = Link,
                PreviewPictureUrl = Resources
                    .Where( r => r.Type == ResourceType.Picture )
                    .FirstOrDefault()
                    ?.Url
            };
        }
    }
}

public class ProjectPreview
{
    [JsonPropertyName("id")] public Guid Id { get; set; }
    [JsonPropertyName("title")] public string Title { get; set; }
    [JsonPropertyName("caption")] public string Caption { get; set; }
    [JsonPropertyName("link")] public string Link { get; set; }
    [JsonPropertyName("previewPictureUrl")] public string PreviewPictureUrl { get; set; }
}