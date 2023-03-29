namespace pizzaRoulette.Models
{
    public class Topping
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public bool littleCaesars { get; set; }
        public bool pizzaHut { get; set; }
        public bool dominos { get; set; }
        public bool papaJohns { get; set; }
        public bool papaMurphys { get; set; }
    }
}