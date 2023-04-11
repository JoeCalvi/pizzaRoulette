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

        internal List<PizzaTopping> GetToppingsByPizzaId(int pizzaId)
        {
            string sql = @"
            SELECT
            pt.*,
            pizza.*,
            topping.*
            FROM pizzaToppings pt
            JOIN pizzas pizza ON pizza.id = pt.pizzaId
            JOIN toppings topping ON topping.id = pt.toppingId
            WHERE pt.pizzaId = @pizzaId;
            ";

            List<PizzaTopping> toppings = _db.Query<PizzaTopping, Pizza, Topping, PizzaTopping>(sql, (pt, pizza, topping) => 
            {
                pt.PizzaId = pizza.Id;
                pt.Pizza = pizza;
                pt.ToppingId = topping.Id;
                pt.Topping = topping;
                return pt;
            }, new { pizzaId }).ToList();
            return toppings;
        }

        internal Favorite CreateFavorite(Favorite favoriteData)
        {
            string sql = @"
            INSERT INTO favorites
            (accountId, pizzaId, name, toppings)
            VALUES
            (@accountId, @pizzaId, @name, @toppings);
            SELECT LAST_INSERT_ID();
            ";

            int id = _db.ExecuteScalar<int>(sql, favoriteData);
            favoriteData.Id = id;
            return favoriteData;
        }
    }
}