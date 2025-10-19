

namespace fs_template.Repositories
{
  public class AccountsRepository
  {
    private readonly AppDbContext _context;

    public AccountsRepository(AppDbContext context)
    {
      _context = context;
    }

    internal Account? GetById(string id)
    {
      return _context.Accounts.Find(id);
    }

    internal Account Create(Account account)
    {
      _context.Accounts.Add(account);
      _context.SaveChanges();
      return account;
    }

    internal Account Update(Account account)
    {
      _context.Accounts.Update(account);
      _context.SaveChanges();
      return account;
    }
  }
}