namespace pizzaRoulette.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public int CheeseId { get; set; }
        public Topping Cheese { get; set; }
        public int SauceId { get; set; }
        public Topping Sauce { get; set; }
        public int ToppingOneId { get; set; }
        public Topping ToppingOne { get; set; }
        public int ToppingTwoId { get; set; }
        public Topping ToppingTwo { get; set; }
        public int ToppingThreeId { get; set; }
        public Topping ToppingThree { get; set; }
        public int ToppingFourId { get; set; }
        public Topping ToppingFour { get; set; }
        public int ToppingFiveId { get; set; }
        public Topping ToppingFive { get; set; }
    }
}