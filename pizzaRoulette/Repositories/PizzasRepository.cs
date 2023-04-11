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
            (toppings)
            VALUES
            (@toppings);
            SELECT LAST_INSERT_ID();
            ";

            int id = _db.ExecuteScalar<int>(sql, pizzaData);
            pizzaData.Id = id;
            return pizzaData;
        }

        internal List<Pizza> GetAllPizzas()
        {
            string sql = @"
            SELECT
            *
            FROM pizzas
            ";

            List<Pizza> pizzas = _db.Query<Pizza>(sql).ToList();
            return pizzas;
        }

        internal Pizza GetPizzaById(int pizzaId)
        {
            string sql = @"
            SELECT
            *
            FROM pizzas
            WHERE id = @pizzaId;
            ";

            Pizza pizza = _db.Query<Pizza>(sql, new { pizzaId }).FirstOrDefault();
            return pizza;
        }
    }
}