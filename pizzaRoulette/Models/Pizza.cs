namespace pizzaRoulette.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        
        public int Toppings { get; set; }
        public string PizzaFrom { get; set; }
        public string Restriction { get; set; }
        
    }
}