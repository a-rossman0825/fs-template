namespace fs_template.DTOs;

public class AccountDTO
{
  public string Id { get; set; } = string.Empty;
  public string? Name { get; set; }
  public string? Picture { get; set; }


  public static AccountDTO MapDto(Account account)
  {
    return new AccountDTO
    {
      Id = account.Id,
      Name = account.Name,
      Picture = account.Picture
    };
  }
}