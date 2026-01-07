
namespace fs_template.Controllers;

[ApiController]
[Route("[controller]")]
public class ExampleController : ControllerBase
{
  private readonly ExampleService _service;
  private readonly Auth0Provider _auth;

  public ExampleController(ExampleService service, Auth0Provider auth)
  {
    _service = service;
    _auth = auth;
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
      Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
      ExampleDTO example = await _service.CreateExample(exampleData, userInfo.Id);
      return Ok(example);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [Authorize]
  [HttpDelete("{exampleId}")]
  public async Task<ActionResult<string>> DeleteExample(int exampleId)
  {
    try
    {
      Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
      string Msg = await _service.DeleteExample(exampleId, userInfo.Id);
      return Ok(Msg);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}