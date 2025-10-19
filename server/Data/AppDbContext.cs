using Microsoft.EntityFrameworkCore;
using fs_template.Models;

namespace fs_template.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    public DbSet<Account> Accounts { get; set; }
  }
}