using IICUTech;
using MekashronTest.Dtos;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MekashronTest.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public async Task<ActionResult<LoginResultDTO>> Login([FromBody] LoginDTO loginDTO)
    {
        // send request
        var client = new ICUTechClient();
        var request = new LoginRequest
        {
            UserName = loginDTO.Email,
            Password = loginDTO.Password,
        };
        var response = await client.LoginAsync(request);
        // deserialize from json
        return JsonConvert.DeserializeObject<LoginResultDTO>(response.@return);
    }
}
