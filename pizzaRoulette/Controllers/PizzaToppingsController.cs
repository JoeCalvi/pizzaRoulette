namespace pizzaRoulette.Controllers
{
    [ApiController]
    [Route("api/pizzaToppings")]
    public class PizzaToppingsController : ControllerBase
    {
        private readonly PizzaToppingsService _pizzaToppingsService;

        public PizzaToppingsController(PizzaToppingsService pizzaToppingsService)
        {
            _pizzaToppingsService = pizzaToppingsService;
        }

        [HttpPost]
        public ActionResult<PizzaTopping> CreatePizzaTopping([FromBody] PizzaTopping pizzaToppingData)
        {
            try 
            {
              PizzaTopping pizzaTopping = _pizzaToppingsService.CreatePizzaTopping(pizzaToppingData);
              return Ok(pizzaTopping);
            }
            catch (Exception e)
            {
              return BadRequest(e.Message);
            }
        }

        [HttpDelete("{pizzaToppingId}")]
        public ActionResult<PizzaTopping> DeletePizzaTopping(int pizzaToppingId)
        {
          try 
          {
            string message = _pizzaToppingsService.DeletePizzaTopping(pizzaToppingId);
            return Ok(message);
          }
          catch (Exception e)
          {
            return BadRequest(e.Message);
          }
        }
    }
}