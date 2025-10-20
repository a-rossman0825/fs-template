
namespace fs_template.Controllers;


[Authorize]
[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
  private readonly AccountService _service;
  private readonly Auth0Provider _auth;

  public AccountController(AccountService service, Auth0Provider auth)
  {
    _service = service;
    _auth = auth;
  }

  [HttpGet]
  public async Task<ActionResult<AccountDTO>> Get()
  {
    try
    {
      Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
      return Ok(_service.GetOrCreateAccount(userInfo));
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}