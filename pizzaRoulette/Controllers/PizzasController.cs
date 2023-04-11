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
        
        [HttpGet]
        public ActionResult<List<Pizza>> GetAllPizzas()
        {
          try 
          {
            List<Pizza> pizzas = _pizzasService.GetAllPizzas();
            return Ok(pizzas);
          }
          catch (Exception e)
          {
            return BadRequest(e.Message);
          }
        }

        [HttpGet("{pizzaId}")]
        public ActionResult<Pizza> GetPizzaById(int pizzaId)
        {
          try 
          {
            Pizza pizza = _pizzasService.GetPizzaById(pizzaId);
            return Ok(pizza);
          }
          catch (Exception e)
          {
            return BadRequest(e.Message);
          }
        }

        [HttpGet("{pizzaId}/toppings")]
        public ActionResult<List<PizzaTopping>> GetToppingsByPizzaId(int pizzaId)
        {
          try 
          {
            List<PizzaTopping> toppings = _pizzasService.GetToppingsByPizzaId(pizzaId);
            return Ok(toppings);
          }
          catch (Exception e)
          {
            return BadRequest(e.Message);
          }
        }

        [HttpDelete("{pizzaId}")]
        public ActionResult<Pizza> DeletePizza(int pizzaId)
        {
          try 
          {
            string message = _pizzasService.DeletePizza(pizzaId);
            return Ok(message);
          }
          catch (Exception e)
          {
            return BadRequest(e.Message);
          }
        }
    }
}