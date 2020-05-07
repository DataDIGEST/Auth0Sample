using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Auth0Starter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SettingsController : Controller
    {
        private readonly IConfiguration _configuration;

        public SettingsController(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }
        
        [HttpGet("auth")]
        public ActionResult<PublicAuthSettingsModel> GetPublicAuthSettings()
        {
            try
            {
                var dto = new PublicAuthSettingsModel()
                {
                    Audience = _configuration.GetValue<string>("Auth:Audience"),
                    Domain = _configuration.GetValue<string>("Auth:Domain"),
                    ClientId = _configuration.GetValue<string>("Auth:ClientId")
                };
                return dto;
            }
            catch (Exception)
            {
                return new StatusCodeResult(500);
            }
        }      
    }
}