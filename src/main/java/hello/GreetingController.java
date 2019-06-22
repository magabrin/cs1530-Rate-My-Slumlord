package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class GreetingController {

	@GetMapping(value = "/")
	public String index(Model model) {
        model.addAttribute("page", "home");
		return "index";
	}

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("page", "greeting");
        return "index"; 
    }

    @GetMapping("/matt")
    public String mattfunction(Model model) {
        return "matt";
    }

}


