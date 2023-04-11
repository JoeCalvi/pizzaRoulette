namespace pizzaRoulette.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        public int PizzaId { get; set; }
        public string AccountId { get; set; }
        public string Name { get; set; }
        public int Toppings { get; set; }
    }
}