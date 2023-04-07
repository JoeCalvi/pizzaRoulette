namespace pizzaRoulette.Controllers
{
    [ApiController]
    [Route("api/pizzas")]
    public class PizzasController : ControllerBase
    {
        private readonly PizzasService _pizzasService;

        public PizzasController(PizzasService pizzasService)
        {
            _pizzasService = pizzasService;
        }

        [HttpPost]
        public ActionResult<Pizza> CreatePizza([FromBody] Pizza pizzaData)
        {
            try 
            {
              Pizza pizza = _pizzasService.CreatePizza(pizzaData);
              return Ok(pizza);
            }
            catch (Exception e)
            {
              return BadRequest(e.Message);
            }
        }
        
    }
}