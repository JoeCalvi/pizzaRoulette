namespace pizzaRoulette.Repositories
{
    public class PizzasRepository
    {
        private readonly IDbConnection _db;

        public PizzasRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Pizza CreatePizza(Pizza pizzaData)
        {
            string sql = @"
            INSERT INTO pizzas
            (sauceId, cheeseId, toppingOneId, toppingTwoId, toppingThreeId, toppingFourId, toppingFiveId)
            VALUES
            (@sauceId, @cheeseId, @toppingOneId, @toppingTwoId, @toppingThreeId, @toppingFourId, @toppingFiveId);
            SELECT LAST_INSERT_ID();
            ";

            int id = _db.ExecuteScalar<int>(sql, pizzaData);
            pizzaData.Id = id;
            return pizzaData;
        }
    }
}