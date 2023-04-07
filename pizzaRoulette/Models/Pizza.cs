namespace pizzaRoulette.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public int? CheeseId { get; set; }
        public int? SauceId { get; set; }
        public int? ToppingOneId { get; set; }
        public int? ToppingTwoId { get; set; }
        public int? ToppingThreeId { get; set; }
        public int? ToppingFourId { get; set; }
        public int? ToppingFiveId { get; set; }
    }
}