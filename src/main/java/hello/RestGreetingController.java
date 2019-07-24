package hello;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestGreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private JdbcTemplate jdbcTemplate;

    @RequestMapping("/restgreeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }

    @Autowired
    public void databaseConnection(JdbcTemplate _jdbctemplate){
        jdbcTemplate = _jdbctemplate;
    }

    @RequestMapping("/landlordSearch")
    public String landlordSearch(@RequestParam(value="name", defaultValue="") String name) {
        //jdbcTemplate.` `
        List<Map<String,Object>> result = jdbcTemplate.queryForList("SELECT * from rms.landlord where name ilike '" + name + "'");
        String ret = "null";

        try{
            ret = result.get(0).toString();
        }catch(IndexOutOfBoundsException ignored){}

        return ret;
    }

    @RequestMapping("/allproperties")
    public List<Map<String, Object>> allProperties(){

        return jdbcTemplate.queryForList("SELECT property.house_number,property.street from property");
    }
}