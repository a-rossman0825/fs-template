using fs_template.DTOs;

namespace fs_template.Controllers;

[ApiController]
[Route("[controller]")]
public class ExampleController : ControllerBase
{
  private readonly ExampleService _service;

  public ExampleController(ExampleService service)
  {
    _service = service;

  }

  [HttpGet]
  public async Task<ActionResult<List<Example>>> GetAllExamples()
  {
    try
    {
      List<ExampleDTO> examples = await _service.GetAllExamples();
      return Ok(examples);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [HttpPost]
  public async Task<ActionResult<ExampleDTO>> CreateExample([FromBody] Example exampleData)
  {
    try
    {
      ExampleDTO example = await _service.CreateExample(exampleData);
      return Ok(example);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [HttpDelete("{exampleId}")]
  public async Task<ActionResult<string>> DeleteExample(int exampleId)
  {
    try
    {
      string Msg = await _service.DeleteExample(exampleId);
      return Ok(Msg);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}