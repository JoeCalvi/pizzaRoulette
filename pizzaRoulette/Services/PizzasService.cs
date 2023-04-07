namespace pizzaRoulette.Services
{
    public class PizzasService
    {
        private readonly PizzasRepository _repo;

        public PizzasService(PizzasRepository repo)
        {
            _repo = repo;
        }

        internal Pizza CreatePizza(Pizza pizzaData)
        {
            Pizza pizza = _repo.CreatePizza(pizzaData);
            return pizza;
        }
    }
}