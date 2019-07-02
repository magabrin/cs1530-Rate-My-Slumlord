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

    @GetMapping("/landlords")
    public String landlords(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("page", "landlords");
        return "index"; 
    }

    @GetMapping("/wiki")
    public String wiki(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("page", "wiki");
        return "index"; 
    }

    @GetMapping("/properties")
    public String properties(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("page", "properties");
        return "index"; 
    }

    @GetMapping("/ratings")
    public String ratings(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("page", "ratings");
        return "index"; 
    }

    @GetMapping("/createReview")
    public String createReview(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("page", "createReview");
        return "index"; 
    }

    @GetMapping("/matt")
    public String mattfunction(Model model) {
        return "matt";
    }

}


