namespace pizzaRoulette.Services
{
    public class PizzaToppingsService
    {
        private readonly PizzaToppingsRepository _repo;

        public PizzaToppingsService(PizzaToppingsRepository repo)
        {
            _repo = repo;
        }

        internal PizzaTopping CreatePizzaTopping(PizzaTopping pizzaToppingData)
        {
            PizzaTopping pizzaTopping = _repo.CreatePizzaTopping(pizzaToppingData);
            return pizzaTopping;
        }

        internal string DeletePizzaTopping(int pizzaToppingId)
        {
            _repo.DeletePizzaTopping(pizzaToppingId);
            return "PizzaTopping deleted.";
        }
    }
}