
namespace fs_template.Models
{
  public class Account
  {
    [Key]
    [Required]
    public required string Id { get; set; }
    public string? Name { get; set; }
    [Required]
    public required string Email { get; set; }

    public string? Picture { get; set; }
  }
}