namespace pizzaRoulette.Models
{
    public class Topping
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public bool LittleCaesars { get; set; }
        public bool PizzaHut { get; set; }
        public bool Dominos { get; set; }
        public bool PapaJohns { get; set; }
        public bool PapaMurphys { get; set; }
        public bool Traditional { get; set; }
    }
}