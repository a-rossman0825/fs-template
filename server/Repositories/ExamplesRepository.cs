namespace fs_template.Repositories
{
  public class ExamplesRepository
  {
    private readonly AppDbContext _context;
    public ExamplesRepository(AppDbContext context)
    {
      _context = context;
    }

    internal Example? GetById(int id)
    {
      return _context.Examples.Find(id);
    }

    public async Task<List<Example>> GetAll()
    {
      return await _context.Examples.ToListAsync();
    }

    internal async Task<Example> Create(Example example)
    {
      _context.Examples.Add(example);
      await _context.SaveChangesAsync();
      return example;
    }

    internal async Task Delete(int id)
    {
      Example? example = await _context.Examples.FindAsync(id);
      if (example != null)
      {
        _context.Examples.Remove(example);
        _context.SaveChanges();
      }
    }
  }
}