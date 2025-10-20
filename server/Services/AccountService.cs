
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

    internal AccountDTO GetOrCreateAccount(Account userInfo)
    {
      Account? account = _repo.GetById(userInfo.Id);
      if (account == null)
      {
        Account newAccount = _repo.Create(userInfo);
        return AccountDTO.MapDto(newAccount);
      }
      return AccountDTO.MapDto(account);
    }

    internal AccountDTO UpdateAccount(Account account)
    {
      Account updated = _repo.Update(account);
      return AccountDTO.MapDto(updated);
    }
  }
}