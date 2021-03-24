using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MalvArgAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MalvArgAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HorariosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public HorariosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<HorariosController>
        [HttpGet]
        public IEnumerable<Horarios> Get()
        {
            return _context.Horarios.ToList();
        }

        // GET api/<HorariosController>/5
        [HttpGet("{id}")]
        public Horarios Get(int id)
        {
            var horario = _context.Horarios.FirstOrDefault(h => h.Id == id);
            return horario;
        }

        // POST api/<HorariosController>
        [HttpPost]
        public ActionResult Post([FromBody] Horarios horarios)
        {
            try
            {
                _context.Horarios.Add(horarios);
                _context.SaveChanges();
                return Ok();
            }catch(Exception exce)
            {
                return BadRequest(exce);
            }
        }

        // PUT api/<HorariosController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Horarios horarios)
        {
            if(horarios.Id == id)
            {
                _context.Entry(horarios).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<HorariosController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var horario = _context.Horarios.FirstOrDefault(h => h.Id == id);
            if(horario != null)
            {
                _context.Horarios.Remove(horario);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
