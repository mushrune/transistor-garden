using System;
using System.Text.Json.Serialization;

namespace api.Models;

public class Resource
{
    [JsonPropertyName("id")] public Guid Id { get; set; }
    [JsonPropertyName("url")] public string Url { get; set; }
    [JsonPropertyName("type")] public ResourceType Type { get; set; }
}

public enum ResourceType
{
    Markdown,
    Audio,
    Picture,
    Video
}