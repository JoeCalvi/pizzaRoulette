namespace pizzaRoulette.Repositories
{
    public class ToppingsRepository
    {
        private readonly IDbConnection _db;

        public ToppingsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal List<Topping> GetAllToppings()
        {
            string sql = @"
            SELECT
            *
            FROM
            toppings;
            ";

            List<Topping> toppings = _db.Query<Topping>(sql).ToList();
            return toppings;
        }

        internal Topping GetOneTopping(int id)
        {
            string sql = @"
            SELECT
            *
            FROM
            toppings
            WHERE id = @id;
            ";

            Topping topping = _db.Query<Topping>(sql, new { id }).FirstOrDefault();
            return topping;
        }
    }
}