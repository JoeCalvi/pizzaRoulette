namespace pizzaRoulette.Services
{
    public class ToppingsService
    {
        private readonly ToppingsRepository _repo;

        public ToppingsService(ToppingsRepository repo)
        {
            _repo = repo;
        }

        internal List<Topping> GetAllToppings()
        {
            List<Topping> toppings = _repo.GetAllToppings();
            return toppings;
        }

        internal Topping GetOneTopping(int id)
        {
            Topping topping = _repo.GetOneTopping(id);
            return topping;
        }
    }
}