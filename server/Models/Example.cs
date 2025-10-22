using System.ComponentModel.DataAnnotations.Schema;

namespace fs_template.Models
{
  public class Example
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public required string ExampleText { get; set; }


    public string? CreatorId { get; set; }
  }
}

//NOTE Don't forget to register DbSet in Data/AppDbContext.cs before migration!