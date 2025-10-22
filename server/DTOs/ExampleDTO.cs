namespace fs_template.DTOs;

public class ExampleDTO
{
  public int Id { get; set; }
  public string? ExampleText { get; set; }

  public string? creatorId { get; set; }

  public static ExampleDTO MapDto(Example example)
  {
    return new ExampleDTO
    {
      Id = example.Id,
      ExampleText = example.ExampleText
    };
  }

  public static List<ExampleDTO> MapList(IEnumerable<Example> examples)
  {
    return examples.Select(MapDto).ToList();
  }
}