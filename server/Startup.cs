using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using fs_template.Data;
using CodeWorks.Utils;
using fs_template.Services;
using fs_template.Repositories;

namespace fs_template;

public class Startup
{
  public Startup(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  public IConfiguration Configuration { get; }

  public void ConfigureServices(IServiceCollection services)
  {
    ConfigureCors(services);
    ConfigureAuth(services);

    // Entity Framework Registration
    services.AddDbContext<AppDbContext>(options =>
      options.UseMySql(
        Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(Configuration.GetConnectionString("DefaultConnection"))
      ));

    services.AddControllers();
    services.AddSwaggerGen(c =>
    {
      c.SwaggerDoc("v1", new OpenApiInfo { Title = "fs_template", Version = "v1" });
    });
    services.AddSingleton<Auth0Provider>();

    //Register Repositories Here
    services.AddScoped<AccountsRepository>();
    services.AddScoped<ExamplesRepository>();

    //Register Services Here
    services.AddScoped<AccountService>();
    services.AddScoped<ExampleService>();
  }

  private void ConfigureCors(IServiceCollection services)
  {
    services.AddCors(options =>
    {
      options.AddPolicy("CorsDevPolicy", builder =>
      {
        builder
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials()
          .WithOrigins(new string[]
          {
            "http://localhost:8080", "http://localhost:8081"
          });
      });
    });
  }

  private void ConfigureAuth(IServiceCollection services)
  {
    services.AddAuthentication(options =>
    {
      options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
      options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
    {
      options.Authority = $"https://{Configuration["AUTH_DOMAIN"]}/";
      options.Audience = Configuration["AUTH_AUDIENCE"];
    });

  }

  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
    if (env.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
      app.UseSwagger();
      app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "fs_template"));
      app.UseCors("CorsDevPolicy");
    }

    app.UseHttpsRedirection();
    app.UseDefaultFiles();
    app.UseStaticFiles();
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
      endpoints.MapControllers();
    });
  }
}