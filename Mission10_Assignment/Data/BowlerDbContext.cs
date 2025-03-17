using Microsoft.EntityFrameworkCore;

namespace Mission10_Assignment.Data
{
    public class BowlerDbContext: DbContext
    {
        public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options) { }
        public DbSet<Bowler> Bowlers { get; set; }
        public DbSet<Team> Teams { get; set; }

    }
}
