using fs_template.DTOs;

namespace fs_template.Services
{
  public class ExampleService
  {
    private readonly ExamplesRepository _repo;

    public ExampleService(ExamplesRepository repo)
    {
      _repo = repo;
    }

    private Example? GetExampleById(int id)
    {
      Example? example = _repo.GetById(id);
      if (example == null)
      {
        throw new Exception($"Invalid Example Id: {id}");
      }
      return example;
    }

    public async Task<List<ExampleDTO>> GetAllExamples()
    {
      List<Example> examples = await _repo.GetAll();
      List<ExampleDTO> dtos = ExampleDTO.MapList(examples);
      return dtos;
    }

    internal async Task<ExampleDTO> CreateExample(Example exampleData)
    {
      Example newExample = await _repo.Create(exampleData);
      return ExampleDTO.MapDto(newExample);
    }

    internal async Task<string> DeleteExample(int id)
    {
      await _repo.Delete(id);
      return $"Example with id: {id} has been deleted";
    }
  }
}