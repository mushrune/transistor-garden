using System;

namespace api.Models;

public class Resource
{
    public Guid Id { get; set; }
    public string Url { get; set; }
    public ResourceType Type { get; set; }
}

public enum ResourceType
{
    Markdown,
    Audio,
    Picture,
    Video
}