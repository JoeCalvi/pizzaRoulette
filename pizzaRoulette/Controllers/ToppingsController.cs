namespace pizzaRoulette.Controllers
{
    [ApiController]
    [Route("api/toppings")]
    public class ToppingsController : ControllerBase
    {
        private readonly ToppingsService _toppingsService;
        private readonly Auth0Provider _auth;

        public ToppingsController(ToppingsService toppingsService, Auth0Provider auth)
        {
            _toppingsService = toppingsService;
            _auth = auth;
        }

        [HttpGet]
        public ActionResult<List<Topping>> GetAllToppings()
        {
            try 
            {
              List<Topping> toppings = _toppingsService.GetAllToppings();
              return Ok(toppings);
            }
            catch (Exception e)
            {
              return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Topping> GetOneTopping(int id)
        {
            try 
            {
              Topping topping = _toppingsService.GetOneTopping(id);
              return Ok(topping);
            }
            catch (Exception e)
            {
              return BadRequest(e.Message);
            }
        }
    }
}