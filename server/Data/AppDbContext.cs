
namespace fs_template.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    //NOTE Register DbSets (models) here BEFORE migration
    public DbSet<Account> Accounts { get; set; }
    public DbSet<Example> Examples { get; set; }
  }
}