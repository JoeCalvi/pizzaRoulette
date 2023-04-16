namespace pizzaRoulette.Repositories
{
    public class PizzaToppingsRepository
    {
        private readonly IDbConnection _db;

        public PizzaToppingsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal PizzaTopping CreatePizzaTopping(PizzaTopping pizzaToppingData)
        {
            string sql = @"
            INSERT INTO pizzaToppings
            (toppingId, pizzaId)
            VALUES
            (@toppingId, @pizzaId);
            SELECT LAST_INSERT_ID();
            ";
            
            int id = _db.ExecuteScalar<int>(sql, pizzaToppingData);
            pizzaToppingData.Id = id;
            return pizzaToppingData;
        }

        internal void DeletePizzaTopping(int pizzaToppingId)
        {
            string sql = @"
            DELETE FROM pizzaToppings
            WHERE id = @pizzaToppingId;
            ";

            _db.Execute(sql, new { pizzaToppingId });
            return;
        }
    }
}