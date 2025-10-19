

namespace fs_template.Services
{
  public class AccountService
  {
    private readonly AccountsRepository _repo;

    public AccountService(AccountsRepository repo)
    {
      _repo = repo;
    }

    private Account? GetAccountById(string id)
    {
      Account? account = _repo.GetById(id);
      if (account == null)
      {
        throw new Exception($"Invalid Account Id: {id}");
      }
      return account;
    }

    internal Account GetOrCreateAccount(Account userInfo)
    {
      Account? account = _repo.GetById(userInfo.Id);
      if (account == null)
      {
        return _repo.Create(userInfo);
      }
      return account;
    }

    internal Account UpdateAccount(Account account)
    {
      _repo.Update(account);
      return account;
    }
  }
}