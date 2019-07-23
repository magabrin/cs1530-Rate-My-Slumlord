import jdk.internal.jline.internal.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class databaseConnection {

    private final JdbcTemplate jdbcTemplate;


    @Autowired
    public databaseConnection(JdbcTemplate _jdbctemplate){
        jdbcTemplate = _jdbctemplate;
    }

    @RequestMapping("/landlordSearch")
    public String landlordSearch(@RequestParam(value="name", defaultValue="") String name) {
        //jdbcTemplate.` `
        jdbcTemplate.execute("SELECT * from rms.landlord where name like 'example'");
    }
}
