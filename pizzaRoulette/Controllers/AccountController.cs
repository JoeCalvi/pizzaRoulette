namespace pizzaRoulette.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
  private readonly AccountService _accountService;
  private readonly Auth0Provider _auth0Provider;
  private readonly PizzasService _pizzasService;

    public AccountController(AccountService accountService, Auth0Provider auth0Provider, PizzasService pizzasService)
    {
        _accountService = accountService;
        _auth0Provider = auth0Provider;
        _pizzasService = pizzasService;
    }

    [HttpGet]
  [Authorize]
  public async Task<ActionResult<Account>> Get()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      return Ok(_accountService.GetOrCreateProfile(userInfo));
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  [HttpPost("favorites")]
  [Authorize]
  public async Task<ActionResult<Favorite>> CreateFavorite([FromBody] Favorite favoriteData)
  {
    try 
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      favoriteData.AccountId = userInfo.Id;
      Favorite favorite = _pizzasService.CreateFavorite(favoriteData);
      return Ok(favorite);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  [HttpGet("favorites")]
  [Authorize]
  public ActionResult<List<Favorite>> GetMyFavorites()
  {
    try 
    {
      List<Favorite> favorites = _accountService.GetMyFavorites();
      return favorites;
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }
}
