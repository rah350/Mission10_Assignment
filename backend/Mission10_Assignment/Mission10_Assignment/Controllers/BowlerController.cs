using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Assignment.Data;
using Microsoft.EntityFrameworkCore;


namespace Mission10_Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class BowlerController : ControllerBase
    {

        private BowlerDbContext _bowlerContext;
        public BowlerController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }

        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerlist = _bowlerContext.Bowlers
                .Include(b => b.Team)
                .ToList();

            return (bowlerlist);
        }
    }
}
